import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightcolor: "var(--lightcolor)",
        heavycolor: "var(--heavycolor)"
      },
      fontFamily: {
        vintage: ['var(--font-almendra-sc)', 'serif'],
        roboto: ['var(--font-roboto-condensed)', 'sans-serif'],
        zain: ['var(--font-zain)']
      },
    },
  },
  plugins: [],
} satisfies Config;
