import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: ['class'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      // limit1: '640px',
      // limit2: '1024px',
      // limit3: '1200px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryColor: '#015E44',
        secondaryColor: '#1D242D',
        primaryWhite: '',
        cardDark: '#414C50',
        buttonPrimary: '#0094D9',
        secondaryDark: '',
        secondaryWhite: '',
        hoverColorDark: '#EEF3FB',
        hoverColorWhite: '',
        bgColorDark: '#2D383C',
        bgColorWhite: '',
      },
      animation: {
        'trans-right': 'trans-right 25s infinite linear',
      },
      keyframes: {
        'trans-right': {
          // '0%, 100%':{transform: 'translateX(0%)'},
          // '50%':{transform: 'translateX(-100%)'},
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    nextui(),
    require('tailwindcss'),
    require('autoprefixer'),
    require('flowbite/plugin'),
  ],
};
export default config;
