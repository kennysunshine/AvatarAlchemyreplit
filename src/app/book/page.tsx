'use client';

import { Navbar } from "@/components/Navbar";
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
        <main className="min-h-screen bg-[#0B1120]">
            <Navbar />
            <div className="pt-32 px-6 container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
                    Book Your <span className="text-gradient-primary">AI Strategy Session</span>
                </h1>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    Secure your consultation to review your audit results and build your 30-day recovery roadmap.
                </p>

                {/* Calendly Inline Widget */}
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/kennysunshine-sun/30min"
                    style={{ minWidth: '320px', height: '700px' }}
                />
            </div>
        </main>
    );
}
