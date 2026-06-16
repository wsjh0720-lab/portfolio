import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'canvas-parchment': '#f6f5f0',
        'ink-obsidian': '#292a2c',
        'pure-white': '#ffffff',
        'deep-midnight': '#000000',
      },
      fontFamily: {
        'display': ['neue-haas-grotesk-text', 'EB Garamond', 'ui-serif', 'Georgia', 'serif'],
        'sans': ['Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'lg': ['18px', { lineHeight: '1.67' }],
        '3xl': ['30px', { lineHeight: '1' }],
        'hero': ['96px', { lineHeight: '0.9' }],
        'hero-md': ['64px', { lineHeight: '0.9' }],
        'display-xl': ['48px', { lineHeight: '1' }],
        'display-lg': ['40px', { lineHeight: '1' }],
      },
      spacing: {
        '30': '30px',
        'section': '60px',
      },
      padding: {
        'card': '30px',
      },
      gap: {
        'element': '30px',
      },
      borderRadius: {
        'none': '0px',
      },
      maxWidth: {
        'readable': '1200px',
      },
    },
  },
  plugins: [],
}

export default config
