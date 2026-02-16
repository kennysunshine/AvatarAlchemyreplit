'use client';

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const AuditSearchBar = () => {
    const router = useRouter();
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            // Redirect to external Audit App
            window.location.href = `https://audit.avatar-alchemy.com/audit?address=${encodeURIComponent(query)}`;
        }
    };

    return (
        <form onSubmit={handleSearch} className="w-full max-w-xl relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9333ea] to-[#2beeee] rounded-lg opacity-30 group-hover:opacity-75 transition duration-500 blur"></div>
            <div className="relative flex items-center bg-[#0d0f12] rounded-lg border border-gray-800 p-2">
                <Search className="w-5 h-5 text-gray-500 ml-3" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter your website URL..."
                    className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-gray-600 px-4 py-2 outline-none"
                    autoFocus
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-[#9333ea] to-[#0891b2] text-white px-6 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
                >
                    Run Audit
                </button>
            </div>
        </form>
    );
};
