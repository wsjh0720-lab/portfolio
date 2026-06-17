import Link from 'next/link'

const socialLinks = [
  { label: '新片场', href: 'https://www.xinpianchang.com/u10110237?from=navigator' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-obsidian/10 mt-section">
      <div className="mx-auto max-w-readable px-[var(--card-padding)] py-section">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[30px]">
          {/* Copyright */}
          <p className="font-sans text-lg text-ink-obsidian/60">
            &copy; {new Date().getFullYear()} 人生如逆旅，我亦是行人
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-[30px]">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-lg text-deep-midnight hover:text-ink-obsidian transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
