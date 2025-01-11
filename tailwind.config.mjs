/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent1: '#1175D3',
        accent2: '#A150AD',
        accent3: '#B72C53',
        dark: '#261A25',
        light: '#F7F7F7',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #1175D3, #A150AD)',
      },
    },
  },
  plugins: [],
}