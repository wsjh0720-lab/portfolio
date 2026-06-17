'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { WorkItem, PhotoSubcategory } from '@/data/types'
import { works } from '@/lib/works-static'

const subcategories: { key: PhotoSubcategory | 'all'; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: '人像', label: '人像' },
  { key: '产品', label: '产品' },
  { key: '手机摄影', label: '手机摄影' },
]

export default function PhotoPage() {
  const [activeSub, setActiveSub] = useState<PhotoSubcategory | 'all'>('all')
  const photoWorks = works.filter((w): w is WorkItem & { category: 'photo' } => w.category === 'photo')

  const filteredWorks = useMemo(() => {
    if (activeSub === 'all') return photoWorks.sort((a, b) => b.year - a.year)
    return photoWorks.filter((w) => w.subcategory === activeSub).sort((a, b) => b.year - a.year)
  }, [activeSub])

  return (
    <div className="px-[var(--card-padding)] py-section">
      <div className="mx-auto max-w-readable">
        {/* Header */}
        <div className="mb-section">
          <h1 className="font-display text-hero-md md:text-[56px] leading-[0.9] text-ink-obsidian tracking-tight mb-[30px]">
            Photo
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

        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-[20px]">
          {filteredWorks.map((work, i) => (
            <Link
              key={work.id}
              href={`/work/${work.id}`}
              className="group block animate-fade-in break-inside-avoid mb-[16px]"
              style={{ animationDelay: `${i * 20}ms`, animationFillMode: 'both' }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={work.coverImage}
                  alt={work.title}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-deep-midnight/0 group-hover:bg-deep-midnight/10 transition-colors duration-300" />
                <span className="absolute top-[10px] left-[10px] font-sans text-[11px] text-pure-white bg-deep-midnight/50 px-[7px] py-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {work.subcategory}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
