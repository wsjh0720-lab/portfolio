'use client'

import { useState, useEffect, useMemo } from 'react'
import { WorkItem } from '@/data/types'
import CategoryFilter from './CategoryFilter'
import WorkCard from './WorkCard'

type MainCategory = 'all' | 'video' | 'photo' | 'ai'

export default function WorkGrid() {
  const [mainFilter, setMainFilter] = useState<MainCategory>('all')
  const [subFilter, setSubFilter] = useState<string | null>(null)
  const [works, setWorks] = useState<WorkItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/works')
      .then((r) => r.json())
      .then((data) => {
        setWorks(data)
        setLoading(false)
      })
  }, [])

  const filteredWorks = useMemo(() => {
    let result: WorkItem[] = works
    if (mainFilter !== 'all') {
      result = result.filter((w) => w.category === mainFilter)
    }
    if (subFilter !== null) {
      // AI子分类映射: 'AI视频'→'视频', 'AI图片'→'图片'
      const sub = subFilter.replace(/^AI/, '')
      result = result.filter((w) => w.subcategory === sub)
    }
    return result.sort((a, b) => b.year - a.year)
  }, [works, mainFilter, subFilter])

  const handleFilterChange = (main: MainCategory, sub: string | null) => {
    setMainFilter(main)
    setSubFilter(sub)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-[80px]">
        <p className="font-sans text-lg text-ink-obsidian/50">加载中…</p>
      </div>
    )
  }

  return (
    <section>
      <CategoryFilter onFilterChange={handleFilterChange} />

      {filteredWorks.length === 0 ? (
        <p className="font-sans text-lg text-ink-obsidian/50 py-section text-center">
          暂无作品
        </p>
      ) : (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-[20px]">
          {filteredWorks.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      )}
    </section>
  )
}
