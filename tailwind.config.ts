import type { Config } from "tailwindcss";
import {
  colors,
  typography,
  borderRadius,
  animations,
} from "./app/styles/design-system";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,
      borderRadius,
      animation: animations.animation,
      keyframes: animations.keyframes,
    },
  },
  plugins: [],
} satisfies Config;
