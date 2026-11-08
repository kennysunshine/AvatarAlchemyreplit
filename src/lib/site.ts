// Single source for the site's address and the business details search engines read.
export const SITE_URL = "https://www.avatar-alchemy.com";
export const BUSINESS_NAME = "Avatar Alchemy";
export const SITE_DESCRIPTION =
    "Websites, Google visibility and AI search for local businesses worldwide, from a base in the South West of the UK.";

// Business details read by Google and AI tools (schema.org LocalBusiness).
// Confirmed by Kenny: phone, email (kenny.swann@), Mon–Fri 9–5 hours. No price range on purpose (removed at Kenny's request).
export const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: "+447856430336",
    email: "kenny.swann@avatar-alchemy.com",
    image: `${SITE_URL}/brand-logo-full.png`,
    logo: `${SITE_URL}/brand-logo-full.png`,
    description: SITE_DESCRIPTION,
    // No street address or town on purpose: Kenny wants only the county shown. Clients are served worldwide.
    address: {
        "@type": "PostalAddress",
        addressRegion: "Somerset",
        addressCountry: "GB",
    },
    areaServed: "Worldwide",
    sameAs: ["https://www.linkedin.com/company/avatar-alchemy-ai"],
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
        },
    ],
};

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    datePublished: string; // ISO date
    category: string;
};

// Titles, dates and categories match each post page; descriptions are taken from each post's opening paragraph.
export const blogPosts: Record<string, BlogPost> = {
    "what-is-geo": {
        slug: "what-is-geo",
        title: "What is GEO? (Generative Engine Optimization)",
        description:
            "As Google Search Generative Experience (SGE), Perplexity, and ChatGPT become the primary ways people find information, a new discipline has emerged: Generative Engine Optimization (GEO).",
        datePublished: "2026-01-15",
        category: "AI Search",
    },
    "local-business-ai-search": {
        slug: "local-business-ai-search",
        title: "How AI Search Engines Recommend Local Businesses",
        description:
            "If you own a local business, the way customers find you has fundamentally changed. It's no longer just about \"near me\" searches—it's about how AI models perceive your real-world reputation.",
        datePublished: "2026-01-10",
        category: "Local Business",
    },
    "digital-twins": {
        slug: "digital-twins",
        title: "Digital Twins: The Future of Content Creation",
        description:
            "Digital Twins of creators, founders, and brands are revolutionizing how content is produced, distributed, and consumed.",
        datePublished: "2026-01-05",
        category: "AI Avatars",
    },
};

export function blogPostMetadata(slug: string) {
    const post = blogPosts[slug];
    const path = `/blog/${slug}`;
    return {
        title: post.title,
        description: post.description,
        alternates: { canonical: path },
        openGraph: {
            type: "article" as const,
            title: post.title,
            description: post.description,
            url: path,
            publishedTime: post.datePublished,
        },
    };
}

export function blogPostSchema(slug: string) {
    const post = blogPosts[slug];
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.datePublished,
        articleSection: post.category,
        mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
        image: `${SITE_URL}/brand-logo-full.png`,
        author: { "@id": `${SITE_URL}/#business`, "@type": "Organization", name: BUSINESS_NAME },
        publisher: { "@id": `${SITE_URL}/#business`, "@type": "Organization", name: BUSINESS_NAME },
    };
}
