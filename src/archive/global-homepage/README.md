# Archived: full global homepage

Before the viewport-height studio landing (July 2026), `bloodlinetattoo.com` used the **same full homepage** as Bangkok / Bali / Phuket:

- Hero + trust proof
- Authority
- Tattoo styles
- Standards + session path
- Testimonials carousel
- Closing CTA

## Snapshot

`previous-page.tsx` is a copy of `src/app/page.tsx` as it was before the global landing split.

## Restore (bring the full main site back)

1. In `src/app/page.tsx`, remove the `region === "global"` branch that renders `GlobalStudioLandingSection`.
2. Always render `StudioHomepage` for every region (including global), as in `previous-page.tsx`.
3. In `src/lib/tattoo-style-navigation.ts`, restore full nav for global (remove the slim global nav list).
4. In `src/components/layout/site-header.tsx`, pass the booking CTA for global again.
5. In `src/components/layout/site-footer.tsx`, remove the early `return null` for global.

Regional studios are unaffected either way — they already use `StudioHomepage`.
