import { Zap, Mic, Users, Search, Brain, BarChart3 } from 'lucide-react';

const features = [
    {
        title: "Get Found - AI Visibility",
        description: "Search is no longer about keywords; it's about answers. We optimize your business to be the top recommendation in AI Search Engines like Perplexity, ChatGPT, and Gemini.",
        icon: Search
    },
    {
        title: "Get Seen - Content Lab",
        description: "Stop shouting into the void. We create high-impact, AI-driven content that resonates with your audience and builds instant authority on social media.",
        icon: Zap
    },
    {
        title: "Scale - Digital Twins",
        description: "Multiply your presence without multiplying your workload. We create AI Digital Twins that automate your social media, customer engagement, and thought leadership.",
        icon: Users
    },
    {
        title: "Traditional SEO is Dead",
        description: "Search engines are now Answer Engines. If you aren't an AI-preferred source, you're invisible.",
        icon: Brain
    },
    {
        title: "Content Creation is Exhausting",
        description: "Staying relevant requires a constant stream of high-quality content. We automate the 'noise' so you can focus on the 'signal'.",
        icon: Mic
    },
    {
        title: "AI Search is the New Google",
        description: "Users are asking Perplexity and ChatGPT for recommendations. We ensure your business is their first choice.",
        icon: BarChart3
    }
];

export const Features = () => {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-heading">
                    The Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Landscape Has Changed</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-[#14161a]/50 border border-white/5 hover:border-purple-500/30 transition-colors duration-300 backdrop-blur-sm group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 flex items-center justify-center mb-6 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all">
                                <feature.icon className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
