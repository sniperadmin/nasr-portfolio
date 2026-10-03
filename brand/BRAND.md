# Unagency Studio — Sovereign Brand Identity & Design System

> **Version**: 3.0.0 (The Autonomous Multi-Pod & Anti-Agency Architecture)  
> **Status**: Candidate Review & Client Voting Gate  
> **Entity**: Unagency Studio · Sovereign Autonomous Systems  
> **Governance**: `agency-agents-orchestrator` & Design Council  

---

## 1. Brand Core & Operating Reality

Unagency Studio is the **Anti-Agency for fast founders**. We build and deploy deterministic software systems, conversational commerce loops, and custom AI automations in fixed-time sprints (72-Hour Social Commerce, 5-Day Rapid MVP, and Dedicated Monthly Specialized Pods).

Unlike traditional agencies that trap founders in open-ended hourly contracts, endless status meetings, and developer churn, Unagency Studio operates an autonomous 132-agent workforce organized across 14 specialist pods inside isolated Cloudflare container sandboxes (`computerd:95119ec8`).

- **Aesthetic**: Obsidian glassmorphism, isometric architectural precision, code-bracket typography, and vibrant cybernetic telemetry (Cyber Cyan, Emerald Laser, and Solar Amber).
- **Tone of Voice**: Precise, engineering-grade, confident, de-slopped, zero-fluff.

---

## 2. The Three Candidate Logo Variations

The Design Council has developed three distinct, production-grade vector identity systems that directly reflect what our office actually executes:

### Variant 1: "The Autonomous Pod Mesh" (`variant-1-mesh-dark.svg`)
* **Core Metaphor**: *The Orchestrated Multi-Agent Node & Isometric Office*.
* **Visual Construction**:
  - A central isometric base nexus cube (representing the Executive Stage-Gate Orchestrator) connected via dashed telemetry data bridges to orbital specialist pods (Dev, Architecture, QA, Commerce).
  - The hexagonal geometric alignment mirrors our Three.js isometric 3D office viewport.
  - The interconnected towers form a structural uppercase "U" representing unified intelligence.
* **Palette**: Electric Cyan (`#38BDF8`), Deep Sapphire (`#1D4ED8`), and Emerald Telemetry Beacon (`#10B981`).
* **Best Suited For**: Showcasing enterprise multi-agent systems, complex orchestration, and institutional engineering rigor.

### Variant 2: "The Sovereign Stage-Gate Monogram `[un]`" (`variant-2-monogram-dark.svg`)
* **Core Metaphor**: *The Code-Native Anti-Agency & Dual-Pillar Review Gate*.
* **Visual Construction**:
  - Code brackets `[` and `]` framing two architectural pillars representing the mandatory Stage-Gate: Design Council on the left and Dev/Reality QA on the right.
  - A central luminous threshold and gateway star representing zero-meeting deterministic execution.
  - Razor-sharp, minimalist, highly scalable down to 16×16 favicon resolution without loss of clarity.
* **Palette**: Cyan Beacon (`#38BDF8`), Electric Royal Blue (`#3B82F6`), and Emerald Gate (`#10B981`).
* **Best Suited For**: Positioning directly as "The Anti-Agency", developer-first audiences, and SaaS/fintech founders.

### Variant 3: "The Kinetic Sprint Vector" (`variant-3-kinetic-dark.svg`)
* **Core Metaphor**: *High-Velocity Sprint Penetration & Deterministic Delivery*.
* **Visual Construction**:
  - Interlocking dynamic chevrons and forward-thrust speed arrows forming an inverted delta and continuous energy loop "U".
  - Golden acceleration thrusters symbolizing speed-to-revenue and rapid market entry (72-hour commerce sprint, 5-day rapid MVP).
  - High dynamic angle piercing through legacy agency bureaucracy.
* **Palette**: Cyber Cyan (`#38BDF8`), Electric Royal Blue (`#2563EB`), Emerald Speed Line (`#34D399`), and Solar Gold (`#F59E0B`).
* **Best Suited For**: Growth-stage startups, fast commerce launches, and velocity-obsessed founders.

---

## 3. Typographic Hierarchy & Lockups

All three variants utilize Google Fonts Inter with JetBrains Mono for system telemetry:

| Element | Specification | Case | Color (Dark) | Color (Light) |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Wordmark** | 44px / ExtraBold 900 / Tracking +1.5px | UPPERCASE | `#F8FAFC` | `#0F172A` |
| **Studio Tag** | 44px / Light 300 / Tracking +2px | UPPERCASE | `#38BDF8` / `#10B981` | `#0284C7` / `#059669` |
| **Domain Tagline** | 14px / JetBrains Mono 700 / Tracking +5px | UPPERCASE | `#10B981` / `#38BDF8` / `#F59E0B` | `#047857` / `#0284C7` / `#D97706` |
| **Telemetry Badges**| 11px / JetBrains Mono 600 / Rounded 4px | UPPERCASE | Cyan / Emerald / Amber | Contrast Muted |

---

## 4. Design Tokens (tokens.json)

```json
{
  "name": "Unagency Studio Design Tokens",
  "version": "3.0.0",
  "color": {
    "background": {
      "obsidian": { "value": "#0B0F19", "type": "color" },
      "surface": { "value": "#0F172A", "type": "color" },
      "elevated": { "value": "#1E293B", "type": "color" }
    },
    "brand": {
      "cyan": { "value": "#38BDF8", "type": "color" },
      "electricBlue": { "value": "#3B82F6", "type": "color" },
      "sapphire": { "value": "#1D4ED8", "type": "color" },
      "emerald": { "value": "#10B981", "type": "color" },
      "amber": { "value": "#F59E0B", "type": "color" }
    }
  }
}
```

---

## 5. Asset Manifest

| Variant | Dark Full SVG | Light Full SVG | Standalone Mark SVG |
| :--- | :--- | :--- | :--- |
| **Variant 1 (Pod Mesh)** | `variant-1-mesh-dark.svg` | `variant-1-mesh-light.svg` | `variant-1-mark.svg` |
| **Variant 2 (Monogram [un])** | `variant-2-monogram-dark.svg` | `variant-2-monogram-light.svg` | `variant-2-mark.svg` |
| **Variant 3 (Kinetic Vector)**| `variant-3-kinetic-dark.svg` | `variant-3-kinetic-light.svg` | `variant-3-mark.svg` |
| **Default Production** | `logo-full-dark.svg` | `logo-full-light.svg` | `logo-mark.svg` |
| **Monochrome Icons** | `icon-mono-white.svg` | `icon-mono-black.svg` | `favicon.ico` |
