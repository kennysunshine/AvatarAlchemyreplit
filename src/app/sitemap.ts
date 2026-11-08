import type { MetadataRoute } from "next";
import { SITE_URL, blogPosts } from "@/lib/site";
import { services } from "@/lib/services";

// /privacy, /terms and draft service pages are left out while they are placeholders (they are set to noindex). Add them once written.
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
        { url: `${SITE_URL}/book`, changeFrequency: "yearly", priority: 0.5 },
        // Service pages appear here once they are no longer drafts (see src/lib/services.ts)
        ...(services.some((s) => s.draft) ? [] : [{ url: `${SITE_URL}/services`, changeFrequency: "monthly" as const, priority: 0.8 }]),
        ...services.filter((s) => !s.draft).map((s) => ({ url: `${SITE_URL}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
        ...Object.values(blogPosts).map((p) => ({
            url: `${SITE_URL}/blog/${p.slug}`,
            lastModified: p.datePublished,
            changeFrequency: "yearly" as const,
            priority: 0.7,
        })),
    ];
}
