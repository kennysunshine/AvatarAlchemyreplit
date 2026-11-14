import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Old service pages now live on the new pages (one story: AI Visibility, Programmatic SEO, Video).
    async redirects() {
        return [
            { source: "/services", destination: "/pricing", permanent: true },
            { source: "/services/ai-search-visibility", destination: "/ai-visibility", permanent: true },
            { source: "/services/digital-twins", destination: "/video#digital-twins", permanent: true },
            { source: "/services/video-repurposing", destination: "/video#content-lab", permanent: true },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatar-alchemyai.replit.app',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
        ],
    },
};

export default nextConfig;
