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
    {
        slug: "ai-search-visibility",
        name: "Google & AI Search Visibility",
        tag: "Get Found",
        metaDescription:
            "Get your business found on Google and recommended by AI search tools like ChatGPT and Gemini, with schema markup, AI discovery audits, citation building and AI tracking.",
        draft: false,
        intro: "We ensure chatbots recommend YOUR business when customers ask for local suggestions.",
        whoFor:
            "Businesses that want to be found more prominently on Google and in AI search, without spending large amounts on advertising. If competitors keep appearing ahead of you, or ChatGPT and Gemini don't mention you when customers ask for a recommendation, this is for you.",
        problem: "Traditional SEO alone is no longer enough; AI Search (SGE, Gemini, ChatGPT) is changing how customers find businesses.",
        solution:
            "We make sure everything about your business matches up across the internet. Your website, Google Business Profile, social media pages and directory listings should all tell the same story: the same name, contact details, opening hours and description of what you do. We add structured data (schema) to your website so search engines and AI tools can read your details directly, and we keep your Google Business Profile complete and up to date. When everything is consistent, Google and AI assistants can trust your business, which makes them more likely to show it and recommend it.",
        included: ["Advanced Schema Markup", "AI Discovery Audit", "Citation & Authority Building", "Real-time AI Tracking"],
        howItWorks: [
            { title: "Free visibility audit.", text: "We check how visible your business is on Google and in AI search today." },
            { title: "Find the gaps.", text: "We find every place your business details are missing, out of date or don't match." },
            { title: "Fix and connect.", text: "We update your website, structured data, Google Business Profile, social pages and listings so they all line up." },
            { title: "Track and improve.", text: "We keep checking how you appear on Google and in AI search, and keep improving it." },
        ],
        pricing: "plans",
        example: null,
        faqIndexes: [0, 3],
        blogSlugs: ["what-is-geo", "local-business-ai-search"],
        prompts: {},
    },
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
    {
        slug: "digital-twins",
        name: "Digital Twins & AI Video Avatars",
        tag: "Scale",
        metaDescription:
            "Custom AI video avatars for your business: audio cloning, unlimited video generation and multi-language support, without filming every video yourself.",
        draft: false,
        intro: "A custom digital clone for infinite, effort-free video production.",
        whoFor:
            "Founders, business owners and personal brands who want to show up on video regularly but don't have the time to film every week. If you know video works for your business but filming, re-recording and editing keep slipping down the to-do list, a Digital Twin keeps you visible without you having to be in front of the camera every time.",
        problem: "The owner is the bottleneck for video content.",
        solution:
            "Your Digital Twin creates video content for you without you having to film it. We start by sitting down with you to understand your goals: who you want to reach, what you want to say, and where your videos will be seen. We then create your twin around those needs, so every video looks and sounds like you and fits the way you want to present your business.",
        included: ["Custom AI Video Avatar", "Audio Clone Technology", "Unlimited Video Generation", "Multi-language Support"],
        howItWorks: [
            { title: "A conversation about your goals.", text: "We sit down with you to find out who you want to reach, what you want to say, and where your videos will be used." },
            { title: "We create your Digital Twin.", text: "Your twin is built around those goals, so it looks and sounds like you and suits the way you present your business." },
            { title: "Your videos, without the filming.", text: "Your twin produces your videos, ready for social media, explainers, training or wherever you need them, without you having to film each one." },
        ],
        pricing:
            "Every Digital Twin is different, so pricing depends on the scope of your project. After our first conversation, we'll give you a clear quote based on what you need.",
        // Kenny's own Digital Twin will be added here once it's ready
        example: null,
        faqIndexes: [1],
        blogSlugs: ["digital-twins"],
        showDemoVideos: true,
        prompts: {},
    },
    {
        slug: "video-repurposing",
        name: "Video Repurposing (Content Lab)",
        tag: "Get Seen",
        metaDescription:
            "Turn your long videos into short vertical clips for TikTok, Instagram Reels, Facebook Reels and YouTube Shorts, with captions and your branding, plus long-form and documentary-style video.",
        draft: false,
        intro: "We turn 1 long video into 20+ viral shorts using AI—with your Brand DNA intact.",
        whoFor:
            "Businesses and creators who already have long videos, such as webinars, talks, interviews, podcasts or tutorials, but don't have the time to turn them into regular social media content. If your best material is sitting on a hard drive or buried on YouTube, it can be working for you every day instead.",
        problem: "Business owners have no time to film daily.",
        solution:
            "We take your long-form videos and turn them into short vertical clips for whichever platforms you use, whether that's TikTok, Instagram Reels, Facebook Reels or YouTube Shorts. Each clip is captioned and branded so it's ready to post. If you need new long-form content as well, we can create it for you, from documentary-style films to longer videos for YouTube and your website.",
        included: [
            "Long-form to Short-form Transformation",
            "Vertical short-form video for any platform: TikTok, Instagram Reels, Facebook Reels, YouTube Shorts",
            "High-accuracy Captions",
            "Professional Branding & Polish",
            "Long-form video creation, including documentary-style films",
        ],
        howItWorks: [
            { title: "A conversation about your goals", text: "and the content you already have." },
            { title: "We plan the clips:", text: "which moments to use and which platforms they're for." },
            { title: "We edit, caption and brand", text: "each clip." },
            { title: "You get ready-to-post videos", text: "for every platform you use." },
        ],
        pricing: SCOPE_PRICING,
        // The Brighton Aquarium documentary will be added here once its final link is ready
        example: null,
        faqIndexes: [2],
        blogSlugs: [],
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
