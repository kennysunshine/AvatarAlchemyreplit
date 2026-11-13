'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from 'react';

export default function BookPage() {
    useEffect(() => {
        // Load Calendly script
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <main className="min-h-screen bg-[#070b14]">
            <Navbar />
            <div className="pt-32 px-6 container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
                    Book a free <span className="text-blue-500">AI visibility check</span>
                </h1>
                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                    In 30 minutes, I&apos;ll show you what ChatGPT and Gemini currently say about your business, and what would help them find and trust you. No obligation.
                </p>

                {/* Calendly Inline Widget */}
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/kennysunshine-sun/30min"
                    style={{ minWidth: '320px', height: '700px' }}
                />
            </div>
            <Footer />
        </main>
    );
}
