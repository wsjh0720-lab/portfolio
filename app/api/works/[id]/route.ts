import { NextRequest, NextResponse } from 'next/server'
import { updateWork, deleteWork } from '@/lib/works-store'

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json()
    const updated = updateWork(params.id, body)
    if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(updated)
  } catch {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const ok = deleteWork(params.id)
  if (!ok) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ success: true })
}
