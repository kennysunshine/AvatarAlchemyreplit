import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { ProblemSection } from "@/components/ProblemSection";
import { Solutions } from "@/components/Solutions";
import { VideoSection } from "@/components/VideoSection";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
            <Navbar />
            <Hero />
            <TrustedBy />
            <ProblemSection />
            <Solutions />
            <Pricing />
            <VideoSection />
            <Portfolio />
            <FAQ />
            <Contact />
            <Blog />
            <Footer />
        </main>
    );
}
