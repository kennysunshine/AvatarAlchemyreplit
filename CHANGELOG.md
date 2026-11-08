# Changelog

## [Unreleased] — branch `visibility-fixes`

### Fixed
- Business details for search engines (schema.org LocalBusiness) are now written into the page HTML. Before, they were only added by JavaScript, so AI crawlers that don't run JavaScript couldn't see them.
- Each blog post now has its own page title and description, taken from the post's own text. All three previously showed only "Avatar Alchemy" and the homepage description.

### Added
- `/sitemap.xml`, listing the homepage, booking page and the three blog posts. Privacy and Terms are left out while they are placeholders.
- `/robots.txt`, allowing all search engines and AI crawlers and pointing them to the sitemap.
- Article details (BlogPosting schema) on each blog post: headline, description, publish date, category, publisher.
- Canonical addresses for the homepage and blog posts, plus Open Graph details used for link previews.

### Changed
- Meta description shortened to "Websites, Google visibility and AI search for Somerset businesses." ("Based in Glastonbury." removed at Kenny's request).
- Business details: location is now Somerset only, with no street address or town (was London), and Somerset is listed as the area served, and the description matches the meta description (was "AI-Powered Branding Audit, Digital Twins, and Next-Gen SEO Marketing"). The business address now uses www.avatar-alchemy.com, matching Vercel's main domain.
- Business details are kept in one place (`src/lib/site.ts`). Phone number updated to 07856 430336 (was 07476 711611). Still to confirm with Kenny: email, opening hours, price range.

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
