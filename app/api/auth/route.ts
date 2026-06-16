import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  if (password === process.env.ADMIN_PASSWORD) {
    const res = NextResponse.json({ ok: true })
    res.cookies.set('admin_token', password, {
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 24h
    })
    return res
  }
  return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
}
