'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    setError('')
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push('/admin/dashboard')
    } else {
      setError('密码错误')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas-parchment px-[30px]">
      <div className="w-full max-w-[360px]">
        <h1 className="font-display text-display-xl text-ink-obsidian mb-[40px]">
          管理后台
        </h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          placeholder="输入密码"
          className="w-full font-sans text-lg bg-transparent border border-ink-obsidian/20 px-[20px] py-[14px] mb-[16px] outline-none focus:border-ink-obsidian text-ink-obsidian"
          autoFocus
        />
        {error && (
          <p className="font-sans text-[15px] text-red-600 mb-[16px]">{error}</p>
        )}
        <button
          onClick={handleLogin}
          className="w-full font-sans text-lg bg-deep-midnight text-pure-white py-[14px] hover:bg-ink-obsidian transition-colors"
        >
          登录
        </button>
      </div>
    </div>
  )
}
