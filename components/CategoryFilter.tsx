'use client'

import { useState } from 'react'

type MainCategory = 'all' | 'video' | 'photo' | 'ai'

const mainCategories: { key: MainCategory; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'video', label: '视频' },
  { key: 'photo', label: '照片' },
  { key: 'ai', label: 'AI' },
]

const subCategories: Record<MainCategory, string[]> = {
  all:   ['导演', '后期', '拍摄', '人像', '产品', '手机摄影', 'AI视频', 'AI图片'],
  video: ['导演', '后期', '拍摄'],
  photo: ['人像', '产品', '手机摄影'],
  ai:    ['AI视频', 'AI图片'],
}

interface CategoryFilterProps {
  onFilterChange: (main: MainCategory, sub: string | null) => void
}

export default function CategoryFilter({ onFilterChange }: CategoryFilterProps) {
  const [activeMain, setActiveMain] = useState<MainCategory>('all')
  const [activeSub, setActiveSub] = useState<string | null>(null)

  const handleMainClick = (key: MainCategory) => {
    setActiveMain(key)
    setActiveSub(null)
    onFilterChange(key, null)
  }

  const handleSubClick = (sub: string) => {
    const next = activeSub === sub ? null : sub
    setActiveSub(next)
    onFilterChange(activeMain, next)
  }

  return (
    <div className="flex flex-col gap-[20px] mb-section">
      <div className="flex items-center gap-[30px]">
        {mainCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleMainClick(cat.key)}
            className={`font-display text-display-lg tracking-tight transition-colors duration-200 ${
              activeMain === cat.key
                ? 'text-deep-midnight'
                : 'text-ink-obsidian/40 hover:text-ink-obsidian/70'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-[16px] flex-wrap">
        {subCategories[activeMain].map((sub) => (
          <button
            key={sub}
            onClick={() => handleSubClick(sub)}
            className={`font-sans text-lg transition-all duration-200 ${
              activeSub === sub
                ? 'text-deep-midnight border-b border-deep-midnight'
                : 'text-ink-obsidian/50 hover:text-ink-obsidian/80'
            }`}
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
  )
}
