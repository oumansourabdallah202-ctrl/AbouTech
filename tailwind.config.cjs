module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'off-black': '#0a0a0c',
        'surface-dark': '#121214',
        'text-dim': '#b3b3b3',
        'neon-blue': '#00f2ff',
        'neon-purple': '#bc13fe',
        'deep-black': '#050505',
        charcoal: '#121212',
        secondary: '#FFFFFF',
        accent: '#808080',
      },
      fontFamily: {
        sans: ["'Roboto'", 'sans-serif'],
        futuristic: ['"Orbitron"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}