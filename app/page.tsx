import Link from 'next/link'

const heroEntries = [
  { label: 'Video', sub: '查看作品', href: '/video', image: '/portfolio/hero-video.jpg' },
  { label: 'Photo', sub: '查看作品', href: '/photo', image: '/portfolio/hero-photo.jpg' },
  { label: 'AI',    sub: '查看作品', href: '/ai',    image: '/portfolio/hero-ai.jpg' },
]

export default function HomePage() {
  return (
    <div>
      <section className="flex flex-col md:flex-row min-h-[80vh] md:min-h-screen">
        {heroEntries.map((entry) => (
          <Link key={entry.label} href={entry.href}
            className="group relative flex-1 flex items-center justify-center min-h-[40vh] md:min-h-screen overflow-hidden cursor-pointer">
            <img src={entry.image} alt={entry.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-deep-midnight/70 group-hover:bg-deep-midnight/60 transition-colors duration-300" />
            <div className="relative z-10 flex flex-col items-center text-center px-[30px] transition-transform duration-500 group-hover:translate-y-[-4px]">
              <h2 className="font-display text-[72px] md:text-[96px] leading-[0.9] text-pure-white tracking-tight mb-[16px]">
                {entry.label}
              </h2>
              <span className="font-sans text-lg text-pure-white/50 group-hover:text-pure-white/80 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                {entry.sub}
              </span>
            </div>
          </Link>
        ))}
      </section>
      <section className="text-center py-[80px] md:py-[120px] px-[var(--card-padding)]">
        <h1 className="font-display text-hero-md md:text-[56px] leading-[0.9] text-ink-obsidian tracking-tight">
          作品集
        </h1>
        <p className="font-sans text-lg text-ink-obsidian/50 mt-[20px] max-w-[480px] mx-auto leading-[1.67]">
          导演 / 摄影 / 后期 / AI 创作
        </p>
      </section>
    </div>
  )
}
