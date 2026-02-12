import { Search, Video, Bot } from 'lucide-react';

export function Solutions() {
    const pillars = [
        {
            tag: "Get Found",
            icon: Search,
            title: "AI Visibility",
            subtitle: "AI Search Optimization",
            problem: "Traditional SEO is dying; AI Search (SGE, Gemini, ChatGPT) is taking over.",
            solution: "We ensure chatbots recommend YOUR business when customers ask for local suggestions.",
            deliverables: [
                "Advanced Schema Markup",
                "AI Discovery Audit",
                "Citation & Authority Building",
                "Real-time AI Tracking"
            ]
        },
        {
            tag: "Get Seen",
            icon: Video,
            title: "Content Lab",
            subtitle: "The Repurposing Lab",
            problem: "Business owners have no time to film daily.",
            solution: "We turn 1 long video into 20+ viral shorts using AI—with your Brand DNA intact.",
            deliverables: [
                "Long-form to Short-form Transformation",
                "TikTok, Reels & YouTube Shorts",
                "High-accuracy Captions",
                "Professional Branding & Polish"
            ]
        },
        {
            tag: "Scale",
            icon: Bot,
            title: "Digital Twins",
            subtitle: "AI Avatars",
            problem: "The owner is the bottleneck for video content.",
            solution: "A custom digital clone for infinite, effort-free video production.",
            deliverables: [
                "Custom AI Video Avatar",
                "Audio Clone Technology",
                "Unlimited Video Generation",
                "Multi-language Support"
            ]
        }
    ];

    return (
        <section id="solutions" className="py-24 px-6 bg-[#08090d]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Three Pillars to Dominate</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A complete system to get found, get seen, and scale—without burning out.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => (
                        <div key={idx} className="bg-[#0b0c10] border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all duration-300">
                            {/* Tag */}
                            <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-primary text-xs font-semibold mb-8">
                                {pillar.tag}
                            </div>

                            {/* Icon & Title */}
                            <div className="mb-8">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <pillar.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{pillar.title}</h3>
                                <p className="text-primary text-sm font-medium">{pillar.subtitle}</p>
                            </div>

                            {/* Problem/Solution */}
                            <div className="space-y-4 mb-8 text-sm">
                                <p>
                                    <strong className="text-white block mb-1">The Problem:</strong>
                                    <span className="text-gray-400">{pillar.problem}</span>
                                </p>
                                <p>
                                    <strong className="text-white block mb-1">The Solution:</strong>
                                    <span className="text-gray-400">{pillar.solution}</span>
                                </p>
                            </div>

                            {/* Deliverables */}
                            <div className="border-t border-white/5 pt-6">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Key Deliverables</p>
                                <ul className="space-y-3">
                                    {pillar.deliverables.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
