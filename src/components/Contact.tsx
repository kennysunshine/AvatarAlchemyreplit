import { Mail, MessageSquare, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { CTA_HREF, CTA_LABEL } from "@/components/shared/site-links";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-[#070b14]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
                    <p className="text-gray-400">Book a free AI visibility check and I&apos;ll show you what ChatGPT and Gemini currently say about your business.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Form */}
                    <div className="bg-[#0d1527] p-8 rounded-3xl border border-white/5">
                        <ContactForm />
                    </div>

                    {/* Quick Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-[#0d1527] p-6 rounded-2xl border border-white/5 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Email Us</h3>
                                <p className="text-xs text-gray-500 mb-2">Send us an email anytime</p>
                                <a href="mailto:kenny.swann@avatar-alchemy.com" className="text-primary text-sm font-medium hover:underline">kenny.swann@avatar-alchemy.com</a>
                            </div>
                        </div>

                        <div className="bg-[#0d1527] p-6 rounded-2xl border border-white/5 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Quick Response</h3>
                                <p className="text-xs text-gray-500">We typically respond within 24 hours during business days</p>
                            </div>
                        </div>

                        <div className="bg-[#0d1527] p-6 rounded-2xl border border-white/5 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary flex-shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">{CTA_LABEL}</h3>
                                <p className="text-xs text-gray-500 mb-2">Get an expert assessment of your AI search visibility</p>
                                <a href={CTA_HREF} className="text-secondary text-sm font-medium hover:underline flex items-center gap-1">
                                    Pick a time →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
