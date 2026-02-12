import { Search, Clock, Bot } from 'lucide-react';

export function ProblemSection() {
    const cards = [
        {
            icon: Search,
            color: "text-red-500",
            bg: "bg-red-500/10",
            title: "Traditional SEO is Dead",
            desc: "Google's AI Overviews, Gemini, and ChatGPT are replacing traditional search results. If you're not optimized for AI, you're invisible to the next generation of customers."
        },
        {
            icon: Clock,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            title: "Content Creation is Exhausting",
            desc: "You're sitting on hours of webinars, workshops, and videos that nobody sees. Creating fresh content daily is impossible when you're running a business."
        },
        {
            icon: Bot,
            color: "text-red-400",
            bg: "bg-red-400/10",
            title: "AI Search is the New Google",
            desc: "Customers are asking AI for recommendations—not scrolling search results. The businesses that AI recommends will win. The rest will be forgotten."
        }
    ];

    return (
        <section id="problem" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">The Marketing Landscape Has Changed</h2>
                    <p className="text-xl text-gray-400">If your strategy hasn't evolved, you're already falling behind.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div key={idx} className="glass-panel p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                            <div className={`w-14 h-14 rounded-full ${card.bg} ${card.color} flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform`}>
                                <card.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">{card.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-center text-sm">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
