import { notFound } from 'next/navigation'
import Link from 'next/link'
import { works } from '@/lib/works-static'
import VideoEmbed from '@/components/VideoEmbed'
import PhotoNav from '@/components/PhotoNav'

export function generateStaticParams() {
  return works.map((work) => ({ id: work.id }))
}

export default function WorkDetailPage({ params }: { params: { id: string } }) {
  const work = works.find((w) => w.id === params.id)

  if (!work) {
    notFound()
  }

  const categoryLabel = work.category === 'video' ? '视频' : work.category === 'ai' ? 'AI' : '照片'
  const hasVideo = (work.category === 'video' || work.category === 'ai') && (('bilibiliId' in work && !!work.bilibiliId) || ('xinpianchangUrl' in work && !!work.xinpianchangUrl))
  const workImages = 'images' in work && work.images ? work.images : []
  const isPhoto = !hasVideo

  return (
    <article className="px-[var(--card-padding)] py-section">
      <div className="mx-auto max-w-readable">
        <Link
          href="/"
          className="inline-flex font-sans text-lg text-ink-obsidian/50 hover:text-ink-obsidian transition-colors duration-200 mb-[40px]"
        >
          ← 返回作品
        </Link>

        {/* Header — only for videos */}
        {!isPhoto && (
        <header className="mb-[40px]">
          <div className="flex items-center gap-[16px] mb-[16px]">
            <span className="font-sans text-[13px] text-pure-white bg-deep-midnight px-[10px] py-[4px]">
              {work.subcategory}
            </span>
            <span className="font-sans text-[13px] text-ink-obsidian/50">
              {categoryLabel}
            </span>
          </div>

          <h1 className="font-display text-display-xl md:text-hero-md leading-[0.9] text-ink-obsidian mb-[16px]">
            {work.title}
          </h1>

          <div className="flex items-center gap-[16px] font-sans text-lg text-ink-obsidian/50 flex-wrap">
            <span>{work.year}</span>
            {'duration' in work && work.duration && (
              <>
                <span className="text-ink-obsidian/20">/</span>
                <span>{work.duration}</span>
              </>
            )}
            {'client' in work && work.client && (
              <>
                <span className="text-ink-obsidian/20">/</span>
                <span>{work.client}</span>
              </>
            )}
            {'location' in work && (work as any).location && (
              <>
                <span className="text-ink-obsidian/20">/</span>
                <span>{(work as any).location}</span>
              </>
            )}
          </div>
        </header>
        )}

        {/* Video embed (B站 or 新片场) */}
        {hasVideo && (
          <div className="mb-[40px]">
            <VideoEmbed
              bilibiliId={'bilibiliId' in work ? work.bilibiliId : undefined}
              xinpianchangUrl={'xinpianchangUrl' in work ? work.xinpianchangUrl : undefined}
              coverImage={work.coverImage}
              title={work.title}
            />
          </div>
        )}

        {/* Image gallery */}
        {isPhoto && (
          <div className="mb-[40px] -mx-[var(--card-padding)] md:mx-0">
            <div className="relative group">
              <PhotoNav currentId={work.id} category={work.category} subcategory={work.subcategory} />
              {workImages.length > 0 ? (
                <div className="flex flex-col gap-[32px]">
                  {workImages.map((img, i) => (
                    <div key={i} className="flex items-center justify-center bg-canvas-parchment">
                      <img
                        src={img}
                        alt={`${work.title} - ${i + 1}`}
                        className="max-w-full max-h-[85vh] w-auto h-auto object-contain border-[10px] border-pure-white shadow-lg"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center bg-canvas-parchment">
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain border-[10px] border-pure-white shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="max-w-[640px]">
          <p className="font-sans text-lg text-ink-obsidian leading-[1.67]">
            {work.description}
          </p>
        </div>
      </div>
    </article>
  )
}
