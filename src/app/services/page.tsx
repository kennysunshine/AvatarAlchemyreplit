import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services } from "@/lib/services";

const anyDraft = services.some((s) => s.draft);

export const metadata: Metadata = {
    title: "Services",
    description: "Google and AI search visibility, website design, Digital Twins and video repurposing for local businesses worldwide.",
    alternates: { canonical: "/services" },
    // Hidden from search engines while any service page is still a draft
    ...(anyDraft ? { robots: { index: false, follow: true } } : {}),
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#050609] text-white">
            <Navbar />
            <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
                <p className="text-xl text-gray-400 mb-14 max-w-2xl">Every project starts with a conversation about your goals.</p>
                <div className="grid sm:grid-cols-2 gap-6">
                    {services.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="group bg-[#0F1115] border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-colors flex flex-col"
                        >
                            <span className="inline-block self-start bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-5">{s.tag}</span>
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{s.name}</h2>
                            <p className="text-gray-400 leading-relaxed mb-6 flex-1">{s.metaDescription}</p>
                            <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                Learn more <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
