import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoSection } from "@/components/VideoSection";
import { JsonLd } from "@/components/JsonLd";
import { Placeholder } from "@/components/LegalPage";
import { services, getService, serviceSchema, type Service } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import { blogPosts } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const s = getService((await params).slug);
    if (!s) return {};
    return {
        title: s.name,
        description: s.metaDescription,
        alternates: { canonical: `/services/${s.slug}` },
        openGraph: { title: s.name, description: s.metaDescription, url: `/services/${s.slug}` },
        // Hidden from search engines until the placeholders are filled in
        ...(s.draft ? { robots: { index: false, follow: true } } : {}),
    };
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
    return (
        <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-white">{heading}</h2>
            {children}
        </section>
    );
}

const text = "text-gray-400 text-lg leading-relaxed";

function Body({ s, field }: { s: Service; field: "whoFor" | "problem" | "solution" | "example" }) {
    const value = s[field];
    return value ? <p className={text}>{value}</p> : <Placeholder>{s.prompts[field]}</Placeholder>;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const s = getService((await params).slug);
    if (!s) notFound();
    const relatedFaqs = s.faqIndexes.map((i) => faqs[i]);
    const relatedPosts = s.blogSlugs.map((slug) => blogPosts[slug]);

    return (
        <main className="min-h-screen bg-[#050609] text-white">
            <JsonLd data={serviceSchema(s)} />
            <Navbar />

            <article className="pt-32 pb-12 px-6 max-w-3xl mx-auto">
                <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4" /> All services
                </Link>

                <header className="mb-14">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-6">{s.tag}</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{s.name}</h1>
                    {s.intro ? <p className="text-xl text-gray-400 leading-relaxed">{s.intro}</p> : <Placeholder>{s.prompts.intro}</Placeholder>}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <a href="/book" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                            Book a consultation <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="https://audit.avatar-alchemy.com" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                            Free Visibility Audit
                        </a>
                    </div>
                </header>

                <Section heading="Who it's for"><Body s={s} field="whoFor" /></Section>
                <Section heading="The problem"><Body s={s} field="problem" /></Section>
                <Section heading="How we solve it"><Body s={s} field="solution" /></Section>

                <Section heading="What's included">
                    {s.included ? (
                        <ul className="space-y-3">
                            {s.included.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-gray-300 text-lg">
                                    <Check aria-hidden="true" className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Placeholder>{s.prompts.included}</Placeholder>
                    )}
                </Section>

                <Section heading="How it works">
                    {s.howItWorks ? (
                        <ol className="space-y-3 list-decimal list-inside text-gray-300 text-lg">
                            {s.howItWorks.map((step) => <li key={step}>{step}</li>)}
                        </ol>
                    ) : (
                        <Placeholder>{s.prompts.howItWorks}</Placeholder>
                    )}
                </Section>

                <Section heading="Pricing">
                    {s.pricing === "plans" ? (
                        <p className={text}>
                            Choose from three monthly plans: Entity Signal Protocol, Authority Vector System and Omnipresence Ecosystem.{" "}
                            <a href="/#pricing" className="text-primary hover:underline">See plans and prices</a>.
                        </p>
                    ) : s.pricing ? (
                        <p className={text}>{s.pricing}</p>
                    ) : (
                        <Placeholder>{s.prompts.pricing}</Placeholder>
                    )}
                </Section>

                <Section heading="Example work"><Body s={s} field="example" /></Section>
            </article>

            {s.showDemoVideos && <VideoSection />}

            <div className="px-6 max-w-3xl mx-auto pb-20">
                {relatedFaqs.length > 0 && (
                    <Section heading="Questions">
                        <div className="space-y-4">
                            {relatedFaqs.map(({ q, a }) => (
                                <details key={q} className="group bg-[#0F1115] border border-white/5 rounded-lg">
                                    <summary className="p-6 flex justify-between items-center gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                        <h3 className="font-medium">{q}</h3>
                                        <ChevronDown aria-hidden="true" className="w-5 h-5 flex-shrink-0 text-gray-500 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <p className="px-6 pb-6 -mt-2 text-gray-400 leading-relaxed">{a}</p>
                                </details>
                            ))}
                        </div>
                    </Section>
                )}

                {relatedPosts.length > 0 && (
                    <Section heading="Further reading">
                        <ul className="space-y-3">
                            {relatedPosts.map((p) => (
                                <li key={p.slug}>
                                    <Link href={`/blog/${p.slug}`} className="text-primary hover:underline text-lg">{p.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </Section>
                )}

                <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-8 text-center">
                    <p className="text-xl font-medium mb-6">Every project starts with a conversation about your goals.</p>
                    <a href="/book" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-black font-bold px-8 py-3 rounded-lg transition-colors">
                        Book a consultation <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <Footer />
        </main>
    );
}
