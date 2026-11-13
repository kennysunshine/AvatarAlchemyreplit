"use client";
import { useState } from "react";

// Web3Forms passes messages on to kenny.swann@avatar-alchemy.com.
// This access key is designed to be public (it can only send to that inbox), so it is safe in the page code.
const WEB3FORMS_ACCESS_KEY = "b6a4bf32-87ba-46e9-9b2f-7495ae8a4c38";

type Status = "idle" | "sending" | "sent" | "error";

const field =
    "w-full bg-[#070b14] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors";
const label = "block text-xs font-bold text-gray-400 uppercase mb-2";

export function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        if (data.get("botcheck")) return; // hidden spam trap: only bots fill it in
        data.append("access_key", WEB3FORMS_ACCESS_KEY);
        data.append("subject", `New website enquiry from ${data.get("name") || "a visitor"}`);
        data.append("from_name", "Avatar Alchemy website");
        setStatus("sending");
        try {
            const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
            const json = await res.json().catch(() => ({}));
            if (res.ok && json.success !== false) {
                setStatus("sent");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    if (status === "sent") {
        return (
            <div role="status" className="text-center py-12">
                <p className="text-2xl font-bold mb-3">Thanks, your message has been sent.</p>
                <p className="text-gray-400 mb-8">We&apos;ll get back to you as soon as we can.</p>
                <button onClick={() => setStatus("idle")} className="text-primary font-semibold hover:underline">
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div>
                <label htmlFor="cf-name" className={label}>Full Name</label>
                <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="John Doe" className={field} />
            </div>
            <div>
                <label htmlFor="cf-email" className={label}>Email Address</label>
                <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="john@example.com" className={field} />
            </div>
            <div>
                <label htmlFor="cf-phone" className={label}>Phone Number</label>
                <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+44 7XXX XXXXXX" className={field} />
            </div>
            <div>
                <label htmlFor="cf-message" className={label}>Message</label>
                <textarea id="cf-message" name="message" required placeholder="Tell us about your business..." rows={4} className={field}></textarea>
            </div>
            {status === "error" && (
                <p role="alert" className="text-sm text-red-400">
                    Sorry, your message couldn&apos;t be sent. Please try again, or email{" "}
                    <a href="mailto:kenny.swann@avatar-alchemy.com" className="underline">kenny.swann@avatar-alchemy.com</a>.
                </p>
            )}
            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-all"
            >
                {status === "sending" ? "Sending…" : "Send Message"}
            </button>
        </form>
    );
}
