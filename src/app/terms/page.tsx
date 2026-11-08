import type { Metadata } from "next";
import { LegalPage, LegalSection, Placeholder } from "@/components/LegalPage";

// noindex until the placeholders are replaced with the real terms — remove `robots` then.
export const metadata: Metadata = {
    title: "Terms of Service",
    robots: { index: false, follow: true },
};

export default function TermsPage() {
    return (
        <LegalPage title="Terms of Service">
            <LegalSection heading="About these terms">
                <Placeholder>Who the terms are between and when they apply.</Placeholder>
            </LegalSection>
            <LegalSection heading="Our services">
                <Placeholder>What is provided, and what is not.</Placeholder>
            </LegalSection>
            <LegalSection heading="Fees, payment and commitment periods">
                <Placeholder>Payment terms, minimum terms, rolling contracts.</Placeholder>
            </LegalSection>
            <LegalSection heading="Cancellation">
                <Placeholder>Notice periods and how to cancel.</Placeholder>
            </LegalSection>
            <LegalSection heading="Your responsibilities">
                <Placeholder>What the client needs to provide (access, content, approvals).</Placeholder>
            </LegalSection>
            <LegalSection heading="Intellectual property">
                <Placeholder>Ownership of content, videos, Digital Twins and other deliverables.</Placeholder>
            </LegalSection>
            <LegalSection heading="Liability">
                <Placeholder>Limits of liability; no guarantee of search or AI rankings (if applicable).</Placeholder>
            </LegalSection>
            <LegalSection heading="Governing law">
                <Placeholder>e.g. the laws of England and Wales.</Placeholder>
            </LegalSection>
            <LegalSection heading="Contact">
                <p>
                    Questions about these terms:{" "}
                    <a href="mailto:kenny.swann@avatar-alchemy.com" className="text-primary hover:underline">kenny.swann@avatar-alchemy.com</a>
                </p>
            </LegalSection>
        </LegalPage>
    );
}
