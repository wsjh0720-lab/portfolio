'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { WorkItem } from '@/data/types'
import WorkEditor from '@/components/WorkEditor'

export default function EditWorkPage() {
  const params = useParams()
  const [work, setWork] = useState<WorkItem | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/works')
      .then((r) => r.json())
      .then((data: WorkItem[]) => {
        setWork(data.find((w) => w.id === params.id) || null)
        setLoading(false)
      })
  }, [params.id])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-canvas-parchment">
      <p className="font-sans text-lg text-ink-obsidian/50">加载中…</p>
    </div>
  )

  if (!work) return (
    <div className="min-h-screen flex items-center justify-center bg-canvas-parchment">
      <p className="font-sans text-lg text-ink-obsidian/50">作品未找到</p>
    </div>
  )

  return <WorkEditor initial={work} />
}
