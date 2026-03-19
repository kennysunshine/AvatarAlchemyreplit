import { Check, Info, Minus } from 'lucide-react';

export function Pricing() {
    const tiers = [
        {
            name: "Tier 1",
            title: "Entity Signal Protocol",
            subtitle: "Make the Machines See You",
            price: "595",
            commitment: "30-Day Rolling",
            description: "We verify your existence across the core data sources that AI models trust.",
            features: [
                "Knowledge Graph Validation",
                "GBP Sync (AI Optimized)",
                "Zero-Click Citations",
                "Quarterly AI Visibility Report"
            ],
            highlight: false,
            cta: "Activate Signal"
        },
        {
            name: "Tier 2",
            title: "Authority Vector System",
            subtitle: "The Core: Teach AI to Prefer You",
            price: "1,250",
            commitment: "3-Month Commitment",
            description: "Displace competitors by injecting your brand into specific answer engine queries.",
            features: [
                "Everything in Tier 1, plus:",
                "Competitor Displacement",
                "Monthly FAQ Injections",
                "Sentiment Training"
            ],
            highlight: true,
            cta: "Start Displacement"
        },
        {
            name: "Tier 3",
            title: "Omnipresence Ecosystem",
            subtitle: "The Ceiling: Own the Entire Conversation",
            price: "2,495",
            commitment: "3-Month Commitment",
            description: "Full multi-modal dominance across text, voice, and visual search.",
            features: [
                "Everything in Tier 2, plus:",
                "Multi-Modal Optimization",
                "Founder-Led Strategy",
                "External Signal Amplification"
            ],
            highlight: false,
            cta: "Contact for Omnipresence"
        }
    ];

    const comparisonData = [
        { item: "Knowledge Graph Validation", t1: true, t2: true, t3: true },
        { item: "GBP Sync (AI Optimized)", t1: true, t2: true, t3: true },
        { item: "Zero-Click Citations", t1: true, t2: true, t3: true },
        { item: "Quarterly Visibility Report", t1: true, t2: true, t3: true },
        { item: "Competitor Displacement", t1: false, t2: true, t3: true },
        { item: "Monthly FAQ Injections", t1: false, t2: true, t3: true },
        { item: "Sentiment Training", t1: false, t2: true, t3: true },
        { item: "Multi-Modal Optimization", t1: false, t2: false, t3: true },
        { item: "Founder-Led Strategy", t1: false, t2: false, t3: true },
        { item: "Signal Amplification", t1: false, t2: false, t3: true },
    ];

    return (
        <section id="pricing" className="py-32 px-6 bg-[#050609]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-light mb-6 text-white tracking-tight">Frictionless AI Dominance</h2>
                    <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                        No setup fees. No complexity. Just pure signal amplification for the AI era.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 mb-32">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-2xl p-10 border transition-all duration-500 ${tier.highlight
                                ? 'bg-[#0b0c10] border-primary/40 shadow-[0_0_50px_-12px_rgba(0,229,255,0.1)]'
                                : 'bg-transparent border-white/10 hover:border-white/20'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-10 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-10">
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">{tier.name}</div>
                                <h3 className="text-2xl font-light mb-2 text-white">{tier.title}</h3>
                                <p className="text-sm text-gray-400 font-light mb-8 italic">{tier.subtitle}</p>

                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className={`text-5xl font-extralight ${tier.highlight ? 'text-primary' : 'text-white'}`}>£{tier.price}</span>
                                    <span className="text-gray-500 text-sm">/mo</span>
                                </div>
                                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-widest mb-8">
                                    {tier.commitment}
                                </div>
                                <p className="text-sm text-gray-400 font-light leading-relaxed">{tier.description}</p>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {tier.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-light">
                                        <Check className={`w-3.5 h-3.5 flex-shrink-0 ${tier.highlight ? 'text-primary' : 'text-gray-600'}`} />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-medium text-sm transition-all duration-300 ${tier.highlight
                                ? 'bg-primary hover:bg-primary-hover text-black shadow-lg shadow-primary/20'
                                : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                                }`}>
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="max-w-5xl mx-auto border-t border-white/5 pt-24">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl font-light text-white mb-4">Compare Deliverables</h3>
                        <p className="text-sm text-gray-500">A detailed breakdown of what's included in each protocol.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-6 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Deliverable</th>
                                    <th className="py-6 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Protocol 1</th>
                                    <th className="py-6 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Protocol 2</th>
                                    <th className="py-6 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Protocol 3</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                                        <td className="py-5 px-4 text-sm text-gray-300 font-light">{row.item}</td>
                                        <td className="py-5 px-4 text-center">
                                            {row.t1 ? <Check className="w-4 h-4 mx-auto text-primary/60" /> : <Minus className="w-4 h-4 mx-auto text-gray-700" />}
                                        </td>
                                        <td className="py-5 px-4 text-center">
                                            {row.t2 ? <Check className="w-4 h-4 mx-auto text-primary/60" /> : <Minus className="w-4 h-4 mx-auto text-gray-700" />}
                                        </td>
                                        <td className="py-5 px-4 text-center">
                                            {row.t3 ? <Check className="w-4 h-4 mx-auto text-primary/60" /> : <Minus className="w-4 h-4 mx-auto text-gray-700" />}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

