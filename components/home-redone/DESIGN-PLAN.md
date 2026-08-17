# Kotsia's Projects — Homepage Redesign: Design Plan

## Subject
Kotsia's Projects is a real, currently-trading carpentry-led home improvement
contractor in Limpopo & Gauteng, South Africa — carpentry is the primary
trade, with tiling, painting, RhinoLite plastering, stormwater drainage and
welding as supporting services. Audience: homeowners and property managers
choosing who to trust inside their home. The page's one job: make a visitor
feel "these are craftsmen I can trust with my house" within the hero, and
convert that trust into a quote request.

## Token system

**Color** (kept exactly as specified in the brief — the brief's own palette wins):
- `--walnut: 19 27% 18%` (#3B2A22) — primary, dark grounding color
- `--oak: 30 34% 49%` (#A67C52) — secondary, warm mid-tone
- `--gold: 46 67% 47%` (#C9A227) — accent, used sparingly for emphasis only
- `--cream: 40 30% 96%` (#F8F6F2) — background
- `--charcoal: 0 0% 13%` (#222222) — text

I avoided the two AI-cliché defaults (cream+terracotta serif, or near-black+neon
accent) by keeping the accent low-saturation and gold rather than orange, and by
using the accent only as a 1–2px line/label color, never as a fill.

**Type**
- Display/heading: **Fraunces** (variable, optical sizing) — a serif with soft,
  slightly carved terminals that reads handcrafted rather than corporate-editorial.
  Set large, tight leading, occasional italic for emphasis words.
- Body/UI: **Manrope** — geometric-humanist sans, warm rather than cold, pairs
  quietly against Fraunces without fighting it.
- Utility/labels: Manrope, uppercase, wide tracking, small size — used for eyebrows.

**Layout concept**
```
[full-bleed cinematic hero, dark image, word-reveal headline, joinery-frame]
[thin gold rule — trust stats, counters, inline not boxed]
[services — asymmetric card grid, primary service (Carpentry) spans 2 cols]
[about — split, image right in a "joinery frame", signature corner brackets]
[why choose us — horizontal cards that elevate on hover]
[portfolio — filterable masonry, hover reveals project info, joinery corner marks]
[process — real 5-step sequence, animated connecting line (legitimate use of
  numbering because it's an actual ordered process)]
[testimonials — quote-led cards, not carousel-heavy, real client copy]
[CTA banner — dark, full-bleed, single decisive line]
```

**Signature element — "The Joint."**
Carpentry's defining visual is the joint: two pieces of wood meeting with
precision. The page's one recurring, deliberate motif is a thin gold
corner-bracket mark (an open dovetail corner, drawn in SVG) that frames the
hero image, the about image, and each portfolio tile — never decorative
elsewhere, never overused. It's the one thing this page will be remembered by,
and it's literally what the trade does: precise things meeting precisely.

Numbered steps are used only in the Process section, because that's an actual
five-step sequence the client walks through — not decoration.

## Self-critique
- Cut: a rotating hero video background (too heavy for a contractor site's real
  hosting/perf budget) → kept a single strong static image with parallax + dark
  overlay + grain-line accents instead.
- Cut: glassmorphism testimonial carousel from the brief's literal ask → replaced
  with quieter static quote cards, because glass-on-wood-tone reads cheap, and a
  carousel with 3 items adds motion without adding information.
- Kept: word-by-word hero reveal, magnetic CTAs, animated counters, portfolio
  hover-zoom, animated process line — these are the deliberate motion budget.
- Respected `prefers-reduced-motion` throughout; all GSAP entrances degrade to a
  simple fade.

## What you'll need to supply
- Real project photography for the portfolio grid (placeholders reference
  `/images/portfolio/*.webp` — swap in your own).
- Confirm the years-of-experience figure — the current site says "10+" in the
  hero and "8+" in the About copy. I standardized on **10+ years** across the
  new homepage; tell me if 8+ is the correct number and I'll fix it everywhere.
