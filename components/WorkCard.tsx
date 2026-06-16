'use client'

import Link from 'next/link'
import { WorkItem } from '@/data/types'

interface WorkCardProps {
  work: WorkItem
  index: number
}

export default function WorkCard({ work, index }: WorkCardProps) {
  const isPhoto = work.category === 'photo' || (work.category === 'ai' && work.subcategory === '图片')

  return (
    <Link
      href={`/work/${work.id}`}
      className="group block animate-fade-in break-inside-avoid mb-[16px]"
      style={{ animationDelay: `${index * 20}ms`, animationFillMode: 'both' }}
    >
      <article>
        <div className="relative overflow-hidden">
          <img
            src={work.coverImage}
            alt={work.title}
            className={`w-full h-auto transition-all duration-500 group-hover:scale-[1.02] ${
              isPhoto ? '' : 'aspect-video object-cover'
            }`}
            loading="lazy"
          />
          {/* Hover overlay for photos */}
          {isPhoto && (
            <div className="absolute inset-0 bg-deep-midnight/0 group-hover:bg-deep-midnight/10 transition-colors duration-300" />
          )}
          {/* Category badge */}
          <span className="absolute top-[10px] left-[10px] font-sans text-[11px] text-pure-white bg-deep-midnight/50 px-[7px] py-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {work.subcategory}
          </span>
          {/* Video duration */}
          {!isPhoto && 'duration' in work && work.duration && (
            <span className="absolute bottom-[10px] right-[10px] font-sans text-[11px] text-pure-white bg-deep-midnight/60 px-[6px] py-[2px]">
              {work.duration}
            </span>
          )}
        </div>
        {/* Video title */}
        {!isPhoto && (
          <div className="flex flex-col gap-[4px] mt-[10px] px-[2px]">
            <h3 className="font-display text-[15px] leading-[1.2] text-ink-obsidian group-hover:text-deep-midnight transition-colors duration-200">
              {work.title}
            </h3>
            <div className="flex items-center gap-[10px]">
              <span className="font-sans text-[15px] text-ink-obsidian/50">{work.year}</span>
              {'client' in work && work.client && (
                <>
                  <span className="text-ink-obsidian/20">/</span>
                  <span className="font-sans text-[15px] text-ink-obsidian/50">{work.client}</span>
                </>
              )}
            </div>
          </div>
        )}
      </article>
    </Link>
  )
}
