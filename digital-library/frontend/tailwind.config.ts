import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-height: 660px)" },
        // => @media (max-height: 1234px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        trasactionBg: "url('/images/BG.svg')",
      },
      colors: {
        primaryColor: "#015E44",
        primaryColor01: "#BA0606",
        secondaryColor: "#1D242D",
        primaryWhite: "",
        cardDark: "#414C50",
        buttonPrimary: "#0094D9",
        secondaryDark: "",
        secondaryWhite: "",
        hoverColorDark: "#EEF3FB",
        hoverColorWhite: "",
        bgColorDark: "#2D383C",
        bgColorWhite: "",
        bgColorGreen: "#04773B",
        notificationGreen: "rgba(4, 119, 59, 0.1)",
        notificationYellow: "rgba(209, 172, 0, 0.1)",
        notificationBlue: "rgba(4, 87, 211, 0.1)",
        respon: "rgba(167, 252, 208, 0.4)",
        tog: "rgba(111, 153, 162, 0.3)",
        colorDisabeldUser: "rgba(111, 153, 162, 0.3)",
        mainColor: "#015E44",
      },
    },
  },

  plugins: [
    nextui(),
    require("tailwindcss-animation-delay"),
    require("flowbite/plugin"),
  ],
};
export default config;
