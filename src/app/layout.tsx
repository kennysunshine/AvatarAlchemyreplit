import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_DESCRIPTION, businessSchema } from "@/lib/site";
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
        <html lang="en">
            <body
                className={`${inter.variable} ${plusJakarta.variable} antialiased bg-[#0b0b0b] text-[#f2f2f2]`}
            >
                {/* Business details for search engines, rendered into the HTML so AI crawlers can read it */}
                <JsonLd data={businessSchema} />
                {children}
            </body>
        </html>
    );
}
