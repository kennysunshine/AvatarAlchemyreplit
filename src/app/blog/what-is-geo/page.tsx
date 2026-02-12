import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-[#050609] text-white">
            <Navbar />

            <article className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
                <Link href="/#blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">AI Search</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 15 January 2026</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5 min read</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">What is GEO? (Generative Engine Optimization)</h1>
                    <p className="text-xl text-gray-400">The Biggest Shift in Search Since the Backlink</p>
                </header>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-400 prose-a:text-primary prose-strong:text-white">
                    <p>
                        The SEO world is currently undergoing its most significant shift since the invention of the backlink. As Google Search Generative Experience (SGE), Perplexity, and ChatGPT become the primary ways people find information, a new discipline has emerged: <strong>Generative Engine Optimization (GEO)</strong>.
                    </p>
                    <div className="bg-red-500/10 border-l-4 border-red-500 p-6 my-8 not-prose rounded-r-lg">
                        <p className="text-red-200 font-medium m-0">If you're still optimizing for "blue links," you're already behind.</p>
                    </div>

                    <h2>From Keywords to Context</h2>
                    <p>Traditional SEO focused on ranking in a list of blue links. You'd stuff keywords, build backlinks, and hope to land on page one.</p>
                    <p>GEO is fundamentally different. It focuses on influencing the AI-generated summary that appears at the top of the search results—often before any links appear at all.</p>
                    <p>Here's the key insight: Because AI engines synthesize multiple sources into one coherent answer, your goal is no longer just to "be first." It's to be the source the AI trusts to build its answer.</p>
                    <p>Think about it this way: When ChatGPT or Gemini answers a question about your industry, do they cite your expertise? If not, you're invisible to the fastest-growing segment of searchers.</p>

                    <h2>Key Strategies for GEO</h2>
                    <h3>1. Authoritative Citations</h3>
                    <p>AI models prioritize content that cites reputable sources and includes statistics. When you write content, back up your claims with:</p>
                    <ul>
                        <li>Industry research and data</li>
                        <li>Case studies with specific numbers</li>
                        <li>Expert quotes and credentials</li>
                        <li>Links to authoritative sources</li>
                    </ul>
                    <p><em>Example: Instead of saying "AI search is growing fast," say "According to recent studies, 40% of Gen Z now prefers AI search over traditional Google searches."</em></p>

                    <h3>2. Information Density</h3>
                    <p>Generative engines favor "meatier" content. Use clear, jargon-free explanations that answer "why" and "how" rather than just "what."</p>
                    <p>The AI is looking for content it can summarize and cite. Thin content with little substance gets ignored.</p>
                    <p><strong>Pro tip:</strong> Structure your content with clear headings, bullet points, and concise paragraphs. AI models parse structured content more effectively.</p>

                    <h3>3. Structured Data (Schema Markup)</h3>
                    <p>Using Schema markup helps AI engines categorize your content accurately. It's like giving the AI a cheat sheet about what your page contains.</p>
                    <p>Key schema types for GEO:</p>
                    <ul>
                        <li>Article schema for blog posts</li>
                        <li>FAQPage schema for Q&A content</li>
                        <li>LocalBusiness schema for location-based discovery</li>
                        <li>HowTo schema for instructional content</li>
                    </ul>

                    <h3>4. Entity Building</h3>
                    <p>AI models understand the world through "entities"—people, places, organizations, and concepts. The more your brand is connected to relevant entities across the web, the more likely AI will recognize your authority.</p>
                    <p>This means:</p>
                    <ul>
                        <li>Consistent NAP (Name, Address, Phone) across directories</li>
                        <li>Mentions in industry publications</li>
                        <li>Wikipedia-style factual presence</li>
                        <li>Social proof and reviews</li>
                    </ul>

                    <hr className="my-12 border-white/10" />

                    <h2>The Bottom Line</h2>
                    <p>GEO is about becoming the most "citable" brand in your niche. If an AI can't summarize your expertise, it won't recommend you.</p>
                    <p>The businesses that adapt now will dominate the next decade of search. Those who wait will wonder why their traffic disappeared.</p>

                    <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-8 mt-12 not-prose">
                        <h3 className="text-2xl font-bold mb-4 text-white">What You Can Do Today</h3>
                        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                            <li><strong className="text-white">Audit your content</strong> - Does it contain specific, citable facts? Or is it generic fluff?</li>
                            <li><strong className="text-white">Add Schema markup</strong> - Start with FAQ and Article schemas</li>
                            <li><strong className="text-white">Build your entity</strong> - Ensure your business is consistently mentioned across authoritative sources</li>
                            <li><strong className="text-white">Think like an AI</strong> - When writing, ask yourself: "Would an AI confidently cite this as the answer?"</li>
                        </ol>
                        <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-lg font-medium text-white mb-4">Ready to make your business the answer AI recommends?</p>
                            <Link href="/audit" className="inline-block bg-primary hover:bg-primary-hover text-black font-bold px-8 py-3 rounded-lg transition-colors">
                                Book a free AI Visibility Audit
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
