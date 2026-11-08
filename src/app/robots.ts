import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Allows all search engines and AI crawlers, and points them to the sitemap.
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
