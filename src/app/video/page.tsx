import type { Metadata } from "next";
import { Check, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoSection } from "@/components/VideoSection";
import { CONTACT_EMAIL } from "@/components/shared/site-links";

const DESCRIPTION =
    "Digital Twins (AI video presenters made from you) and video repurposing: long videos turned into short vertical clips for TikTok, Instagram Reels, Facebook Reels and YouTube Shorts.";

export const metadata: Metadata = {
    title: "Video & AI Avatars",
    description: DESCRIPTION,
    alternates: { canonical: "/video" },
    openGraph: { title: "Video & AI Avatars | Avatar Alchemy", description: DESCRIPTION, url: "/video" },
};

// No prices on this page (pricing depends on the project). Every service links to "Ask me about this".
const services = [
    {
        id: "digital-twins",
        title: "Digital Twins",
        intro: "An AI video presenter that looks and sounds like you, so you can make videos without filming each one.",
        whoFor:
            "Founders, business owners and personal brands who want to show up on video regularly but don't have the time to film every week.",
        how: "We start by sitting down with you to understand your goals: who you want to reach, what you want to say, and where your videos will be seen. We then create your twin around those needs.",
        included: ["An AI video presenter based on you", "A voice clone", "Versions in other languages"],
        subject: "Digital Twin",
    },
    {
        id: "content-lab",
        title: "Content Lab: video repurposing",
        intro: "Your long videos turned into short vertical clips, captioned and branded, ready to post.",
        whoFor:
            "Businesses and creators who already have long videos, such as webinars, talks, interviews, podcasts or tutorials, but don't have the time to turn them into regular social media content.",
        how: "We take your long-form videos and cut them into short clips for whichever platforms you use. If you need new long-form content as well, we can make it, from documentary-style films to longer videos for YouTube and your website.",
        included: [
            "Short vertical clips for TikTok, Instagram Reels, Facebook Reels and YouTube Shorts",
            "Captions on every clip",
            "Your branding on every clip",
            "Long-form and documentary-style video",
        ],
        subject: "Video repurposing",
    },
];

function AskMe({ subject }: { subject: string }) {
    return (
        <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-all"
        >
            <Mail className="w-4 h-4" /> Ask me about this
        </a>
    );
}

export default function VideoPage() {
    return (
        <main className="min-h-screen bg-[#070b14] text-slate-300">
            <Navbar />

            <section className="pt-36 pb-12 sm:pt-44 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-6">Video &amp; AI Avatars</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                        Video for your business, <span className="text-blue-500">without filming every week.</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                        Two services: Digital Twins, an AI presenter made from you, and the Content Lab, which turns your long videos into short clips.
                    </p>
                </div>
            </section>

            {services.map((s, i) => (
                <section key={s.id} id={s.id} className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 ${i % 2 === 0 ? "bg-[#0a0f1c] border-y border-white/5" : ""}`}>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{s.title}</h2>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">{s.intro}</p>
                        <h3 className="text-lg font-semibold text-white mb-2">Who it&apos;s for</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">{s.whoFor}</p>
                        <h3 className="text-lg font-semibold text-white mb-2">How it works</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">{s.how}</p>
                        <h3 className="text-lg font-semibold text-white mb-3">What&apos;s included</h3>
                        <ul className="space-y-2 mb-8">
                            {s.included.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-slate-300">
                                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-slate-400 mb-4">Pricing depends on the project.</p>
                        <AskMe subject={s.subject} />
                    </div>
                </section>
            ))}

            <VideoSection />

            <Footer />
        </main>
    );
}
