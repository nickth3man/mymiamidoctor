/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        navy: 'var(--navy)',
        light: 'var(--light)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
      },
      borderRadius: {
        'button': '9999px', // Pill-shaped
      },
      // Add sizing constraints for SVG icons to prevent scaling issues
      maxWidth: {
        'icon': '40px',
      },
      maxHeight: {
        'icon': '40px',
      }
    }
  },
  // Add important flag to ensure Tailwind classes override custom CSS
  important: true,
  plugins: [],
} 