import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050609", // Deep dark background
                foreground: "#ffffff",
                primary: {
                    DEFAULT: "#00E5FF", // Electric Cyan
                    hover: "#00B8CC",
                },
                secondary: {
                    DEFAULT: "#9D4EDD", // Deep Purple
                    hover: "#7B2CBF",
                },
                surface: {
                    DEFAULT: "#0F1115", // Card background
                    hover: "#1A1D23",
                    border: "rgba(255, 255, 255, 0.1)",
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                heading: ['var(--font-plus-jakarta)', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
            },
        },
    },
    plugins: [],
};
export default config;
