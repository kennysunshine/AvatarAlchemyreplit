"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuditRedirect() {
    const router = useRouter();

    useEffect(() => {
        window.location.href = "https://audit.avatar-alchemy.com";
    }, []);

    return (
        <div className="min-h-screen bg-[#050609] text-white flex flex-col items-center justify-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-xl text-gray-400">Redirecting to Audit App...</p>
        </div>
    );
}
