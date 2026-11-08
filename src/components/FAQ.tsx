import { ChevronDown } from 'lucide-react';
import { JsonLd } from './JsonLd';

// DRAFT answers written by Claude from general knowledge, for Kenny to review and edit before going live.
const faqs = [
    {
        q: "How does my business show up in AI search results like ChatGPT and Gemini?",
        a: "AI assistants such as ChatGPT, Gemini and Google's AI Overviews build their answers from information they find across the web: your website, your Google Business Profile, reviews, directory listings and mentions on other sites. They tend to recommend businesses they can clearly identify and trust. To show up, your business needs the same details everywhere (name, contact details and what you do), a website that states plainly what you offer and who you serve, structured data that machines can read, and genuine reviews and mentions from other websites.",
    },
    {
        q: "What is a 'Digital Twin' or AI Avatar for business?",
        a: "A Digital Twin is an AI-generated video presenter, often modelled on the business owner's own face and voice with their permission. Once it is set up, you can create new videos by supplying a script, without filming each one. Businesses use them for social media clips, explainer videos, training and versions of the same message in other languages. Tom, the presenter in the videos on this page, is an example of an AI presenter.",
    },
    {
        q: "How much content do I need to start video repurposing?",
        a: "Less than you might think. A single long video, such as a webinar, talk, interview or tutorial, can be cut into many short clips for TikTok, Instagram Reels and YouTube Shorts, each with captions and your branding. If you have older recordings sitting unused, they are usually a good place to start. Every repurposing project begins with a conversation about your goals and the content you already have, so we can agree on what will work best for you.",
    },
    {
        q: "Is traditional SEO dead because of AI?",
        a: "No, but it has changed. AI search tools still rely on the same foundations as traditional SEO: a fast, well-structured website, clear information about what you do, and trusted links and mentions from other sites. What is new is that AI tools summarise an answer instead of just listing links, so being clearly described and widely mentioned matters more than ever. The best approach is to do both: solid SEO for Google, and making sure AI tools can understand and recommend you.",
    },
];

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
        <section id="faq" className="py-24 px-6 bg-[#050609]">
            <JsonLd data={faqSchema} />
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-400 text-center mb-12">Everything you need to know about AI visibility and digital transformation.</p>

                {/* <details> works without JavaScript, so the answers are in the page HTML for search engines and AI crawlers. */}
                <div className="space-y-4">
                    {faqs.map(({ q, a }) => (
                        <details key={q} className="group bg-[#0F1115] border border-white/5 rounded-lg hover:bg-[#15181e] transition-colors">
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
