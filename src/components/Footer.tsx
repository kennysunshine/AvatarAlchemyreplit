import { Facebook, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="pt-20 pb-10 border-t border-white/5 bg-[#050609] text-sm">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">

                {/* Brand */}
                <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <img src="https://avatar-alchemyai.replit.app/assets/Untitled%20design_1762908460861-C0keZlfZ.png" alt="Avatar Alchemy AI Logo" className="w-8 h-8 rounded-full object-cover" />
                        <span className="font-bold text-lg tracking-tight">Avatar Alchemy AI</span>
                    </div>
                    <p className="text-gray-400 max-w-sm leading-relaxed">
                        Get Found. Get Seen. Scale. We help local businesses dominate AI search engines and automate social media with Digital Twins.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold mb-6 text-white">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#problem" className="hover:text-primary transition-colors">The Problem</a></li>
                        <li><a href="#solutions" className="hover:text-primary transition-colors">Solutions</a></li>
                        <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                        <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                        <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h4 className="font-bold mb-6 text-white">Connect With Us</h4>
                    <p className="text-gray-400 mb-6">Follow us for AI marketing insights and updates</p>
                    <div className="flex gap-4 mb-6">
                        <a href="https://www.facebook.com/kenny.bountifulswann/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/kenny-swann-375117196/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://x.com/Edenpappa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                    <p className="text-gray-500">Email: kennysunshine.sun@gmail.com</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                <p>© 2026 Avatar Alchemy AI. All rights reserved.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
