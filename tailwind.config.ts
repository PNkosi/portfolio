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
        "bg-purple": "var(--bg-purple)",
        "dark-purple": "var(--dark-purple)",
        "lime": "var(--lime)",
        "light-blue": "var(--light-blue)",
        "bg-offset-white": "var(--bg-offset-white)",
        "light-foreground": "var(--light-foreground)",
        "dark-foreground": "var(--dark-foreground)",
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
}
export default config
