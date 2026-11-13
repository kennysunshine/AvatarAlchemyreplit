import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_DESCRIPTION, businessSchema } from "@/lib/site";
import "./globals.css";

// Same font as pseo.avatar-alchemy.com
const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: { default: "Avatar Alchemy", template: "%s | Avatar Alchemy" },
    description: SITE_DESCRIPTION,
    openGraph: {
        type: "website",
        siteName: "Avatar Alchemy",
        title: "Avatar Alchemy",
        description: SITE_DESCRIPTION,
        locale: "en_GB",
        images: ["/avatar-alchemy-logo.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-GB">
            <body
                className={`${geist.variable} antialiased bg-[#070b14] text-slate-300`}
            >
                {/* Business details for search engines, rendered into the HTML so AI crawlers can read it */}
                <JsonLd data={businessSchema} />
                {children}
            </body>
        </html>
    );
}
