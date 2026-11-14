import { ChevronDown } from 'lucide-react';
import { JsonLd } from './JsonLd';
import { faqs } from '@/lib/faqs';



const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
    })),
};

export function FAQ() {
    return (
        <section id="faq" className="py-24 px-6 bg-[#070b14]">
            <JsonLd data={faqSchema} />
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-400 text-center mb-12">Straight answers about getting found on Google and in AI search.</p>

                {/* <details> works without JavaScript, so the answers are in the page HTML for search engines and AI crawlers. */}
                <div className="space-y-4">
                    {faqs.map(({ q, a }) => (
                        <details key={q} className="group bg-[#0d1527] border border-white/5 rounded-lg hover:bg-[#111b30] transition-colors">
                            <summary className="p-6 flex justify-between items-center gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <h3 className="font-medium text-sm md:text-base">{q}</h3>
                                <ChevronDown aria-hidden="true" className="w-5 h-5 flex-shrink-0 text-gray-500 group-hover:text-white transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="px-6 pb-6 -mt-2 text-sm md:text-base text-gray-400 leading-relaxed">{a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
