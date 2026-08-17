# Homepage redesign — integration guide

## 1. Install GSAP (if not already a dependency)
```bash
npm install gsap
```

## 2. Fonts
In your root `app/layout.tsx`, replace your current font setup with:

```tsx
import { Fraunces, Manrope } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

// on <body>:
<body className={`${fraunces.variable} ${manrope.variable} font-sans`}>
```

In `tailwind.config.ts`, extend the font families:
```ts
fontFamily: {
  sans: ["var(--font-sans)", "sans-serif"],
  serif: ["var(--font-serif)", "serif"],
},
```

## 3. Color tokens
Copy the variables from `styles/tokens.css` into your existing `app/globals.css`,
inside `:root`, replacing whatever color variables are there now. These are in
the `H S% L%` format your existing classes (`bg-primary/10`, `border-primary/50`)
already expect.

## 4. Drop in the components
Copy this folder structure into your project, overwriting the matching files:
```
components/home/hero-section.tsx        (replaces existing)
components/home/services-preview.tsx    (replaces existing)
components/home/about-preview.tsx       (replaces existing)
components/home/why-choose-us.tsx       (replaces existing)
components/home/testimonials.tsx        (replaces existing)
components/home/trust-stats.tsx         (new)
components/home/portfolio-showcase.tsx  (new)
components/home/process-timeline.tsx    (new)
components/home/cta-banner.tsx          (new)
components/ui/joinery-mark.tsx          (new)
components/ui/animated-counter.tsx      (new)
hooks/use-magnetic.ts                   (new)
app/page.tsx                            (replaces existing — the contact
                                          CTA section previously inline in
                                          page.tsx is now cta-banner.tsx)
```

## 5. Images
Every new/updated component currently points at your existing
`/images/53.webp` as a placeholder so you can review layout immediately.
Before launch, swap in:
- A strong hero image or short video loop of hands-on work (`hero-section.tsx`)
- Distinct images per service card (`services-preview.tsx`)
- Real project photography for the portfolio grid (`portfolio-showcase.tsx`)
  — 8+ images across the four categories used (Kitchens, Wardrobes, Decking &
  Staircases, Tiling & Finishes) will fill the masonry grid properly.

## 6. Numbers to confirm
The hero and About section previously disagreed on years of experience
(10+ vs 8+). Every new component uses **10+ years** — let me know if that's
wrong and I'll correct it everywhere in one pass.

## 7. Not included
Your footer wasn't part of the files you shared, so it hasn't been touched.
If you'd like it redesigned to match (multi-column, newsletter signup, map),
send me the current footer component and I'll do a matching pass.
