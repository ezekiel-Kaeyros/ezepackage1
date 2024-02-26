import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
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
    },
  },
  plugins: [nextui()],
};
export default config;