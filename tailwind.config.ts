import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        business: ['var(--font-nunito-sans)', 'system-ui', 'sans-serif'],
        playful: ['var(--font-marhey)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config