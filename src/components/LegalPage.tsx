import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/** Highlighted box marking text that still needs to be written. Remove each one as it is filled in. */
export function Placeholder({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-4 rounded-lg border-2 border-dashed border-yellow-500/60 bg-yellow-500/10 p-4 text-sm text-yellow-200">
            <strong className="block mb-1">[PLACEHOLDER — to be written]</strong>
            {children}
        </div>
    );
}

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-[#070b14] text-white">
            <Navbar />
            <article className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <Placeholder>Last updated: [DATE]</Placeholder>
                <div className="space-y-10 text-gray-300 leading-relaxed">{children}</div>
            </article>
            <Footer />
        </main>
    );
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{heading}</h2>
            {children}
        </section>
    );
}
