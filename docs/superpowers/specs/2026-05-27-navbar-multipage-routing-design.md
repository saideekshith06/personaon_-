# Navbar Multi-Page Routing — Design

**Date:** 2026-05-27
**Status:** Approved (pending written-spec review)

## Problem

The site is a single long home page ([src/app/page.tsx](../../../src/app/page.tsx)) that stacks ~19 section components. The navbar's 5 links scroll to anchors on that page (e.g. `/#pricing`). We want each navbar button to navigate to a dedicated route instead of scrolling to an in-page section. The corresponding section is moved off the home page onto its new page.

## Decisions (from brainstorming)

- **Scope:** All 5 navbar buttons become dedicated pages.
- **Page depth:** Each new page contains only the single section the navbar currently targets — no grouping of related sections.
- **"Who it's for" mapping:** The navbar's "Who it's for" link currently resolves to the `ICPSections` component (`id="who-it-s-for"`, *"Built for people whose time is the product"*). That component moves to `/who-its-for`. The separately-named `WhoItsForSection` (`id="who-its-for"`, *"Infrastructure, not a utility"*) is a different section and **stays on the home page**.

## Architecture

Approach **A — Per-page composition**, mirroring the existing `/blog/<slug>` post pages: each route's `page.tsx` renders `<Navbar />`, the section, then `<Footer />`. Section components are reused unchanged. No shared layout or wrapper abstraction is introduced.

### New routes

| Route | New file | Section component moved off home |
|---|---|---|
| `/how-it-works` | `src/app/how-it-works/page.tsx` | `FeatureShowcase` |
| `/who-its-for` | `src/app/who-its-for/page.tsx` | `ICPSections` |
| `/pricing` | `src/app/pricing/page.tsx` | `PricingSection` |
| `/faq` | `src/app/faq/page.tsx` | `FAQSection` |
| `/blog` | `src/app/blog/page.tsx` | `BlogSection` |

`/blog` currently has only post sub-pages (`/blog/<slug>`) and no index; this adds the missing index. The `BlogSection` post cards keep linking to the existing `/blog/<slug>` pages, which are untouched.

### Page file shape (each new page)

```tsx
"use client";
import Navbar from "../components/Navbar";   // "../../components/Navbar" under /blog
import Footer from "../components/Footer";
import <Section> from "../components/<Section>";

export default function <Name>Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "var(--bg-light)" }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Section />
      </main>
      <Footer />
    </div>
  );
}
```

Note: `src/app/blog/page.tsx` imports from `../components/...` (one level up from `app/blog` is `app`, then `components`). The existing post pages under `app/blog/<slug>/` use `../../components/...`; the index page is one level shallower.

## Home page changes

[src/app/page.tsx](../../../src/app/page.tsx): remove the 5 imports and their JSX usages — `FeatureShowcase`, `ICPSections`, `PricingSection`, `FAQSection`, `BlogSection`. All other sections remain in their current order. Resulting home order:

`Hero → WhyNowSection → TelemetryDashboard → ICPInteractiveWorkflow → RelationshipIntelligenceSection → WhatPersonaOnUnderstands → CompoundingMemorySection → WhoItsForSection → SystemLearningSection → TrustSection → TeamsSection → RealVoiceSection → HabitMoatSection → ReachableSection`

(14 sections; Hero is now followed directly by WhyNowSection.)

## Navbar changes

[src/app/components/Navbar.tsx](../../../src/app/components/Navbar.tsx):

- Replace the anchor-generating `.map()` (currently `["How it works", ...].map(item => \`/#${slug}\`)`) in **both** the desktop `<nav>` and the mobile drawer with one explicit list:

```ts
const navItems = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Who it's for",  href: "/who-its-for" },
  { label: "Pricing",       href: "/pricing" },
  { label: "FAQ",           href: "/faq" },
  { label: "Blog",          href: "/blog" },
];
```



- Switch the link elements from `<a href>` to Next's `<Link href>` (`import Link from "next/link"`) for client-side navigation. Preserve all existing inline styles, `className`s, hover handlers, and the mobile `onClick={() => setMenuOpen(false)}`.
- Highlight the active route using `usePathname()` from `next/navigation`: when `pathname === item.href`, render the link in the active color (`var(--text-dark)`) instead of the muted color. Low-cost, expected multi-page behavior.
- The logo link to `/` and both CTA buttons (Log In / Sign Up, currently `href="#"`) are unchanged.

## Out of scope (YAGNI)

- No edits to section components' internals; they keep their `id` attributes (harmless on dedicated pages).
- No changes to existing `/blog/<slug>` post pages.
- No moving `WhoItsForSection` or any non-mapped section off the home page.
- No change to the "Read all perspectives" button behavior inside `BlogSection` (pre-existing; links to a single post).
- Not fixing the unrelated `npm run build` `/_global-error` prerender failure, the multiple-lockfiles warning, or the `.babelrc` warning. These are noted but separate from this work.

## Testing / verification

No automated test suite exists in the repo. Verification is manual against the running dev server (`npm run dev`, http://localhost:3000):

1. Each of `/how-it-works`, `/who-its-for`, `/pricing`, `/faq`, `/blog` loads and shows its section with Navbar + Footer.
2. Clicking each navbar link (desktop and mobile drawer) navigates to the route — no in-page scroll, no `/#anchor` URL.
3. The home page no longer renders the 5 moved sections, and still renders the remaining 14 in order.
4. The active navbar link is visually highlighted on its page.
5. `/blog` cards still navigate to the correct `/blog/<slug>` posts.
6. No new console errors; dev server compiles each route without error.
