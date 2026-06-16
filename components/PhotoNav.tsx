'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { WorkItem } from '@/data/types'

interface PhotoNavProps {
  currentId: string
  category: string
  subcategory: string
}

export default function PhotoNav({ currentId, category, subcategory }: PhotoNavProps) {
  const router = useRouter()
  const [neighbors, setNeighbors] = useState<{ prev: string | null; next: string | null }>({ prev: null, next: null })

  useEffect(() => {
    fetch('/api/works')
      .then((r) => r.json())
      .then((works: WorkItem[]) => {
        const siblings = works
          .filter((w) => w.category === category && w.subcategory === subcategory)
          .sort((a, b) => {
            const aNum = parseInt(a.id.split('-').pop() || '0')
            const bNum = parseInt(b.id.split('-').pop() || '0')
            return aNum - bNum
          })
        const idx = siblings.findIndex((w) => w.id === currentId)
        setNeighbors({
          prev: idx > 0 ? siblings[idx - 1].id : null,
          next: idx < siblings.length - 1 ? siblings[idx + 1].id : null,
        })
      })
  }, [currentId, category, subcategory])

  const goTo = (id: string) => {
    router.push(`/work/${id}`)
  }

  const arrowClass = `
    absolute top-1/2 -translate-y-1/2 z-10
    w-[48px] h-[48px] flex items-center justify-center
    text-ink-obsidian/0 group-hover:text-ink-obsidian/60
    hover:!text-ink-obsidian hover:bg-canvas-parchment/80
    transition-all duration-300 cursor-pointer select-none
    font-display text-[28px] leading-none
  `

  return (
    <>
      {neighbors.prev && (
        <button
          onClick={() => goTo(neighbors.prev!)}
          className={`${arrowClass} left-0 md:-left-[60px]`}
          aria-label="上一张"
        >
          ‹
        </button>
      )}
      {neighbors.next && (
        <button
          onClick={() => goTo(neighbors.next!)}
          className={`${arrowClass} right-0 md:-right-[60px]`}
          aria-label="下一张"
        >
          ›
        </button>
      )}
    </>
  )
}
