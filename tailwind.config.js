/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: withOpacity("--color-primary-900"),
          800: withOpacity("--color-primary-800"),
          700: withOpacity("--color-primary-700"),
          600: withOpacity("--color-primary-600"),
          500: withOpacity("--color-primary-500"),
          400: withOpacity("--color-primary-400"),
          300: withOpacity("--color-primary-300"),
          200: withOpacity("--color-primary-200"),
          100: withOpacity("--color-primary-100"),
        },
        secondary: {
          900: withOpacity("--color-secondary-900"),
          800: withOpacity("--color-secondary-800"),
          700: withOpacity("--color-secondary-700"),
          600: withOpacity("--color-secondary-600"),
          500: withOpacity("--color-secondary-500"),
          400: withOpacity("--color-secondary-400"),
          300: withOpacity("--color-secondary-300"),
          200: withOpacity("--color-secondary-200"),
          100: withOpacity("--color-secondary-100"),
          50: withOpacity("--color-secondary-50"),
          0: withOpacity("--color-secondary-0"),
        },
        error: {
          900: withOpacity("--color-error-900"),
          800: withOpacity("--color-error-800"),
          700: withOpacity("--color-error-700"),
          600: withOpacity("--color-error-600"),
          500: withOpacity("--color-error-500"),
          400: withOpacity("--color-error-400"),
          300: withOpacity("--color-error-300"),
          200: withOpacity("--color-error-200"),
          100: withOpacity("--color-error-100"),
          50: withOpacity("--color-error-50"),
        },
        success: {
          900: withOpacity("--color-success-900"),
          800: withOpacity("--color-success-800"),
          700: withOpacity("--color-success-700"),
          600: withOpacity("--color-success-600"),
          500: withOpacity("--color-success-500"),
          400: withOpacity("--color-success-400"),
          300: withOpacity("--color-success-300"),
          200: withOpacity("--color-success-200"),
          100: withOpacity("--color-success-100"),
          50: withOpacity("--color-success-50"),
        },
        warning: {
          900: withOpacity("--color-warning-900"),
          800: withOpacity("--color-warning-800"),
          700: withOpacity("--color-warning-700"),
          600: withOpacity("--color-warning-600"),
          500: withOpacity("--color-warning-500"),
          400: withOpacity("--color-warning-400"),
          300: withOpacity("--color-warning-300"),
          200: withOpacity("--color-warning-200"),
          100: withOpacity("--color-warning-100"),
          50: withOpacity("--color-warning-50"),
        },
      },
      fontFamily: {
        sans: ["var(--font-vazir)", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
