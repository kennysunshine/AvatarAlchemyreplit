import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { TwoStepPath } from "@/components/TwoStepPath";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: { absolute: "Avatar Alchemy | Get found on Google and in AI search" },
    alternates: { canonical: "/" },
};

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
            <Navbar />
            <Hero />
            <TrustedBy />
            <TwoStepPath />
            <Portfolio />
            <About />
            <FAQ />
            <Contact />
            <Blog />
            <Footer />
        </main>
    );
}
