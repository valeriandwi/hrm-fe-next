import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-back-color": "#F3F8FD",
        "color-primary-100": "#E1F9E9",
        "color-primary-200": "#C4F4DA",
        "color-primary-300": "#9CDEC0",
        "color-primary-400": "#77BDA4",
        "color-primary-500": "#4A917F",
        "color-primary-600": "#367C71",
        "color-primary-700": "#256864",
        "color-primary-800": "#175154",
        "color-primary-900": "#0E3E45",
        "white-color": "#FFF",
      },
    },
  },
  important: true,
  plugins: [],
};
export default config;
