import Link from 'next/link';

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050609]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-3">
                    <img src="https://avatar-alchemyai.replit.app/assets/Untitled%20design_1762908460861-C0keZlfZ.png" alt="Avatar Alchemy AI Logo" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex flex-col leading-tight">
                        <span className="font-bold text-lg tracking-tight">Avatar Alchemy AI</span>
                        <span className="text-[10px] text-gray-400 font-medium">Get Found. Get Seen. Scale.</span>
                    </div>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="#problem" className="hover:text-primary transition-colors">The Problem</Link>
                    <Link href="#solutions" className="hover:text-primary transition-colors">Solutions</Link>
                    <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                    <Link href="#blog" className="hover:text-primary transition-colors">Blog</Link>
                    <a href="https://audit.avatar-alchemy.com" className="hover:text-white transition-colors">Free Visibility Audit</a>
                </div>

                {/* CTA */}
                <a
                    href="https://audit.avatar-alchemy.com"
                    className="bg-primary hover:bg-primary-hover text-black font-semibold text-sm px-6 py-2.5 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)]"
                >
                    Book Premium Audit
                </a>
            </div>
        </nav>
    );
}
