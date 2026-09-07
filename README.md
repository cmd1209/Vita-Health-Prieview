# Vita Health preview

A small React + CSS kitchen-sink for checking the design in a browser before rebuilding it in WordPress.

Run `npm install`, then `npm run dev` and open http://localhost:3000.

- `app/page.tsx`: button examples.
- `app/globals.css`: CSS imports, reset, and preview layout.
- `components/Button.tsx`: native button props plus `variant` and optional decorative `icon`.
- `styles/tokens.css`: existing Vita token values and clearly marked preview layout values.
- `styles/button.css`: button geometry and default, hover, active, focus, and disabled styles.
- `app/layout.tsx`: required Next.js document wrapper.

The default variant is `primary`; alternatives are `secondary` and `highlight`. Use the native `disabled` prop. Buttons default to `type="button"`; pass `type="submit"` when needed. Event handlers can be passed from a React client component.

The existing DM Sans and DM Serif Display font-family tokens are preserved. No font files were supplied, so browsers use the declared fallback unless those fonts are installed. The arrow in the preview is a placeholder icon, not a Figma asset.

Only the preview layout uses the `--preview-*` tokens. No speculative breakpoints or additional component variants are included. For WordPress, reuse the CSS files and the same button classes on native HTML buttons.

Checks: `npm run lint`, `npx tsc --noEmit`, and `npm run build`.
