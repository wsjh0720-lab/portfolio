'use client'

interface VideoEmbedProps {
  bilibiliId?: string
  xinpianchangUrl?: string
  coverImage?: string
  title: string
}

export default function VideoEmbed({ bilibiliId, xinpianchangUrl, coverImage, title }: VideoEmbedProps) {
  // B站嵌入
  if (bilibiliId && /^BV/i.test(bilibiliId)) {
    const bilibiliUrl = `https://www.bilibili.com/video/${bilibiliId}`
    return (
      <div>
        <div className="relative w-full aspect-video bg-ink-obsidian/5 mb-[12px]">
          <iframe
            src={`https://player.bilibili.com/player.html?bvid=${bilibiliId}&high_quality=1&autoplay=0&danmaku=0`}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <a
          href={bilibiliUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[8px] font-sans text-[14px] text-ink-obsidian/40 hover:text-ink-obsidian transition-colors duration-200"
        >
          在 B 站观看高清
          <span className="text-[16px]">↗</span>
        </a>
      </div>
    )
  }

  // 新片场 — 不支持 iframe，封面 + 新窗口
  if (xinpianchangUrl) {
    const xpcUrl = xinpianchangUrl.match(/^https?:\/\//) ? xinpianchangUrl : `https://www.xinpianchang.com/a${xinpianchangUrl}`
    return (
      <a
        href={xpcUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full aspect-video bg-ink-obsidian/5 overflow-hidden group cursor-pointer"
      >
        <img
          src={coverImage || ''}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-deep-midnight/50 group-hover:bg-deep-midnight/40 transition-colors duration-300 flex items-center justify-center">
          <span className="font-sans text-lg text-pure-white border border-pure-white/40 px-[32px] py-[14px] group-hover:bg-pure-white group-hover:text-deep-midnight transition-all duration-300">
            在新片场观看
          </span>
        </div>
      </a>
    )
  }

  return null
}
