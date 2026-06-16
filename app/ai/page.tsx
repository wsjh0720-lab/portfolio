'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { WorkItem, AISubcategory } from '@/data/types'

const subcategories: { key: AISubcategory | 'all'; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: '视频', label: '视频' },
  { key: '图片', label: '图片' },
]

export default function AIPage() {
  const [activeSub, setActiveSub] = useState<AISubcategory | 'all'>('all')
  const [allWorks, setAllWorks] = useState<(WorkItem & { category: 'ai' })[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/works')
      .then((r) => r.json())
      .then((data: WorkItem[]) => {
        setAllWorks(data.filter((w): w is WorkItem & { category: 'ai' } => w.category === 'ai'))
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
        {/* Header */}
        <div className="mb-section">
          <h1 className="font-display text-hero-md md:text-[56px] leading-[0.9] text-ink-obsidian tracking-tight mb-[20px]">
            AI
          </h1>
          <p className="font-sans text-lg text-ink-obsidian/50 max-w-[480px] leading-[1.67] mb-[30px]">
            AI 生成与实拍结合的实验性作品，探索影像创作的边界
          </p>
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

        {/* Grid */}
        <div className={activeSub === '图片' ? 'columns-1 md:columns-2 lg:columns-3 gap-[20px]' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'}>
          {filteredWorks.map((work, i) => {
            const isImg = work.subcategory === '图片'
            return (
            <Link
              key={work.id}
              href={`/work/${work.id}`}
              className={`group block animate-fade-in ${isImg ? 'break-inside-avoid mb-[16px]' : ''}`}
              style={{ animationDelay: `${i * 20}ms`, animationFillMode: 'both' }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={work.coverImage}
                  alt={work.title}
                  className={`w-full h-auto transition-transform duration-500 group-hover:scale-[1.02] ${isImg ? '' : 'aspect-video object-cover'}`}
                  loading="lazy"
                />
                {isImg && <div className="absolute inset-0 bg-deep-midnight/0 group-hover:bg-deep-midnight/10 transition-colors duration-300" />}
                <span className={`absolute top-[10px] left-[10px] font-sans text-[11px] text-pure-white bg-deep-midnight/50 px-[7px] py-[2px] ${isImg ? 'opacity-0 group-hover:opacity-100' : ''} transition-opacity duration-200`}>
                  {work.subcategory}
                </span>
                {'duration' in work && work.duration && (
                  <span className="absolute bottom-[10px] right-[10px] font-sans text-[11px] text-pure-white bg-deep-midnight/60 px-[6px] py-[2px]">
                    {work.duration}
                  </span>
                )}
              </div>
              {!isImg && (
                <>
                  <h3 className="font-display text-[15px] leading-[1.2] text-ink-obsidian group-hover:text-deep-midnight transition-colors duration-200 mt-[10px]">
                    {work.title}
                  </h3>
                </>
              )}
            </Link>
          )})}
        </div>
      </div>
    </div>
  )
}
