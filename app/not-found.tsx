import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-[var(--card-padding)] py-[160px] text-center">
      <div className="mx-auto max-w-readable">
        <h1 className="font-display text-hero-md md:text-hero text-ink-obsidian leading-[0.9] tracking-tight mb-[30px]">
          404
        </h1>
        <p className="font-sans text-lg text-ink-obsidian/60 mb-[40px]">
          找不到这个页面
        </p>
        <Link
          href="/"
          className="inline-block font-sans text-lg text-ink-obsidian hover:text-deep-midnight border-b border-ink-obsidian/30 hover:border-deep-midnight transition-colors duration-200"
        >
          ← 回到首页
        </Link>
      </div>
    </div>
  )
}
