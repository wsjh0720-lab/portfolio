import Link from 'next/link'

const socialLinks = [
  { label: 'Bilibili', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: '微博', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-obsidian/10 mt-section">
      <div className="mx-auto max-w-readable px-[var(--card-padding)] py-section">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[30px]">
          {/* Copyright */}
          <p className="font-sans text-lg text-ink-obsidian/60">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
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
