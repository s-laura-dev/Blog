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
        beige: "#f5f3e7", // Light beige background color
        electricBlue: "#2563eb", // Electric blue for typography and accents
      },
    },
  },
  plugins: [],
};
export default config;
