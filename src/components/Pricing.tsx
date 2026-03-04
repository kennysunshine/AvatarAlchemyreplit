import { Check, Info } from 'lucide-react';

export function Pricing() {
    const tiers = [
        {
            name: "The Hook",
            title: "Entity Signal Protocol",
            subtitle: "Make the Machines See You",
            price: "395",
            commitment: "30-Day Rolling",
            description: "We verify your existence across the core data sources that AI models trust.",
            features: [
                "Core Knowledge Graph Validation",
                "Google Business Profile 'AI Sync'",
                "Foundational 'Zero-Click' Citations",
                "Quarterly 'AI Visibility' Report"
            ],
            highlight: false,
            cta: "Activate Signal"
        },
        {
            name: "The Core",
            title: "Authority Vector System",
            subtitle: "Teach AI to Prefer You",
            price: "850",
            commitment: "3-Month Commitment",
            description: "Displace competitors by injecting your brand into specific answer engine queries.",
            features: [
                "Everything in Entity Signal, plus:",
                "Competitor Gap Analysis & Displacement",
                "Monthly 'Answer Engine' FAQ Injection (x4)",
                "Review Sentiment 'Training'"
            ],
            highlight: true,
            cta: "Start Displacement"
        },
        {
            name: "The Ceiling",
            title: "Omnipresence Ecosystem",
            subtitle: "Own the Entire Conversation",
            price: "1,495",
            commitment: "3-Month Commitment",
            description: "Full multi-modal dominance across text, voice, and visual search.",
            features: [
                "Everything in Authority Vector, plus:",
                "Multi-Modal Optimization (Visual/Video)",
                "'Founder-Led' Strategy Looms (Monthly)",
                "External Signal Amplification (PR/Guest Posts)"
            ],
            highlight: false,
            cta: "Dominate Market"
        }
    ];

    return (
        <section id="pricing" className="py-24 px-6 bg-[#050609]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Frictionless AI Dominance</h2>
                    <p className="text-gray-400">No setup fees. No fluff. Just pure signal amplification.</p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className="text-sm font-medium text-white">UK</span>
                        <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-[#050609] rounded-full shadow-sm" />
                        </div>
                        <span className="text-sm font-medium text-gray-500">Global</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-3xl p-8 border hover:border-primary/50 transition-colors duration-300 ${tier.highlight
                                ? 'bg-[#0b0c10] border-primary shadow-[0_0_40px_-10px_rgba(0,229,255,0.15)] ring-1 ring-primary/20'
                                : 'bg-[#0F1115] border-white/5'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1.5 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{tier.name}</span>
                                    {tier.highlight && <span className="text-primary text-xl">↗</span>}
                                </div>
                                <h3 className="text-xl font-bold mb-1 text-white">{tier.title}</h3>
                                <p className="text-sm text-gray-400 font-medium mb-6">{tier.subtitle}</p>

                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className={`text-4xl font-bold ${tier.highlight ? 'text-primary' : 'text-white'}`}>£{tier.price}</span>
                                    <span className="text-gray-500">/month</span>
                                </div>
                                <div className="text-xs text-primary mb-6 font-medium bg-primary/10 inline-block px-2 py-1 rounded">
                                    {tier.commitment}
                                </div>
                                <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{tier.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlight ? 'text-primary' : 'text-gray-500'}`} />
                                        <span className="text-xs">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-bold text-sm transition-all ${tier.highlight
                                ? 'bg-primary hover:bg-primary-hover text-black'
                                : 'bg-white/10 hover:bg-white/20 text-white'
                                }`}>
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
