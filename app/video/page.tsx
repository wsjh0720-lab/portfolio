'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { WorkItem, VideoSubcategory } from '@/data/types'

const subcategories: { key: VideoSubcategory | 'all'; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: '导演', label: '导演' },
  { key: '拍摄', label: '拍摄' },
  { key: '后期', label: '后期' },
]

export default function VideoPage() {
  const [activeSub, setActiveSub] = useState<VideoSubcategory | 'all'>('all')
  const [allWorks, setAllWorks] = useState<(WorkItem & { category: 'video' })[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/works')
      .then((r) => r.json())
      .then((data: WorkItem[]) => {
        setAllWorks(data.filter((w): w is WorkItem & { category: 'video' } => w.category === 'video'))
        setLoading(false)
      })
  }, [])

  const filteredWorks = useMemo(() => {
    if (activeSub === 'all') return allWorks.sort((a, b) => b.year - a.year)
    return allWorks.filter((w) => w.subcategory === activeSub).sort((a, b) => b.year - a.year)
  }, [allWorks, activeSub])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-canvas-parchment">
        <p className="font-sans text-lg text-ink-obsidian/50">加载中…</p>
      </div>
    )
  }

  return (
    <div className="px-[var(--card-padding)] py-section">
      <div className="mx-auto max-w-readable">
        <div className="mb-section">
          <h1 className="font-display text-hero-md md:text-[56px] leading-[0.9] text-ink-obsidian tracking-tight mb-[30px]">
            Video
          </h1>
          <div className="flex items-center gap-[16px] flex-wrap">
            {subcategories.map((sub) => (
              <button
                key={sub.key}
                onClick={() => setActiveSub(sub.key)}
                className={`font-sans text-lg transition-all duration-200 ${
                  activeSub === sub.key
                    ? 'text-deep-midnight border-b border-deep-midnight'
                    : 'text-ink-obsidian/50 hover:text-ink-obsidian/80'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {filteredWorks.map((work, i) => (
            <Link
              key={work.id}
              href={`/work/${work.id}`}
              className="group block animate-fade-in"
              style={{ animationDelay: `${i * 20}ms`, animationFillMode: 'both' }}
            >
              <div className="relative overflow-hidden mb-[12px]">
                <img
                  src={work.coverImage}
                  alt={work.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span className="absolute top-[12px] left-[12px] font-sans text-[12px] text-pure-white bg-deep-midnight/60 px-[8px] py-[3px]">
                  {work.subcategory}
                </span>
                {work.duration && (
                  <span className="absolute bottom-[12px] right-[12px] font-sans text-[12px] text-pure-white bg-deep-midnight/60 px-[6px] py-[2px]">
                    {work.duration}
                  </span>
                )}
              </div>
              <h3 className="font-display text-[15px] leading-[1.2] text-ink-obsidian group-hover:text-deep-midnight transition-colors duration-200">
                {work.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
