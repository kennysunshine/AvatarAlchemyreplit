import Link from 'next/link';
import ParticleBackground from './ParticleBackground';
import { FadeIn } from './AnimatedHero';
import { CTA_HREF, CTA_LABEL, AUDIT_TOOL_HREF, AUDIT_TOOL_LABEL } from "@/components/shared/site-links";

export function Hero() {
    return (
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden flex flex-col items-center text-center px-4">

            {/* Particle Background */}
            <div className="absolute inset-0 pointer-events-none">
                <ParticleBackground />
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col items-center w-full relative z-10">
                {/* Tagline Pill */}
                <FadeIn delay={0.1}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        AI-Powered Marketing for Local Businesses
                    </div>
                </FadeIn>

                {/* Main Headline */}
                <FadeIn delay={0.2}>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6 max-w-4xl">
                        Stop Guessing. <br />
                        <span className="text-gradient-primary">Start Trending.</span>
                    </h1>
                </FadeIn>

                {/* Subheadline */}
                <FadeIn delay={0.3}>
                    <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
                        We help local businesses dominate AI Search Engines and automate Social Media with Digital Twins.
                    </p>
                </FadeIn>

                {/* Buttons */}
                <FadeIn delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
                        <a
                            href={CTA_HREF}
                            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                        >
                            {CTA_LABEL}
                        </a>
                        <a
                            href={AUDIT_TOOL_HREF}
                            className="flex items-center gap-2 px-8 py-3.5 rounded-full text-white border border-white/10 hover:bg-white/5 transition-colors"
                        >
                            {AUDIT_TOOL_LABEL}
                        </a>
                    </div>
                </FadeIn>

                {/* 3 Pillars / Metrics Row */}
                <FadeIn delay={0.5}>
                    <div className="grid grid-cols-3 gap-12 md:gap-24 text-center w-full max-w-4xl mx-auto border-t border-white/5 pt-12">
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-1 font-heading min-h-[4rem] flex items-end justify-center md:min-h-0">Get Found</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">AI Visibility</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-1 font-heading min-h-[4rem] flex items-end justify-center md:min-h-0">Get Seen</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Content Lab</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-1 font-heading min-h-[4rem] flex items-end justify-center md:min-h-0">Scale Up</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Digital Twins</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
