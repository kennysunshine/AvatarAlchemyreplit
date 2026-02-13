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
                background: "#0B1120", // Deep Blue-Black
                foreground: "#ffffff",
                primary: {
                    DEFAULT: "#3B82F6", // Vivid Blue
                    hover: "#2563EB",
                },
                secondary: {
                    DEFAULT: "#60A5FA", // Sky Blue
                    hover: "#93C5FD",
                },
                surface: {
                    DEFAULT: "#111827", // Dark Blue-Grey Surface
                    hover: "#1F2937",
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
