import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
    title: "Avatar Alchemy",
    description: "AI-Powered Branding Audit",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${plusJakarta.variable} antialiased bg-[#0b0b0b] text-[#f2f2f2]`}
            >
                {/* JSON-LD Schema Markup */}
                <Script
                    id="organization-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Avatar Alchemy AI",
                            "url": "https://avatar-alchemy.com",
                            "telephone": "+447476711611",
                            "email": "info@avatar-alchemy.com",
                            "image": "https://avatar-alchemy.com/brand-logo.png",
                            "description": "AI-Powered Branding Audit, Digital Twins, and Next-Gen SEO Marketing.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "London",
                                "addressCountry": "UK"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/company/avatar-alchemy-ai"
                            ],
                            "priceRange": "$$$",
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday"
                                    ],
                                    "opens": "09:00",
                                    "closes": "17:00"
                                }
                            ]
                        })
                    }}
                />
                {children}
            </body>
        </html>
    );
}
