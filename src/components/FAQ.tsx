import { ChevronDown } from 'lucide-react';

export function FAQ() {
    const faqs = [
        "How does my local business show up in AI search results like ChatGPT and Gemini?",
        "What is a 'Digital Twin' or AI Avatar for business?",
        "How much content do I need to start video repurposing?",
        "Is traditional SEO dead because of AI?"
    ];

    return (
        <section className="py-24 px-6 bg-[#050609]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-400 text-center mb-12">Everything you need to know about AI visibility and digital transformation.</p>

                <div className="space-y-4">
                    {faqs.map((q, idx) => (
                        <div key={idx} className="bg-[#0F1115] border border-white/5 rounded-lg p-6 flex justify-between items-center cursor-pointer hover:bg-[#15181e] transition-colors group">
                            <span className="font-medium text-sm md:text-base">{q}</span>
                            <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
