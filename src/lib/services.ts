import { SITE_URL, BUSINESS_NAME } from "./site";

/**
 * Service pages. Wording comes from Kenny's notes (see docs/service-page-notes.md) and from text already on the
 * site (homepage pillars, FAQ). A field set to `null` with a matching `prompts` entry shows a yellow
 * "[PLACEHOLDER — to be written]" box; a `null` example with no prompt simply hides the "Example work" section.
 *
 * While `draft` is true the page is hidden from search engines (noindex) and left out of the sitemap.
 */
export type Step = { title: string; text?: string };
export type Example = { text: string; link?: { href: string; label: string }; logo?: { src: string; alt: string } };

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
    howItWorksIntro?: string;
    howItWorks: Step[] | null;
    /** "plans" links to the homepage pricing section */
    pricing: string | "plans" | null;
    example: Example | null;
    /** indexes into src/lib/faqs.ts */
    faqIndexes: number[];
    blogSlugs: string[];
    showDemoVideos?: boolean;
    prompts: Partial<Record<"intro" | "whoFor" | "problem" | "solution" | "included" | "howItWorks" | "pricing" | "example", string>>;
};

const SCOPE_PRICING =
    "Every project is different, so pricing depends on the scope of your project. After our first conversation, we'll give you a clear quote based on what you need.";

export const services: Service[] = [
    // AI search, Digital Twins and video repurposing moved to /ai-visibility and /video (see next.config.ts redirects).
    {
        slug: "website-design",
        name: "Website Design",
        tag: "Websites",
        metaDescription:
            "Website design for local businesses, built to be found on Google and understood by AI search tools.",
        draft: false,
        intro:
            "We build websites with one goal: getting you found and winning you more customers. Every site is set up from the start so that Google and AI search tools like ChatGPT and Gemini can find, understand and recommend your business.",
        whoFor:
            "Businesses that need a new website, or have one that isn't bringing in customers. Whether you're starting from scratch or your current site is out of date, hard to find, or invisible to AI search, we build something that works for you.",
        problem:
            "Many websites look fine but are almost invisible: they don't show up on Google, and AI assistants like ChatGPT can't work out what the business does or who it's for, so they never recommend it.",
        solution:
            "A good-looking website isn't enough if nobody finds it. We build your site so search engines and AI assistants can read it clearly, with plain descriptions of what you do and who you serve, and structured data that machines understand. The result is a website that works as part of your marketing, bringing in visitors and enquiries instead of just sitting online.",
        included: [
            "As many pages as your business needs",
            "Website text written for you, clear for customers, Google and AI search",
            "Contact forms, so enquiries come straight to you",
            "Structured data (schema) so search engines and AI tools understand your business",
            "Google Business Profile set-up",
            "Help with hosting and your domain name if you need it (available as an extra)",
        ],
        howItWorksIntro:
            "Every project is shaped around where you are now. Whether you're starting from scratch or already have a website, we begin with a conversation:",
        howItWorks: [
            { title: "A conversation", text: "about your business, your goals and your current website, if you have one." },
            { title: "A plan and a quote", text: "based on what you need." },
            { title: "We build your site,", text: "set up to be found on Google and recommended by AI search." },
            { title: "Launch,", text: "with your Google Business Profile and listings joined up to your new site." },
        ],
        pricing: SCOPE_PRICING,
        example: {
            text: "Avalon Tree Services, serving Glastonbury and beyond. We designed and built their website.",
            link: { href: "https://www.avalontreeservices.co.uk", label: "Visit avalontreeservices.co.uk" },
            logo: { src: "/logos/avalon-tree-services.png", alt: "Avalon Tree Services" },
        },
        faqIndexes: [0],
        blogSlugs: ["local-business-ai-search"],
        prompts: {},
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
