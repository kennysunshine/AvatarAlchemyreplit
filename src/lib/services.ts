import { SITE_URL, BUSINESS_NAME } from "./site";

/**
 * Service pages. Text here is taken from what is already on the site (homepage pillars, FAQ, Google Business
 * Profile description). Anything set to `null` shows a yellow "[PLACEHOLDER — to be written]" box with the
 * `prompts` text, for Kenny to fill in.
 *
 * While `draft` is true the page is hidden from search engines (noindex) and left out of the sitemap.
 * Set it to false once the placeholders are filled in.
 */
export type Service = {
    slug: string;
    name: string;
    tag: string;
    metaDescription: string;
    draft: boolean;
    intro: string | null;
    whoFor: string | null;
    problem: string | null;
    solution: string | null;
    included: string[] | null;
    howItWorks: string[] | null;
    /** "plans" links to the homepage pricing section */
    pricing: string | "plans" | null;
    example: string | null;
    /** indexes into src/lib/faqs.ts */
    faqIndexes: number[];
    blogSlugs: string[];
    showDemoVideos?: boolean;
    prompts: Partial<Record<"intro" | "whoFor" | "problem" | "solution" | "included" | "howItWorks" | "pricing" | "example", string>>;
};

export const services: Service[] = [
    {
        slug: "ai-search-visibility",
        name: "Google & AI Search Visibility",
        tag: "Get Found",
        metaDescription:
            "Get your business found on Google and recommended by AI search tools like ChatGPT and Gemini, with schema markup, AI discovery audits, citation building and AI tracking.",
        draft: true,
        intro: "We ensure chatbots recommend YOUR business when customers ask for local suggestions.",
        whoFor: null,
        problem: "Traditional SEO alone is no longer enough; AI Search (SGE, Gemini, ChatGPT) is changing how customers find businesses.",
        solution: null,
        included: ["Advanced Schema Markup", "AI Discovery Audit", "Citation & Authority Building", "Real-time AI Tracking"],
        howItWorks: null,
        pricing: "plans",
        example: null,
        faqIndexes: [0, 3],
        blogSlugs: ["what-is-geo", "local-business-ai-search"],
        prompts: {
            whoFor: "Who this is for: the kinds of businesses you help, and the situation they are usually in when they come to you.",
            solution: "What you do for Google visibility specifically, e.g. Google Business Profile set-up and optimisation, reviews, local listings, on-page SEO.",
            howItWorks: "The steps of a typical project, e.g. 1. Free visibility audit → 2. Plan → 3. Fixes and set-up → 4. Monthly tracking.",
            example: "A client result or example you are happy to share (optional).",
        },
    },
    {
        slug: "website-design",
        name: "Website Design",
        tag: "Websites",
        metaDescription:
            "Website design for local businesses, built to be found on Google and understood by AI search tools.",
        draft: true,
        intro: null,
        whoFor: null,
        problem: null,
        solution: null,
        included: null,
        howItWorks: null,
        pricing: null,
        example: null,
        faqIndexes: [0],
        blogSlugs: ["local-business-ai-search"],
        prompts: {
            intro: "One or two sentences on what you offer, e.g. new websites, rebuilds, ongoing care.",
            whoFor: "Who this is for: the kinds of businesses, and whether you build new sites, rebuild old ones, or both.",
            problem: "The problem clients usually have with their current website (or lack of one).",
            solution: "How your websites solve it, e.g. built for Google and AI search from day one, mobile-friendly, fast.",
            included: "What the client gets, e.g. number of pages, copywriting, hosting, domain, contact forms, schema, Google Business Profile set-up.",
            howItWorks: "The steps, e.g. 1. Conversation → 2. Plan and content → 3. Design and build → 4. Launch → 5. Support.",
            pricing: "Price, a 'from £…' figure, or 'price on request'.",
            example: "An example project, e.g. Avalon Tree Services (only if you are happy to name them here).",
        },
    },
    {
        slug: "digital-twins",
        name: "Digital Twins & AI Video Avatars",
        tag: "Scale",
        metaDescription:
            "Custom AI video avatars for your business: audio cloning, unlimited video generation and multi-language support, without filming every video yourself.",
        draft: true,
        intro: "A custom digital clone for infinite, effort-free video production.",
        whoFor: null,
        problem: "The owner is the bottleneck for video content.",
        solution: null,
        included: ["Custom AI Video Avatar", "Audio Clone Technology", "Unlimited Video Generation", "Multi-language Support"],
        howItWorks: null,
        pricing: null,
        example: null,
        faqIndexes: [1],
        blogSlugs: ["digital-twins"],
        showDemoVideos: true,
        prompts: {
            whoFor: "Who this is for, e.g. founders and business owners who want regular video without filming every time.",
            solution: "How a Digital Twin solves it, in your words.",
            howItWorks: "The steps, e.g. 1. Conversation → 2. Recording session → 3. Building your twin → 4. Your first videos.",
            pricing: "Price, a 'from £…' figure, or 'price on request'.",
        },
    },
    {
        slug: "video-repurposing",
        name: "Video Repurposing (Content Lab)",
        tag: "Get Seen",
        metaDescription:
            "Turn your long videos into short clips for TikTok, Instagram Reels and YouTube Shorts, with captions and your branding.",
        draft: true,
        intro: "We turn 1 long video into 20+ viral shorts using AI—with your Brand DNA intact.",
        whoFor: null,
        problem: "Business owners have no time to film daily.",
        solution: null,
        included: ["Long-form to Short-form Transformation", "TikTok, Reels & YouTube Shorts", "High-accuracy Captions", "Professional Branding & Polish"],
        howItWorks: null,
        pricing: null,
        example: null,
        faqIndexes: [2],
        blogSlugs: [],
        prompts: {
            whoFor: "Who this is for, e.g. businesses sitting on webinars, talks, podcasts or tutorials.",
            solution: "How the Content Lab solves it, in your words.",
            howItWorks: "The steps. Every project starts with a conversation about the client's goals and content (as in your FAQ). What happens after that?",
            pricing: "Price, a 'from £…' figure, or 'price on request'.",
            example: "An example, e.g. the Pet Info Club video on Vimeo (optional).",
        },
    },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export function serviceSchema(s: Service) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: s.name,
        description: s.metaDescription,
        url: `${SITE_URL}/services/${s.slug}`,
        serviceType: s.name,
        areaServed: "Worldwide",
        provider: { "@id": `${SITE_URL}/#business`, "@type": "LocalBusiness", name: BUSINESS_NAME },
    };
}
