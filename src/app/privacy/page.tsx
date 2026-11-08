import type { Metadata } from "next";
import { LegalPage, LegalSection, Placeholder } from "@/components/LegalPage";

// noindex until the placeholders are replaced with the real policy — remove `robots` then.
export const metadata: Metadata = {
    title: "Privacy Policy",
    robots: { index: false, follow: true },
};

export default function PrivacyPage() {
    return (
        <LegalPage title="Privacy Policy">
            <LegalSection heading="Who we are">
                <Placeholder>Business name (Avatar Alchemy), legal status, address, and who is responsible for personal data.</Placeholder>
            </LegalSection>
            <LegalSection heading="What information we collect">
                <Placeholder>e.g. contact form details, Free Visibility Audit inputs, booking details via Calendly, analytics/cookies.</Placeholder>
            </LegalSection>
            <LegalSection heading="How we use your information">
                <Placeholder>Purposes and lawful basis for each use.</Placeholder>
            </LegalSection>
            <LegalSection heading="Who we share it with">
                <Placeholder>Third-party services (e.g. hosting, booking, email) and why.</Placeholder>
            </LegalSection>
            <LegalSection heading="How long we keep it">
                <Placeholder>Retention periods.</Placeholder>
            </LegalSection>
            <LegalSection heading="Cookies">
                <Placeholder>Which cookies are used and how to control them.</Placeholder>
            </LegalSection>
            <LegalSection heading="Your rights">
                <Placeholder>Rights under UK GDPR (access, correction, deletion, etc.) and how to make a request, including the right to complain to the ICO.</Placeholder>
            </LegalSection>
            <LegalSection heading="Contact">
                <p>
                    Questions about this policy:{" "}
                    <a href="mailto:kenny.swann@avatar-alchemy.com" className="text-primary hover:underline">kenny.swann@avatar-alchemy.com</a>
                </p>
            </LegalSection>
        </LegalPage>
    );
}
