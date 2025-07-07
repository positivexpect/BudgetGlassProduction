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
        primary: {
          DEFAULT: '#0054A6',
          light: '#007BFF',
          dark: '#004080',
        },
        neutral: {
          lightest: '#F4F6F8',
          light: '#D1D5DB',
        },
        accent: {
          red: '#E11D48',
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        'open-sans': ['var(--font-open-sans)'],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        DEFAULT: '12px',
      },
    },
  },
  plugins: [],
}

export default config 