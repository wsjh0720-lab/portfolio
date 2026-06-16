'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { WorkItem } from '@/data/types'

export default function DashboardPage() {
  const [works, setWorks] = useState<WorkItem[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchWorks = async () => {
    const res = await fetch('/api/works')
    const data = await res.json()
    setWorks(data)
    setLoading(false)
  }

  useEffect(() => { fetchWorks() }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('确定删除？')) return
    await fetch(`/api/works/${id}`, { method: 'DELETE' })
    fetchWorks()
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-canvas-parchment">
        <p className="font-sans text-lg text-ink-obsidian/50">加载中…</p>
      </div>
    )
  }

  const grouped: Record<string, WorkItem[]> = {}
  for (const w of works) {
    const key = w.category === 'ai' ? 'AI' : w.category === 'video' ? '视频' : '照片'
    if (!grouped[key]) grouped[key] = []
    grouped[key].push(w)
  }

  return (
    <div className="min-h-screen bg-canvas-parchment px-[30px] py-section">
      <div className="mx-auto max-w-readable">
        <div className="flex items-center justify-between mb-section">
          <h1 className="font-display text-display-xl text-ink-obsidian">作品管理</h1>
          <div className="flex items-center gap-[20px]">
            <Link
              href="/admin/work/new"
              className="font-sans text-lg bg-deep-midnight text-pure-white px-[20px] py-[10px] hover:bg-ink-obsidian transition-colors"
            >
              + 新增作品
            </Link>
            <button
              onClick={handleLogout}
              className="font-sans text-lg text-ink-obsidian/50 hover:text-ink-obsidian"
            >
              退出
            </button>
          </div>
        </div>

        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-section">
            <h2 className="font-display text-3xl text-ink-obsidian mb-[20px]">{category}</h2>
            <div className="flex flex-col gap-[8px]">
              {items.map((w) => (
                <div
                  key={w.id}
                  className="flex items-center justify-between border border-ink-obsidian/10 px-[20px] py-[14px]"
                >
                  <div className="flex items-center gap-[16px] flex-1 min-w-0">
                    <span className="font-sans text-[13px] text-ink-obsidian/30 w-[60px] shrink-0">
                      {w.subcategory}
                    </span>
                    <span className="font-sans text-lg text-ink-obsidian truncate">{w.title}</span>
                    <span className="font-sans text-[15px] text-ink-obsidian/40">{w.year}</span>
                  </div>
                  <div className="flex items-center gap-[12px] shrink-0 ml-[16px]">
                    <Link
                      href={`/admin/work/${w.id}/edit`}
                      className="font-sans text-[15px] text-ink-obsidian/50 hover:text-ink-obsidian"
                    >
                      编辑
                    </Link>
                    <button
                      onClick={() => handleDelete(w.id)}
                      className="font-sans text-[15px] text-red-600/60 hover:text-red-600"
                    >
                      删除
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
