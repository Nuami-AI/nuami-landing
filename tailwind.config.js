const designSystemTailwindPreset = require("@nuami-ai/nuami-design/tailwind").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nuami-ai/nuami-design/dist/**/*.{js,mjs,cjs}",
  ],
  presets: [designSystemTailwindPreset],
};
