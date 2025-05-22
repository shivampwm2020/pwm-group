/**
 * Design System Tokens
 * This file contains all design tokens used throughout the application.
 * It serves as a central source of truth for colors, typography, spacing, and animations.
 */

// Color Palette
export const colors = {
  // Primary brand colors
  blue: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },
  indigo: {
    50: "#EEF2FF",
    100: "#E0E7FF",
    200: "#C7D2FE",
    300: "#A5B4FC",
    400: "#818CF8",
    500: "#6366F1",
    600: "#4F46E5",
    700: "#4338CA",
    800: "#3730A3",
    900: "#312E81",
  },

  // Neutral colors
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },

  // Accent colors
  green: {
    50: "#ECFDF5",
    100: "#D1FAE5",
    200: "#A7F3D0",
    300: "#6EE7B7",
    400: "#34D399",
    500: "#10B981",
    600: "#059669",
    700: "#047857",
    800: "#065F46",
    900: "#064E3B",
  },
  red: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
  },
};

// Typography
export const typography = {
  // Font families
  fontFamily: {
    sans: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    serif:
      '"Merriweather", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },

  // Font sizes
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
  },

  // Font weights
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  // Line heights
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },

  // Letter spacing
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

// Spacing system
export const spacing = {
  px: "1px",
  0: "0",
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem", // 8px
  2.5: "0.625rem", // 10px
  3: "0.75rem", // 12px
  3.5: "0.875rem", // 14px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
  9: "2.25rem", // 36px
  10: "2.5rem", // 40px
  11: "2.75rem", // 44px
  12: "3rem", // 48px
  14: "3.5rem", // 56px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  28: "7rem", // 112px
  32: "8rem", // 128px
  36: "9rem", // 144px
  40: "10rem", // 160px
  44: "11rem", // 176px
  48: "12rem", // 192px
  52: "13rem", // 208px
  56: "14rem", // 224px
  60: "15rem", // 240px
  64: "16rem", // 256px
  72: "18rem", // 288px
  80: "20rem", // 320px
  96: "24rem", // 384px
};

// Border radius
export const borderRadius = {
  none: "0",
  sm: "0.125rem", // 2px
  DEFAULT: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  "4xl": "2rem", // 32px
  "5xl": "2.5rem", // 40px
  full: "9999px",
};

// Shadows
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "none",
};

// Animations
export const animations = {
  keyframes: {
    "fade-in": {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
    "slide-up": {
      "0%": { transform: "translateY(20px)", opacity: "0" },
      "100%": { transform: "translateY(0)", opacity: "1" },
    },
    "slide-down": {
      "0%": { transform: "translateY(-20px)", opacity: "0" },
      "100%": { transform: "translateY(0)", opacity: "1" },
    },
    "slide-left": {
      "0%": { transform: "translateX(20px)", opacity: "0" },
      "100%": { transform: "translateX(0)", opacity: "1" },
    },
    "slide-right": {
      "0%": { transform: "translateX(-20px)", opacity: "0" },
      "100%": { transform: "translateX(0)", opacity: "1" },
    },
  },
  animation: {
    "fade-in": "fade-in 0.5s ease-out",
    "slide-up": "slide-up 0.5s ease-out",
    "slide-down": "slide-down 0.5s ease-out",
    "slide-left": "slide-left 0.5s ease-out",
    "slide-right": "slide-right 0.5s ease-out",
  },
};

// UI Component styles
export const components = {
  // Button variants
  button: {
    primary: {
      base: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300",
      sizes: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-3 text-lg",
      },
    },
    secondary: {
      base: "bg-white text-blue-600 font-medium border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300",
      sizes: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-3 text-lg",
      },
    },
    tertiary: {
      base: "bg-transparent font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300",
      sizes: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
  },

  // Card variants
  card: {
    default:
      "bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300",
    featured:
      "bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300",
  },

  // Section styles
  section: {
    padding: "py-24",
    paddingCompact: "py-16",
    maxWidth: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  },
};

// Export the entire design system
export const designSystem = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  animations,
  components,
};

export default designSystem;
