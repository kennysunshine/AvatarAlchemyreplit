import { ArrowRight } from "lucide-react";
import { PRICES, gbp, mainHref, pseoHref } from "@/components/shared/site-links";

const steps = [
    {
        step: "Step 1",
        title: "AI Visibility",
        body: "Get the basics right so Google and AI tools can find and trust you.",
        price: `From ${gbp(PRICES.aiVisibility6)}/month`,
        href: mainHref("/ai-visibility"),
        link: "How AI Visibility works",
    },
    {
        step: "Step 2",
        title: "Programmatic SEO",
        body: "Hundreds of pages built for the exact searches your customers make.",
        price: `${gbp(PRICES.pseoBuild)} build, then ${gbp(PRICES.pseoMonthly)}/month`,
        href: pseoHref("/"),
        link: "How Programmatic SEO works",
    },
];

export function TwoStepPath() {
    return (
        <section id="how-it-works" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c] border-y border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12 sm:mb-14">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">How it works</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Two steps, at your own pace</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Most businesses start with AI Visibility and move to Programmatic SEO when they&apos;re ready.
                    </p>
                </div>
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((s) => (
                        <li key={s.title} className="flex">
                            <a
                                href={s.href}
                                className="group flex flex-col w-full p-7 sm:p-8 bg-[#0d1527] border border-white/5 hover:border-blue-500/30 rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                            >
                                <span className="text-xs font-mono text-blue-400 mb-3">{s.step.toUpperCase()}</span>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{s.title}</h3>
                                <p className="text-slate-300 text-lg leading-relaxed mb-4 flex-1">{s.body}</p>
                                <p className="text-sm text-slate-500 mb-6">{s.price}</p>
                                <span className="inline-flex items-center text-sm font-bold text-blue-500 group-hover:text-blue-400">
                                    {s.link} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </a>
                        </li>
                    ))}
                </ol>
                <p className="text-center mt-8">
                    <a href={mainHref("/pricing")} className="text-blue-400 hover:text-blue-300 font-semibold">See full pricing</a>
                </p>
            </div>
        </section>
    );
}
