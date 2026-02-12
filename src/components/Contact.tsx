import { Mail, MessageSquare, Phone } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-[#050609]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Ready to Start Trending?</h2>
                    <p className="text-gray-400">Book a free AI Audit and discover how visible your business is to AI search engines.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Form */}
                    <div className="bg-[#0F1115] p-8 rounded-3xl border border-white/5">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-[#050609] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-[#050609] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Phone Number</label>
                                <input type="tel" placeholder="+44 7XXX XXXXXX" className="w-full bg-[#050609] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Message</label>
                                <textarea placeholder="Tell us about your business..." rows={4} className="w-full bg-[#050609] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-black font-bold py-4 rounded-lg transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Quick Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-[#0F1115] p-6 rounded-2xl border border-white/5 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Email Us</h3>
                                <p className="text-xs text-gray-500 mb-2">Send us an email anytime</p>
                                <a href="mailto:kennysunshine.sun@gmail.com" className="text-primary text-sm font-medium hover:underline">kennysunshine.sun@gmail.com</a>
                            </div>
                        </div>

                        <div className="bg-[#0F1115] p-6 rounded-2xl border border-white/5 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Quick Response</h3>
                                <p className="text-xs text-gray-500">We typically respond within 24 hours during business days</p>
                            </div>
                        </div>

                        <div className="bg-[#0F1115] p-6 rounded-2xl border border-white/5 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary flex-shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Book Premium Audit</h3>
                                <p className="text-xs text-gray-500 mb-2">Get an expert assessment of your AI search visibility</p>
                                <a href="#" className="text-secondary text-sm font-medium hover:underline flex items-center gap-1">
                                    Click to schedule →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
