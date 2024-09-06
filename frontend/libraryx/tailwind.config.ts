import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary_color: "var(--Primary_color)",
        Secondary_color: "var(--Secondary_color)",
        Thread_color: "var(--Theard_color)",
        Forty_color: "var(--Forty_color)",
      },
    },
  },
  plugins: [],
};
export default config;
