import type { Metadata } from "next";
import { ArrowRight, Check, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, BUSINESS_NAME } from "@/lib/site";
import { CTA_HREF, CTA_LABEL, PRICES, gbp, mainHref, pseoHref } from "@/components/shared/site-links";

const DESCRIPTION =
    "Make sure Google, ChatGPT, Gemini and Perplexity can clearly identify your business and trust it enough to recommend. From £395/month, no setup fee.";

export const metadata: Metadata = {
    title: "AI Visibility",
    description: DESCRIPTION,
    alternates: { canonical: "/ai-visibility" },
    openGraph: { title: "AI Visibility | Avatar Alchemy", description: DESCRIPTION, url: "/ai-visibility" },
};

const included = [
    {
        title: "Schema markup (structured data)",
        detail: "Code on your website that tells search engines and AI tools who you are, what you do and where.",
    },
    {
        title: "Google Business Profile",
        detail: "Set up fully and kept up to date: services, hours, areas, photos and posts.",
    },
    {
        title: "Listings that match everywhere",
        detail: "Your business on the directories that matter for your trade, with the same name, address and phone everywhere.",
    },
    {
        title: "A simple system for reviews",
        detail: "An easy way to ask customers for reviews, so you get them regularly instead of now and then.",
    },
    {
        title: "A monthly AI check",
        detail: "Each month I ask ChatGPT, Gemini and Perplexity the questions your customers ask (for example “best tree surgeon near Glastonbury”) and report, in plain English, whether you come up and what is said about you.",
    },
];

const wontPromise = [
    "Guaranteed rankings. Nobody controls Google, and anyone who promises that is guessing.",
    "Guaranteed AI recommendations. ChatGPT, Gemini and Perplexity decide for themselves what to say. I make sure they have clear, accurate information about you.",
    "Made-up results. When a client has real numbers I can show, they will go here.",
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Visibility",
    description: DESCRIPTION,
    url: `${SITE_URL}/ai-visibility`,
    serviceType: "AI search and Google visibility",
    areaServed: "Worldwide",
    provider: { "@id": `${SITE_URL}/#business`, "@type": "LocalBusiness", name: BUSINESS_NAME },
    offers: [
        { "@type": "Offer", name: "AI Visibility, 6-month plan", price: PRICES.aiVisibility6, priceCurrency: "GBP", description: "Per month, 6-month minimum, then rolling monthly" },
        { "@type": "Offer", name: "AI Visibility, 3-month plan", price: PRICES.aiVisibility3, priceCurrency: "GBP", description: "Per month, 3-month minimum, then rolling monthly" },
    ],
};

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">{eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        </div>
    );
}

export default function AiVisibilityPage() {
    return (
        <main className="min-h-screen bg-[#070b14] text-slate-300">
            <JsonLd data={serviceSchema} />
            <Navbar />

            {/* Hero */}
            <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-6">Step 1 · AI Visibility</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                        Make sure Google and AI tools <span className="text-blue-500">can find you and trust you.</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-light mb-10">
                        In plain English: making sure Google, ChatGPT, Gemini and Perplexity can clearly identify your business, and trust it enough to recommend.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href={CTA_HREF} className="inline-flex items-center justify-center px-8 py-3.5 font-bold rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                            {CTA_LABEL}
                        </a>
                        <a href={mainHref("/pricing")} className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white border border-white/10 hover:bg-white/5 transition-colors">
                            From {gbp(PRICES.aiVisibility6)}/month
                        </a>
                    </div>
                </div>
            </section>

            {/* Included */}
            <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c] border-y border-white/5">
                <div className="max-w-5xl mx-auto">
                    <Heading eyebrow="What's included" title="Every month, I look after" />
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {included.map((i) => (
                            <li key={i.title} className="p-6 bg-[#0d1527] border border-white/5 rounded-2xl">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-400" />
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">{i.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{i.detail}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Won't promise */}
            <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <Heading eyebrow="Straight answers" title="What I won't promise" />
                    <ul className="space-y-3">
                        {wontPromise.map((w) => (
                            <li key={w} className="flex items-start gap-3 p-5 bg-[#0d1527] border border-white/5 rounded-xl">
                                <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-rose-400" />
                                <p className="text-slate-300 leading-relaxed">{w}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Price + next step */}
            <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c] border-y border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pricing</h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-2">
                        {gbp(PRICES.aiVisibility6)}/month with a 6-month minimum, or {gbp(PRICES.aiVisibility3)}/month with a 3-month minimum.
                    </p>
                    <p className="text-slate-400 mb-8">Rolling monthly after the minimum term. No setup fee.</p>
                    <a href={mainHref("/pricing")} className="text-blue-400 hover:text-blue-300 font-semibold">Compare all plans</a>

                    <div className="mt-14 p-6 sm:p-8 bg-[#0d1527] border border-white/10 rounded-2xl">
                        <p className="text-lg text-slate-200 leading-relaxed mb-4">
                            When you&apos;re ready to grow faster, Programmatic SEO builds on everything here.
                        </p>
                        <a href={pseoHref("/")} className="inline-flex items-center text-sm font-bold text-blue-500 hover:text-blue-400">
                            How Programmatic SEO works <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                    </div>

                    <div className="mt-12">
                        <a href={CTA_HREF} className="inline-flex items-center justify-center px-8 sm:px-10 py-4 text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                            {CTA_LABEL} <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <p className="text-slate-400 mt-4">I&apos;ll show you what ChatGPT and Gemini currently say about your business. No obligation.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
