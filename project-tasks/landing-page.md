# Nash Landing Page Implementation

## User Story 1: Global Theme & Assets Integration
As a user visiting the landing page, I want to see the exact "Obsidian Precision" theme (colors, typography, geometry) so that the CTO persona is accurately reflected.

- [x] Microtask 1.1: Update `tailwind.config.ts` to map System Dark (`#0a0d12`) base, Surface (`#111620`), and Emerald Phosphor (`#10b981`) primary accents.
- [x] Microtask 1.2: Update `tailwind.config.ts` for typography (*Geist* for sans/body, *JetBrains Mono* for mono/code/tags).
- [x] Microtask 1.3: Update `tailwind.config.ts` for geometry (4px border radius, 1px structural hairlines `#1f2937`).
- [x] Microtask 1.4: Import and apply global CSS variables and font face definitions in the Nuxt app (via `app.vue` or global CSS).

## User Story 2: Responsive Layout Scaffold
As a user on any device, I want the layout to adhere to a 12-column engineering grid with 8pt spacing rhythm, ensuring a structured and readable experience.

- [x] Microtask 2.1: Scaffold the main App layout structure in `app.vue` / layouts.
- [x] Microtask 2.2: Implement 12-column grid utility classes or containers for responsive viewports (mobile, tablet, desktop).

## User Story 3: Landing Page Components Implementation
As a prospective client, I want to see technical metrics, architecture diagrams, and service offerings laid out sharply and cleanly.

- [x] Microtask 3.1: Build the Hero Section with the CTO persona headline, primary CTA, and structural hairlines.
- [x] Microtask 3.2: Build the Architecture / Dataflow Diagram section (using Archify SVGs or placeholder boxes per the design).
- [x] Microtask 3.3: Build the Metric Cards section with strict 4px corners and JetBrains Mono data points.
- [x] Microtask 3.4: Assemble components into the `app.vue` or index page to complete the landing page.
