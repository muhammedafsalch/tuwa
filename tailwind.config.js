module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B3FA0',
          hover: '#5A3587',
        },
        secondary: {
          DEFAULT: '#E65100',
          hover: '#D84315',
        },
        accent: '#F3E5F5',
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      boxShadow: {
        'premium': '0 20px 50px rgba(107, 63, 160, 0.15)',
        'premium-hover': '0 30px 60px rgba(107, 63, 160, 0.25)',
      }
    },
  },
  plugins: [],
};

  