# Changelog

## 2026-11-08 — branch `service-pages` (live)

### Added
- A page for each service, plus a `/services` overview:
  - `/services/ai-search-visibility`: Google & AI Search Visibility (combined, as Kenny asked)
  - `/services/website-design`: Website Design
  - `/services/digital-twins`: Digital Twins & AI Video Avatars (includes the Tom demo videos)
  - `/services/video-repurposing`: Video Repurposing (Content Lab)
- Each page has: who it's for, the problem, how we solve it, what's included, how it works, pricing, example work, related FAQs, further reading, booking buttons, and Service schema for search engines and AI tools.
- All four pages are written from Kenny's notes (`docs/service-page-notes.md`) plus text already on the site. No placeholders remain. All content is in `src/lib/services.ts`.
- The pages are no longer drafts, so they can be found by search engines and are listed in the sitemap.
- Website Design example: Avalon Tree Services, with their logo and a link to avalontreeservices.co.uk.
- Examples still to come (those sections are hidden until then): Kenny's own Digital Twin, and the Brighton Aquarium documentary for Video Repurposing.
- Video Repurposing "What's included" now covers every vertical platform (TikTok, Instagram Reels, Facebook Reels, YouTube Shorts) and long-form and documentary-style video.

- LinkedIn company page address updated to linkedin.com/company/avataralchemy (Kenny changed it from `avataralchemyai`), in the footer button and the business details.

### Changed
- Top menu and footer: "Solutions" replaced by "Services", which goes to `/services`.
- Homepage pillars (Get Found / Get Seen / Scale) each have a "Learn more" link to their service page.
- FAQ answers moved to `src/lib/faqs.ts` so service pages can reuse them.
- Digital Twin "Book a consultation" link now works from any page (`/#contact`).

## 2026-11-08 — branch `logo-update` (live)

### Changed
- New Avatar Alchemy logo, from Kenny's hexagon-dome logo with "AI" removed from the name, the name re-centred and a small corner watermark removed. The dome and name are white on navy (#1E3A8A), the colour Kenny chose.
  - `public/brand-logo.png`: white dome on a blue circle, used in the website's top bar (replaces the old brain-circuit icon).
  - `public/brand-logo-full.png`: dome plus "AVATAR ALCHEMY" on a blue square, used for link previews and the business details Google reads, and for the Google Business Profile logo.
- Footer social buttons now go to the business pages: Facebook (https://www.facebook.com/profile.php?id=61551733191534) and the LinkedIn company page (https://www.linkedin.com/company/avataralchemyai/). They previously went to Kenny's personal profiles. The X (Twitter) button was removed because it linked to a personal account.
- Business details: `sameAs` now lists the business Facebook and LinkedIn pages. It previously had an incorrect LinkedIn address (`avatar-alchemy-ai`). Opening hours are now Mon–Sat 9–5, matching the Google Business Profile.
- The source image was 200×200 px, so it has been enlarged; edges are slightly soft at large sizes.

## 2026-11-08 — branch `visibility-fixes` (live)

### Fixed
- Business details for search engines (schema.org LocalBusiness) are now written into the page HTML. Before, they were only added by JavaScript, so AI crawlers that don't run JavaScript couldn't see them.
- Each blog post now has its own page title and description, taken from the post's own text. All three previously showed only "Avatar Alchemy" and the homepage description.

### Added
- FAQ answers (DRAFT, written by Claude from general knowledge, for Kenny to review before going live). Questions now open and close when tapped, and the answers are in the page HTML with FAQPage schema so search engines and AI tools can read them.
- `/sitemap.xml`, listing the homepage, booking page and the three blog posts. Privacy and Terms are left out while they are placeholders.
- `/robots.txt`, allowing all search engines and AI crawlers and pointing them to the sitemap.
- Article details (BlogPosting schema) on each blog post: headline, description, publish date, category, publisher.
- Canonical addresses for the homepage and blog posts, plus Open Graph details used for link previews.

### Removed
- Virgin Media logo from the client logo strip (logo file deleted too).

### Added (logos)
- Avalon Tree Services logo in the client logo strip, in the place Virgin Media had (`public/logos/avalon-tree-services.png`). Made from Kenny's navy-lettering version: background made transparent, lettering turned white, and the green matched to his dark-background version, so it suits the dark site.

### Changed
- Business reach is now worldwide. Meta description: "Websites, Google visibility and AI search for local businesses worldwide, from a base in the South West of the UK." The business details now list the area served as "Worldwide" (still based in Somerset, with no town or street address).
- Removed the "SEO is dead" contradiction. The Problem card "Traditional SEO is Dead" is now "Traditional SEO Isn't Enough", with wording saying SEO still matters alongside AI. The AI Visibility pillar's "Traditional SEO is dying…" now reads "Traditional SEO alone is no longer enough…". This matches the FAQ answer.
- FAQ: first question no longer says "local", and the video repurposing answer now says each project starts with a conversation about the client's goals and content.
- Homepage Get Found / Get Seen / Scale row: on phones the headings now line up at the bottom, and the third heading now reads "Scale Up" (was "Scale"), so all three fill two lines on phones and the taglines align. The navbar tagline "Get Found. Get Seen. Scale." is unchanged.
- "Based in Glastonbury." removed from the meta description at Kenny's request.
- Business details: location is now Somerset only, with no street address or town (was London), and Somerset is listed as the area served, and the description matches the meta description (was "AI-Powered Branding Audit, Digital Twins, and Next-Gen SEO Marketing"). The business address now uses www.avatar-alchemy.com, matching Vercel's main domain.
- Business details are kept in one place (`src/lib/site.ts`). Phone number updated to 07856 430336 (was 07476 711611), email to kenny.swann@avatar-alchemy.com (was info@avatar-alchemy.com), and Kenny confirmed Mon–Fri 9–5 hours. The "$$$" price range label was removed so it doesn't put people off; prices are on the pricing section.

## 2026-11-08 — branch `site-fixes-2026-11` (live)

### Added
- `/privacy` and `/terms` pages with clearly marked `[PLACEHOLDER — to be written]` sections (shared layout in `src/components/LegalPage.tsx`). Both are set to `noindex` until the placeholders are filled in.

### Changed
- Meta description is now "Websites, Google visibility and AI search for Somerset businesses. Based in Glastonbury." (was "AI-Powered Branding Audit").
- Business name is now "Avatar Alchemy" everywhere (was "Avatar Alchemy AI"): navbar, logo alt text, footer, copyright line and the business details read by search engines (structured data).
- Contact email is now kenny.swann@avatar-alchemy.com (was kennysunshine.sun@gmail.com) in the Contact section and footer. The footer email is now a clickable link.
- Pricing comparison table: the column headers now use the tier names (Entity Signal Protocol / Authority Vector System / Omnipresence Ecosystem) instead of "Protocol 1/2/3".

### Fixed
- Footer "Privacy Policy" and "Terms of Service" links now go to `/privacy` and `/terms`. They previously pointed to "#".
- Footer quick links (The Problem, Solutions, Pricing, Contact, Blog) now go to the homepage sections from every page. On the blog and booking pages they previously went nowhere.
- Pricing comparison table: the tick and dash icons now have text equivalents ("Included" / "Not included"), so screen readers and crawlers no longer see empty cells.
- Client logos: the carousel's second copy (needed for the seamless scroll) is now hidden from screen readers and crawlers, so each logo is listed once.
- Digital Twin video: the fallback text "Your browser does not support the video tag." has been replaced by a link with the video's title, and the video now has a descriptive label. The video itself already played correctly.
