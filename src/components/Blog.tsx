import { ArrowRight, Clock } from 'lucide-react';

export function Blog() {
    const posts = [
        {
            category: "AI Search",
            readTime: "5 min read",
            title: "What is GEO? (Generative Engine Optimization)",
            excerpt: "The SEO world is undergoing its most significant shift since the invention of the backlink. Learn how...",
            date: "15 January 2026",
            link: "/blog/what-is-geo"
        },
        {
            category: "Local Business",
            readTime: "6 min read",
            title: "How AI Search Engines Recommend Local Businesses",
            excerpt: "If you own a local business, the way customers find you has changed forever. Learn what AI looks for...",
            date: "10 January 2026",
            link: "/blog/local-business-ai-search"
        },
        {
            category: "AI Avatars",
            readTime: "7 min read",
            title: "Digital Twins: The Future of Content Creation",
            excerpt: "Digital Twins of creators and brands are revolutionizing content production. Learn how AI avatars...",
            date: "5 January 2026",
            link: "/blog/digital-twins"
        }
    ];

    return (
        <section id="blog" className="py-24 px-6 bg-[#08090d]">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <div key={idx} className="bg-[#0F1115] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group">
                            <div className="flex items-center gap-3 mb-6 text-xs text-gray-500">
                                <span className="bg-white/10 text-white px-2 py-1 rounded">{post.category}</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                            <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs text-gray-500">{post.date}</span>
                                <a href={post.link} className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read more <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
