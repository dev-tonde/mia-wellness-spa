# Mia Wellness Spa Launch Readiness Checklist

Use this checklist on the live production site before launch and again before switching on ads.

Primary site:

- `https://miawellness.co.za`

Key public routes:

- `/`
- `/about`
- `/services`
- `/booking`
- `/faq`
- `/contact`

Recommended test setup:

- Test on the live domain, not only localhost or preview
- Use a real mobile device when possible
- Test at least once in a private/incognito window
- Record each item as `Pass`, `Fail`, or `Needs follow-up`

## 0. Preflight

- [ ] The live production domain resolves over HTTPS with no certificate warning.
- [ ] The current production deploy matches the latest approved build.
- [ ] The business phone and WhatsApp number are correct: `+27 65 847 3176`.
- [ ] The business is still launching as a mobile house-call service only, not a physical spa location.
- [ ] If live booking is expected at launch, the real Calendly URL has been configured and tested.
- [ ] If social profiles are still not approved, they remain intentionally unpublished rather than linked to fake URLs.

## 1. Core Path Checks

- [ ] Homepage loads cleanly at `/` with no obvious broken layout, console-facing crash, or blank section.
- [ ] The main navigation shows `Home`, `About`, `Services`, `Booking`, `FAQ`, and `Contact`.
- [ ] Every main navigation link goes to the correct page.
- [ ] Footer quick links go to the correct pages.
- [ ] The homepage primary CTA is visible quickly on mobile and desktop.

### Book Now entry points

- [ ] Header `Book Now` works.
- [ ] Mobile menu `Book Now` works.
- [ ] Homepage hero `Book Your Appointment` works.
- [ ] Homepage CTA sections that lead to booking work.
- [ ] Services page booking CTA works.
- [ ] Booking page primary CTA works.
- [ ] Booking page mobile sticky CTA works.
- [ ] Footer `Book Now` works.

### Booking flow checks

- [ ] The booking page loads cleanly and explains the service model truthfully.
- [ ] If Calendly is live, the external Calendly button opens the correct booking destination.
- [ ] If Calendly is live, the embedded calendar appears once the user reaches the section or explicitly loads it.
- [ ] If Calendly is not live, the booking page still shows a clear fallback and no blank or broken embed area.
- [ ] The booking page never leaves the visitor in a dead end.
- [ ] The booking thank-you route works if Calendly redirect is configured.

### Contact path checks

- [ ] WhatsApp links open the correct chat on mobile.
- [ ] Phone links open the correct dialer on mobile.
- [ ] Contact page gives working live options and does not show a fake web form.
- [ ] Contact CTAs remain clear on mobile and are not hidden behind the sticky bar.

### FAQ checks

- [ ] FAQ accordion opens and closes correctly by click/tap.
- [ ] FAQ accordion works by keyboard: `Tab`, `Enter`, `Space`, arrow keys if tested on desktop.

## 2. Device and Browser Checks

- [ ] Mobile Safari: homepage, booking page, FAQ, and contact page all work.
- [ ] Mobile Safari: sticky CTA, WhatsApp link, and phone link all work.
- [ ] Mobile Chrome: homepage, booking page, FAQ, and contact page all work.
- [ ] Mobile Chrome: sticky CTA, WhatsApp link, and phone link all work.
- [ ] Desktop Chrome: all public pages load, navigation works, booking path is clear, and no sections overlap.
- [ ] Desktop Safari, if available: all public pages load and no layout or interaction issues appear.
- [ ] No important button is clipped, overlapped, or pushed below an unusable fold on common mobile sizes.
- [ ] No sticky UI covers a required CTA or accordion content.

## 3. Content Truth Checks

- [ ] The site consistently describes Mia Wellness Spa as a `mobile` or `house-call` service.
- [ ] No page implies there is a public spa premises or walk-in location.
- [ ] Service-area wording stays aligned to `Fourways and surrounding areas` unless the business has approved more detail.
- [ ] No fake or guessed social URLs are live.
- [ ] No placeholder images are left unintentionally.
- [ ] If final photography is not ready, the reserved visual blocks are intentionally approved for launch.
- [ ] No placeholder testimonials are left unintentionally.
- [ ] If testimonials are still unapproved, the section clearly signals that real feedback is still pending.
- [ ] No fake pricing, fake hours, fake certifications, fake awards, or invented experience claims are visible.
- [ ] Phone, domain, and location match approved business information.

## 4. SEO and Share Checks

- [ ] Homepage title and description look correct in the browser tab and page source.
- [ ] About page title and description are correct.
- [ ] Services page title and description are correct.
- [ ] Booking page title and description are correct.
- [ ] FAQ page title and description are correct.
- [ ] Contact page title and description are correct.
- [ ] The favicon appears in desktop browser tabs.
- [ ] App icon / Apple touch icon appear correctly where supported.
- [ ] Homepage share preview looks sane in WhatsApp or a social debugger.
- [ ] The Open Graph image looks branded and not obviously placeholder-quality.
- [ ] `https://miawellness.co.za/robots.txt` is reachable.
- [ ] `https://miawellness.co.za/sitemap.xml` is reachable.
- [ ] Canonical URLs use `https://miawellness.co.za`.
- [ ] Public pages are indexable as intended.
- [ ] The booking thank-you page remains non-indexed as intended.

## 5. Performance Checks

- [ ] Homepage feels fast on a real mobile device.
- [ ] The homepage primary CTA is accessible quickly without waiting on third-party content.
- [ ] Booking page does not feel blocked before the booking section becomes interactive.
- [ ] The booking area reserves space and does not cause a jarring layout shift.
- [ ] The booking fallback remains usable if the embedded calendar does not appear.
- [ ] Mobile menu opens quickly and closes cleanly.
- [ ] FAQ interaction feels instant.
- [ ] If analytics is enabled, there is no obvious delay or broken console behavior after load.

## 6. Legal and Business Checks

- [ ] Confirm whether a privacy policy is required for this launch. If yes, the link is present and readable.
- [ ] Confirm whether a PAIA manual is required for this launch. If yes, the link is present and readable.
- [ ] Service-area wording matches the real business model and ad targeting.
- [ ] Travel-fee wording matches the approved business rule.
- [ ] Cancellation and reschedule wording matches the approved business rule.
- [ ] Ads, landing-page copy, and booking-page copy all agree on the same offer and service area.

## 7. Launch Blockers

Treat any of the following as a `no-go` until fixed or explicitly approved:

- [ ] Any `Book Now` CTA is broken, inconsistent, or points to the wrong booking path.
- [ ] WhatsApp or phone links fail on mobile.
- [ ] The site implies a physical spa location when the business is actually house-call only.
- [ ] Fake, guessed, or unapproved business data is visible.
- [ ] A required legal link is missing after the business has confirmed it must be present.
- [ ] The booking path feels broken, blank, or misleading.

## 8. QA Notes

Use this space for any findings, screenshots, or follow-ups:

```md
Date:
Reviewer:
Environment:

Passes:
- 

Fails:
- 

Needs follow-up:
- 
```
