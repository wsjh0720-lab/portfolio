import { NextRequest, NextResponse } from 'next/server'
import { readWorks, addWork } from '@/lib/works-store'

export async function GET() {
  return NextResponse.json(readWorks())
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const work = addWork(body)
    return NextResponse.json(work, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
}
