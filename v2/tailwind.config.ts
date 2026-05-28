import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf8f3',
        foreground: '#1a1a1a',
        accent: '#0052cc',
        'accent-hover': '#0041a8',
        'neutral-light': '#f5f3ee',
        'neutral-border': '#e8e4dc',
      },
      fontFamily: {
        sans: ['var(--font-onest)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
}

export default config
