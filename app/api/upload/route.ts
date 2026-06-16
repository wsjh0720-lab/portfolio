import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const files = formData.getAll('files') as File[]

    // 单文件兼容
    const single = formData.get('file') as File | null
    const allFiles = files.length > 0 ? files : (single ? [single] : [])

    if (allFiles.length === 0) {
      return NextResponse.json({ error: 'No files' }, { status: 400 })
    }

    const urls: string[] = []
    for (const file of allFiles) {
      if (!(file instanceof File)) continue
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const ext = file.name.split('.').pop() || 'jpg'
      const filename = `upload-${Date.now()}-${Math.random().toString(36).slice(2, 6)}.${ext}`
      const filepath = path.join(process.cwd(), 'public', 'uploads', filename)
      await writeFile(filepath, buffer)
      urls.push(`/uploads/${filename}`)
    }

    return NextResponse.json({ urls, url: urls[0] })
  } catch {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
