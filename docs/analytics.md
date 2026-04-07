# Analytics Notes

Mia Wellness Spa uses an optional, lightweight Plausible-based analytics layer for conversion intent only.

## Enablement

Analytics stays disabled unless `NEXT_PUBLIC_PLAUSIBLE_ENABLED=true` is set at build time.

Optional public environment variables:

- `NEXT_PUBLIC_PLAUSIBLE_ENABLED`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC`
- `NEXT_PUBLIC_PLAUSIBLE_API_HOST`

## What is tracked

Only high-value funnel events are instrumented:

- `booking_intent`
- `contact_intent`

Each event includes source metadata, and contact events also include the channel (`whatsapp` or `phone`).

## Tracked touchpoints

- Header `Book Now`
- Homepage hero `Book Your Appointment`
- Booking page primary CTA
- Calendly external booking buttons
- WhatsApp CTAs in key booking and contact flows
- Phone tap CTAs in key booking and contact flows

## Not tracked

- General page views
- Vanity navigation clicks
- Fake form submissions
- Internal interactions inside the embedded Calendly iframe, because it is cross-origin

Calendly intent is tracked through the explicit external booking buttons around the embed instead.
