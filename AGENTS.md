# AGENTS.md

## Project
Build a production-quality marketing website for Mia Wellness Spa, a mobile house-call massage and wellness business based in Fourways, Johannesburg.

## Product truth
- This is NOT a fixed-location spa.
- Mia Wellness Spa currently offers house-call / mobile massage services only.
- Primary positioning: professional massage and wellness treatments brought to the client’s home.
- Core conversion goal: get visitors to book appointments via Calendly.
- Secondary goal: establish trust, professionalism, calm, and premium convenience.

## Brand direction
- Tone: calm, elegant, premium, warm, trustworthy
- Avoid: loud, flashy, nightclub aesthetics, generic stock wellness clichés
- Design style: soft luxury, generous spacing, refined typography, subtle motion, clean cards, rounded corners
- Mobile-first and conversion-focused

## Known business information
- Business name: Mia Wellness Spa
- Domain: miawellness.co.za
- Based in: Fourways, Johannesburg
- Phone / WhatsApp: +27 65 847 3176
- Booking method: Calendly
- Images: not yet available, so use elegant placeholders or neutral visual blocks
- Social links: not yet available, so use obvious placeholder hrefs or config-driven placeholders

## Services
- Swedish Massage
- Sports Massage
- Deep Tissue Massage
- Reflexology
- Hot Stone Massage
- Cupping Massage

## Content rules
- Do not invent prices, testimonials, certifications, awards, years of experience, addresses, business hours, or exact social URLs.
- If data is missing, use placeholders with TODO comments.
- Keep all copy aligned with the approved website content for a mobile service.
- Do not write copy that implies customers visit a spa premises.

## Technical requirements
- Use Next.js App Router + TypeScript + Tailwind CSS
- Build reusable components
- Prioritize accessibility, responsiveness, and performance
- Use semantic HTML
- Add metadata for SEO
- Use config/constants for business info and links
- Calendly should be easy to swap/configure
- Prepare the site so images can be dropped in later with minimal refactor

## Expected pages
- Home
- About
- Services
- Booking
- FAQ
- Contact
- Optional 404 page

## Components expected
- Navbar
- Mobile menu
- Hero section
- Services preview/grid
- Why choose us
- How it works
- About preview
- FAQ accordion
- Contact section
- Footer
- Reusable CTA blocks

## Motion / interaction
- Keep animation subtle and tasteful
- Prefer light fade, reveal, hover elevation, and smooth transitions
- No heavy animation libraries unless clearly justified

## Done means
- npm run lint passes
- npm run build passes
- All pages are responsive
- No broken internal links
- No invented business data
- Calendly integration path exists
- Core SEO metadata is set
- Basic accessibility checks are satisfied

## Working style
- For large tasks, plan first before editing
- Make small, reviewable commits
- Explain tradeoffs briefly
- Prefer high-confidence changes over speculative changes
