// Single source for the site's address and the business details search engines read.
export const SITE_URL = "https://www.avatar-alchemy.com";
export const BUSINESS_NAME = "Avatar Alchemy";
export const SITE_DESCRIPTION =
    "Websites, Google visibility and AI search for Somerset businesses. Based in Glastonbury.";

// Business details read by Google and AI tools (schema.org LocalBusiness).
// TODO (needs Kenny's confirmation): full address/postcode, areas served, which phone and email to list,
// opening hours, price range. Only details already on the site are used below.
export const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: "+447476711611",
    email: "info@avatar-alchemy.com",
    image: `${SITE_URL}/brand-logo.png`,
    logo: `${SITE_URL}/brand-logo.png`,
    description: SITE_DESCRIPTION,
    address: {
        "@type": "PostalAddress",
        addressLocality: "Glastonbury",
        addressRegion: "Somerset",
        addressCountry: "GB",
    },
    sameAs: ["https://www.linkedin.com/company/avatar-alchemy-ai"],
    priceRange: "$$$",
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
        image: `${SITE_URL}/brand-logo.png`,
        author: { "@id": `${SITE_URL}/#business`, "@type": "Organization", name: BUSINESS_NAME },
        publisher: { "@id": `${SITE_URL}/#business`, "@type": "Organization", name: BUSINESS_NAME },
    };
}
