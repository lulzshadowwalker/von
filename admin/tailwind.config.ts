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
        "muted": {
          200: "#D7D9DD",
          400: "#F9F9FC",
          500: "#F6F6F8",
          600: "#898597",
          700: "#C6C9CE", 
        },
        "primary": "rgb(var(--primary-color) / <alpha-value>)",
        "on-primary": "rgb(var(--on-primary-color) / <alpha-value>)",
        "secondary": "rgb(var(--secondary-color) / <alpha-value>)",
        "secondary-focus": "rgb(var(--secondary-focused-color) / <alpha-value>)",
        "von-red": {
          500: "#EE5353", 
        },
        "von-green": {
          500: "#7AF09B",
        },
        "von-blue": {
          700: "#457eff",
        },
        "von-orange": {
          500: "#FCD59B",
        }
      },
      margin: {
        page: "5.2rem",
      },
      padding: {
        page: "5.2rem",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
export default config



