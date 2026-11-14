import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA_HREF, CTA_LABEL, PRICES, gbp, mainHref, pseoHref } from "@/components/shared/site-links";

const DESCRIPTION =
    "AI Visibility from £395/month (6-month minimum) or £495/month (3-month minimum). Programmatic SEO: £3,000 build plus £1,000/month, rolling monthly. No setup fee.";

export const metadata: Metadata = {
    title: "Pricing",
    description: DESCRIPTION,
    alternates: { canonical: "/pricing" },
    openGraph: { title: "Pricing | Avatar Alchemy", description: DESCRIPTION, url: "/pricing" },
};

const aiVisibilityIncludes = [
    "Schema markup (structured data)",
    "Google Business Profile set up and kept up to date",
    "Listings with the same name, address and phone everywhere",
    "A simple system for asking for reviews",
    "Monthly AI check: what ChatGPT, Gemini and Perplexity say about you",
];

type Card = {
    name: string;
    label?: string;
    price: string;
    unit: string;
    terms: string[];
    includes: string[];
    more: { href: string; text: string };
    highlight?: boolean;
};

const cards: Card[] = [
    {
        name: "AI Visibility",
        label: "Best value",
        price: gbp(PRICES.aiVisibility6),
        unit: "/month",
        terms: ["6-month minimum, then rolling monthly", "No setup fee"],
        includes: aiVisibilityIncludes,
        more: { href: mainHref("/ai-visibility"), text: "How AI Visibility works" },
        highlight: true,
    },
    {
        name: "AI Visibility",
        price: gbp(PRICES.aiVisibility3),
        unit: "/month",
        terms: ["3-month minimum, then rolling monthly", "No setup fee"],
        includes: aiVisibilityIncludes,
        more: { href: mainHref("/ai-visibility"), text: "How AI Visibility works" },
    },
    {
        name: "Programmatic SEO",
        price: gbp(PRICES.pseoBuild),
        unit: " build",
        terms: [`Then ${gbp(PRICES.pseoMonthly)}/month, rolling monthly`, "Keep every page built"],
        includes: [
            "Includes everything in AI Visibility",
            "A search map for your business",
            "Hundreds of pages built for the searches your customers make",
            "Hosting, monitoring and new pages every month",
            "A monthly report in plain English",
        ],
        more: { href: pseoHref("/"), text: "How Programmatic SEO works" },
    },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#070b14] text-slate-300">
            <Navbar />
            <section className="pt-36 pb-20 sm:pt-44 sm:pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">Simple, fixed pricing</h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                            Two ways to buy: AI Visibility to get the basics right, and Programmatic SEO when you&apos;re ready to grow faster.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {cards.map((c) => (
                            <div
                                key={c.name + c.price}
                                className={`relative flex flex-col p-7 sm:p-8 rounded-2xl border ${c.highlight ? "bg-blue-500/5 border-blue-500/30" : "bg-[#0d1527] border-white/10"}`}
                            >
                                {c.label && (
                                    <span className="absolute -top-3 left-7 bg-blue-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                        {c.label}
                                    </span>
                                )}
                                <h2 className="text-xl font-bold text-white mb-4">{c.name}</h2>
                                <p className="mb-4">
                                    <span className={`text-4xl font-bold ${c.highlight ? "text-blue-400" : "text-white"}`}>{c.price}</span>
                                    <span className="text-lg text-slate-500">{c.unit}</span>
                                </p>
                                <ul className="mb-6 space-y-1">
                                    {c.terms.map((t) => (
                                        <li key={t} className="text-sm text-slate-400">{t}</li>
                                    ))}
                                </ul>
                                <ul className="space-y-3 mb-8 flex-1 border-t border-white/5 pt-6">
                                    {c.includes.map((i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                                            <span>{i}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={CTA_HREF}
                                    className={`inline-flex items-center justify-center px-5 py-3 text-sm font-bold rounded-full transition-all ${c.highlight ? "text-white bg-blue-500 hover:bg-blue-600" : "text-white border border-white/15 hover:bg-white/5"}`}
                                >
                                    {CTA_LABEL}
                                </a>
                                <a href={c.more.href} className="mt-4 text-center text-sm font-semibold text-blue-400 hover:text-blue-300">
                                    {c.more.text}
                                </a>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-lg text-slate-300 mt-12">
                        Most businesses start with AI Visibility and move to Programmatic SEO when they&apos;re ready.
                    </p>
                    <p className="text-center text-sm text-slate-500 mt-3">
                        Why a minimum term? This work usually takes a few months to show, so the minimum gives it time to work.
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
