"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { href: "https://avatar-alchemy.com/#problem", label: "The Problem" },
        { href: "https://avatar-alchemy.com/#solutions", label: "Solutions" },
        { href: "https://avatar-alchemy.com/#pricing", label: "Pricing" },
        { href: "https://avatar-alchemy.com/#contact", label: "Contact" },
        { href: "https://avatar-alchemy.com/#blog", label: "Blog" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050609]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-3">
                    <img src="/brand-logo.png" alt="Avatar Alchemy AI Logo" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex flex-col leading-tight">
                        <span className="font-bold text-lg tracking-tight">Avatar Alchemy AI</span>
                        <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">Get Found. Get Seen. Scale.</span>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    ))}
                    <a href="https://audit.avatar-alchemy.com" className="hover:text-white transition-colors">Free Visibility Audit</a>
                </div>

                {/* CTA & Toggle */}
                <div className="flex items-center gap-4">
                    <a
                        href="/book"
                        className="hidden sm:block bg-primary hover:bg-primary-hover text-black font-semibold text-sm px-6 py-2.5 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)]"
                    >
                        Book Premium Audit
                    </a>
                    
                    {/* Hamburger Button */}
                    <button 
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-[#0F1115] border-b border-white/5 py-8 px-6 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col gap-6 text-center">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-medium text-gray-300 hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a 
                            href="https://audit.avatar-alchemy.com" 
                            className="text-xl font-medium text-gray-300 hover:text-primary transition-colors"
                        >
                            Free Visibility Audit
                        </a>
                        <Link 
                            href="/book" 
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-4 bg-primary text-black font-bold py-4 rounded-xl"
                        >
                            Book Premium Audit
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
