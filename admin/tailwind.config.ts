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
        "primary": "var(--primary-color)",
        "on-primary": "var(--on-primary-color)",
        "secondary": "var(--secondary-color)",
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
  plugins: [],
}
export default config



