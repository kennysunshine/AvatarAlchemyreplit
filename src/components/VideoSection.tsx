"use client";
import { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';

export function VideoSection() {
    const playlist = [
        {
            active: true,
            title: "The AI Marketing Shift",
            duration: "0:28",
            desc: "Why the battle has moved from Google to the AI Knowledge Graph",
            src: "https://avatar-alchemyai.replit.app/assets/The_AI_Marketing_Shift_1769365011400-Dcy-2D59.mp4"
        },
        {
            active: false,
            title: "SEO vs GEO",
            duration: "1:15",
            desc: "Understanding Generative Engine Optimization",
            src: "/videos/seo-vs-geo.mp4"
        },
        {
            active: false,
            title: "Your Opportunity",
            duration: "0:45",
            desc: "How to claim your share of voice before it's too late",
            src: "https://avatar-alchemyai.replit.app/assets/AI_Audit_Opportunity_1769365011398-B1juu1LY.mp4"
        }
    ];

    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="py-24 px-6 bg-[#050609]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-medium mb-6">
                        <Sparkles className="w-3 h-3" />
                        Digital Twin Demo
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Meet Tom, Your AI Guide</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        See our Digital Twin technology in action. Tom explains how AI is changing marketing and why your business needs to adapt now.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Video Player (Spans 2 cols) */}
                    <div className="lg:col-span-2 bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video">
                        <video
                            key={playlist[activeIdx].src}
                            controls
                            className="w-full h-full object-cover"
                        >
                            <source src={playlist[activeIdx].src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Playlist (Spans 1 col) */}
                    <div className="space-y-4">
                        {playlist.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveIdx(idx)}
                                className={`p-4 rounded-xl border transition-all cursor-pointer ${idx === activeIdx
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 border-transparent text-white'
                                    : 'bg-[#0F1115] border-white/5 hover:border-white/10 text-gray-400 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${idx === activeIdx ? 'bg-white/20' : 'bg-white/5'
                                        }`}>
                                        <Play className={`w-4 h-4 ${idx === activeIdx ? 'fill-white' : 'fill-gray-500'}`} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                        <p className={`text-xs ${idx === activeIdx ? 'text-white/80' : 'text-gray-500'}`}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="pt-6 text-center border-t border-white/5 mt-6">
                            <p className="text-sm text-gray-400 mb-2">Want your own Digital Twin like Tom?</p>
                            <a href="#contact" className="text-secondary hover:text-secondary-hover font-bold text-sm flex items-center justify-center gap-1 group">
                                Book a consultation
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
