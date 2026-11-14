import { ABOUT } from "@/components/shared/site-links";

// Same wording as the About section on pseo.avatar-alchemy.com (shared via site-links.ts).
export function About() {
    return (
        <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c] border-y border-white/5 scroll-mt-20">
            <div className="max-w-3xl mx-auto p-6 sm:p-10 bg-[#0d1527] border border-white/10 rounded-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">About</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">{ABOUT.heading}</h2>
                <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                    {ABOUT.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}
