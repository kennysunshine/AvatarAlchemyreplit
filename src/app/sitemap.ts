import type { MetadataRoute } from "next";
import { SITE_URL, blogPosts } from "@/lib/site";

// /privacy and /terms are left out while they are placeholders (they are set to noindex). Add them once written.
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
        { url: `${SITE_URL}/book`, changeFrequency: "yearly", priority: 0.5 },
        ...Object.values(blogPosts).map((p) => ({
            url: `${SITE_URL}/blog/${p.slug}`,
            lastModified: p.datePublished,
            changeFrequency: "yearly" as const,
            priority: 0.7,
        })),
    ];
}
