# Portfolio UI Redesign Plan

## Objective
Transform the current portfolio from a traditional card-based project showcase into a premium, product-quality experience inspired by modern SaaS websites (Athreix, Linear, Vercel, Apple), while maintaining a clean monochrome design.

---

## Design Principles

- White background (#FFFFFF)
- Black & Grey typography only
- No colorful gradients
- No neon/glassmorphism
- Minimal shadows
- Clean spacing
- Motion over decoration
- Editorial layout
- Premium typography
- Every interaction should feel intentional

---

# Motion Language

Avoid flashy animations.

Use smooth, physics-based transitions (300–500ms).

Animations should include:

- Fade
- Slide
- Scale (very subtle)
- Border transitions
- Cursor interactions
- Shared element transitions
- Staggered entrances

Never use bouncing animations.

---

# Navigation

Improve navigation interactions.

Requirements:

- Smooth underline animation
- Active page indicator
- Hover transition
- Slight font-weight transition
- Sticky navigation
- Blur background while scrolling

---

# Filter Bar

Redesign category filters.

Requirements:

- Capsule pills
- Animated active state
- Smooth width interpolation
- Hover elevation
- Sliding indicator
- No bright colors

---

# Project Grid

Current layout feels repetitive.

Redesign using an editorial grid.

Example:

Large Featured Card
Small Card
Small Card

Small Card
Large Card

Mix widths and heights.

Avoid perfectly uniform rows.

---

# Project Card Design

Replace traditional cards with "System Panels".

Structure:

---------------------------------
SYSTEM 01

Project Preview

Project Name

Short Description

Tech Stack

OPEN CASE →
---------------------------------

Design Rules:

- Thin borders
- Rounded corners (12–16px)
- White background
- Very subtle shadow
- Large whitespace
- Minimal icons

---

# Card Hover

Hover should feel like lifting paper.

Sequence:

1. Card lifts 8px
2. Border darkens
3. Shadow increases
4. Image slowly zooms
5. Title moves upward
6. Description fades in
7. CTA slides
8. Mouse spotlight follows cursor

No scaling larger than 1.02.

---

# Outline Animation

Implement animated borders.

Requirements:

- Border sweep animation
- Traveling highlight
- Corner accent
- No glow
- No neon

Animation should only appear during hover.

---

# Project Preview Area

Replace static colored header.

Instead display one of:

- Animated workflow
- Terminal output
- AI graph
- Architecture diagram
- SVG line animation
- Command execution
- Network flow

Loop slowly.

---

# Typography

Hierarchy:

Project Title
48–64px

Subtitle
20px

Description
16px

Metadata
12–14px

Use generous spacing.

Avoid excessive font weights.

---

# Buttons

Replace generic buttons.

Current:

[ Details ]

New:

OPEN CASE →

Hover:

Arrow slides forward.

Button becomes outlined.

---

# Cursor Interaction

Inside project cards:

- Mouse spotlight
- Subtle parallax
- Content shifts slightly
- Image follows cursor by 4–8px

Very subtle.

---

# Background

Keep background minimal.

Optional additions:

- 1% opacity grid
- Very subtle noise
- Soft radial cursor light

Avoid gradients.

---

# Scroll Animations

Every section should animate once.

Sequence:

Fade

↓

Slide Up

↓

Stagger Children

↓

Reveal Images

↓

Activate Hover

Do not over-animate.

---

# Page Transition

When opening a project:

Card expands

↓

Image grows

↓

Content fades

↓

Details slide upward

↓

Back button appears

Use shared element transitions.

---

# Micro Interactions

Add polish throughout:

- Animated arrows
- Link underline animations
- Button ripple
- Smooth hover opacity
- Icon rotation
- Counter animations
- Lazy image reveal

---

# Performance

Animations must remain smooth.

Target:

- 60 FPS
- GPU accelerated transforms
- No layout thrashing
- Lazy loading
- Repaint boundaries where needed

---

# Overall Goal

The final experience should feel like an AI operating system showcase rather than a portfolio website.

Keywords:

- Professional
- Minimal
- Premium
- Editorial
- Architectural
- Product-first
- Motion-driven
- Monochrome
- Clean
- Modern