import type { MetadataRoute } from "next";
import { SITE_URL, blogPosts } from "@/lib/site";
import { services } from "@/lib/services";

// /privacy, /terms and draft service pages are left out while they are placeholders (they are set to noindex). Add them once written.
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
        { url: `${SITE_URL}/book`, changeFrequency: "yearly", priority: 0.5 },
        { url: `${SITE_URL}/ai-visibility`, changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${SITE_URL}/pricing`, changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${SITE_URL}/video`, changeFrequency: "monthly" as const, priority: 0.6 },
        ...services.filter((s) => !s.draft).map((s) => ({ url: `${SITE_URL}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
        ...Object.values(blogPosts).map((p) => ({
            url: `${SITE_URL}/blog/${p.slug}`,
            lastModified: p.datePublished,
            changeFrequency: "yearly" as const,
            priority: 0.7,
        })),
    ];
}
