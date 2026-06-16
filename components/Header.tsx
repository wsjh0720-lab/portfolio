'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Video', href: '/video' },
  { label: 'Photo', href: '/photo' },
  { label: 'AI', href: '/ai' },
  { label: '关于', href: '/about' },
  { label: '联系', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-canvas-parchment/95 backdrop-blur-sm">
      <div className="mx-auto max-w-readable px-[var(--card-padding)]">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo / Name */}
          <Link href="/" className="font-display text-[24px] tracking-tight text-ink-obsidian">
            作品集
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-[30px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-lg text-ink-obsidian hover:text-deep-midnight transition-colors duration-200 border-b border-transparent hover:border-deep-midnight pb-[2px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-[30px] h-[30px] flex flex-col items-center justify-center gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="菜单"
          >
            <span className={`block w-6 h-[1.5px] bg-ink-obsidian transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-ink-obsidian transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-ink-obsidian transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-ink-obsidian/10 bg-canvas-parchment">
          <nav className="flex flex-col px-[var(--card-padding)] py-[30px] gap-[20px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-lg text-ink-obsidian hover:text-deep-midnight"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
