import { Check, Info } from 'lucide-react';

export function Pricing() {
    const tiers = [
        {
            name: "TIER 01",
            title: "AI-Search Foundation",
            subtitle: "Dominate AI Discovery Engines",
            setup: "£1,200",
            price: "350",
            description: "Perfect for businesses starting their AI visibility journey",
            totalFirstMonth: "£1,550",
            features: [
                "Monthly AI Discovery Audit",
                "Advanced AI Entity Markup",
                "Directory Sync & Citations",
                "AI Persona Sync & Brand Voice Alignment",
                "12 Social Posts (delivered monthly)",
                "4 Short-form Videos (delivered monthly)",
                "Monthly Performance Report"
            ],
            highlight: false,
            cta: "Get Started"
        },
        {
            name: "TIER 02",
            title: "Growth Engine Pro",
            subtitle: "AI Search + Social Growth",
            setup: "£1,200",
            price: "750",
            description: "Everything in Foundation, plus advanced growth tools",
            totalFirstMonth: "£1,950",
            features: [
                "Everything in Foundation, plus:",
                "Bi-weekly AI Discovery Scans",
                "Advanced Schema & Metadata",
                "Priority Citation Building",
                "AI Sentiment Analysis & Reputation Shield",
                "Market Dominance Tracking",
                "Priority Omni-Channel Sync",
                "20 Social Posts (delivered monthly)",
                "8 Short-form Videos (delivered monthly)",
                "Content Strategy Calls"
            ],
            highlight: true,
            cta: "Scale Now"
        },
        {
            name: "TIER 03",
            title: "Market Authority",
            subtitle: "Autonomous Brand Ecosystem",
            setup: "£3,000",
            price: "1,200",
            description: "Everything in Growth Engine, plus full done-for-you service",
            totalFirstMonth: "£4,200",
            features: [
                "Everything in Growth Engine, plus:",
                "Real-time AI Tracking",
                "Full Authority Management",
                "Digital Twin: Custom AI Avatar",
                "4 Avatar Videos per Month",
                "Multilingual Content Localization",
                "Directory Sync & Citations",
                "Dedicated Account Manager",
                "Priority Support"
            ],
            highlight: false,
            cta: "Contact Us"
        }
    ];

    return (
        <section id="pricing" className="py-24 px-6 bg-[#050609]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-gray-400">Choose the tier that matches your growth goals. All plans include dedicated support.</p>

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
                            className={`relative rounded-3xl p-8 border ${tier.highlight
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
                                <h3 className="text-xl font-bold mb-1">{tier.title}</h3>
                                <p className="text-sm text-secondary font-medium mb-6">{tier.subtitle}</p>

                                <div className="text-xs text-gray-500 mb-2">{tier.setup} One-time Setup <Info className="inline w-3 h-3 ml-1" /></div>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className={`text-4xl font-bold ${tier.highlight ? 'text-primary' : 'text-white'}`}>£{tier.price}</span>
                                    <span className="text-gray-500">/month</span>
                                </div>
                                <p className="text-xs text-gray-400 mb-6 min-h-[40px]">{tier.description}</p>

                                <div className="bg-white/5 rounded-lg p-3 mb-8">
                                    <p className="text-xs text-gray-400 mb-1">First month total</p>
                                    <p className="text-xl font-bold text-white">{tier.totalFirstMonth}</p>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlight ? 'text-primary' : 'text-primary'}`} />
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
