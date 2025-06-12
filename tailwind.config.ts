import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      cstm: '900px',
      '2xl': '1536px',
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '640px',
      xs: '480px',
      '2xs': '360px',
      '3xs': '320px',
   },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
   
  plugins: [],
};
export default config;
