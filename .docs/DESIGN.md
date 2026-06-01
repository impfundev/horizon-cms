---
name: Horizon CMS
colors:
  surface: '#f7fafd'
  surface-dim: '#d7dadd'
  surface-bright: '#f7fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f7'
  surface-container: '#ebeef1'
  surface-container-high: '#e5e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#181c1e'
  on-surface-variant: '#47464c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f4'
  outline: '#77767c'
  outline-variant: '#c8c5cc'
  surface-tint: '#5d5d6a'
  primary: '#000004'
  on-primary: '#ffffff'
  primary-container: '#1a1b26'
  on-primary-container: '#838391'
  inverse-primary: '#c6c5d4'
  secondary: '#5a5d73'
  on-secondary: '#ffffff'
  secondary-container: '#dee1fb'
  on-secondary-container: '#606379'
  tertiary: '#010100'
  on-tertiary: '#ffffff'
  tertiary-container: '#221b0c'
  on-tertiary-container: '#8e836e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e1f1'
  primary-fixed-dim: '#c6c5d4'
  on-primary-fixed: '#1a1b26'
  on-primary-fixed-variant: '#454652'
  secondary-fixed: '#dee1fb'
  secondary-fixed-dim: '#c2c5de'
  on-secondary-fixed: '#161b2d'
  on-secondary-fixed-variant: '#42465a'
  tertiary-fixed: '#efe1c8'
  tertiary-fixed-dim: '#d3c5ad'
  on-tertiary-fixed: '#221b0c'
  on-tertiary-fixed-variant: '#4f4634'
  background: '#f7fafd'
  on-background: '#181c1e'
  surface-variant: '#e0e3e6'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system for this product is built on the principles of **Swiss-inspired Minimalism** fused with a **High-Tech 2026** aesthetic. It targets developers and content architects who value speed, precision, and clarity. The brand personality is "Quietly Powerful"—it avoids visual noise to let the user's content take center stage. 

The aesthetic leverages a generative and adaptive UI philosophy: elements are hidden or dimmed until interaction, using whitespace as a functional tool to group information rather than just as a decorative element. The interface should feel like a premium, high-performance instrument—cold, sharp, and impeccably organized.

## Colors
The palette is architectural and professional, moving away from standard "enterprise blues" toward a more sophisticated "Midnight Indigo" and "Cyber Slate" foundation.

- **Primary (Midnight Indigo):** Derived from #1a1b26, used for primary text, iconography, and high-level structural elements.
- **Secondary (Cyber Slate):** Derived from #24283b, used for sidebars, secondary actions, and subtle UI backgrounds.
- **Surface (Ice & White):** The application "Canvas" uses the Ice neutral (#f4f7fa). Interactive cards and content editor surfaces use pure White (#ffffff) to create a distinct "layered" effect without relying on heavy shadows.

## Typography
The typography system uses a dual-font approach to balance editorial elegance with technical precision and improved readability.

- **Geist** is used for headlines to provide a sharp, technical, and modern geometric feel.
- **Inter** is the workhorse for body copy, general interface text, and technical labels, chosen for its exceptional legibility and neutral tone. It replaces previous monospaced fonts for metadata to ensure a more cohesive and professional visual flow.

Vertical rhythm is maintained through a strict adherence to the line heights defined in the tokens, ensuring that even dense content structures remain breathable.

## Layout & Spacing
The layout follows a **Fluid Grid** model with high-margin boundaries to maintain a "centered" focus.

- **Desktop (1440px+):** 12-column grid, 40px outer margins, 24px gutters. Content blocks should ideally span 6 or 8 columns to prevent line lengths from becoming unreadable.
- **Tablet (768px - 1439px):** 8-column grid, 24px outer margins, 16px gutters.
- **Mobile (<768px):** 4-column grid, 16px outer margins, 16px gutters.

The "Adaptive UI" philosophy dictates that sidebars and inspector panels should be collapsible. When panels are open, the main content area should fluidly resize while maintaining its internal column proportions.

## Elevation & Depth
This design system avoids traditional shadows in favor of **Tonal Layering** and **Glassmorphism**.

1.  **Level 0 (Background):** The "Ice" surface (#f4f7fa).
2.  **Level 1 (Cards/Panels):** Pure white surfaces with a 1px border in #e0e3e6. No shadow.
3.  **Level 2 (Overlays/Modals):** Semi-transparent white (80% opacity) with a 20px Backdrop Blur. These elements use a very soft, 10% opacity Midnight Indigo shadow to lift them slightly off the surface.
4.  **Active States:** High-contrast borders in the Primary Midnight Indigo are used to indicate focus rather than depth-based changes.

## Shapes
Shapes are modern and approachable but maintain a professional edge. The standard radius is **0.5rem (8px)** for smaller components like inputs and buttons, while larger containers like cards and modals use **1rem (16px)** to create a softer, more sophisticated framing of the content.

Iconography must be strictly linear, using a 1.5px or 2px stroke weight with rounded caps to match the component corner radii.

## Components
- **Buttons:** Primary buttons use a solid Midnight Indigo background with White text for maximum contrast. Secondary buttons use a ghost style with a 1px "Cyber Slate" border.
- **Input Fields:** Minimalist design with a 1px border that transitions to Midnight Indigo on focus. Labels should use the `label-md` Inter font for a clean, technical feel.
- **Cards:** No-shadow, pure white containers with 16px corner radius. Grouping is achieved through generous internal padding (32px).
- **Chips:** Small, pill-shaped tags using the `label-sm` typography. They should have a light "Ice" background and "Midnight Indigo" text.
- **Lists:** Clean rows separated by 1px dividers. Hover states should use a subtle tint to provide feedback without visual clutter.
- **Contextual Tools:** Floating action toolbars should use the glassmorphic style (Backdrop blur) to appear less intrusive when surfacing over content.

# Horizon CMS - Design Documentation & System Specs

## 1. Design System Overview
Horizon CMS is built on an "Architect-first" philosophy, prioritizing precision, authority, and scalability. The visual language is designed to feel like a high-end workstation—minimalist, professional, and functionally dense.

### Visual Identity
- **Brand Identity:** Authority, Precision, Scalability.
- **Theme:** "Architect Mode" (Professional Dark/Slate accents on high-contrast light surfaces).
- **Typography:** Geist (Sans-serif) for a modern, technical feel.
- **Iconography:** Minimalist line icons (Material Symbols Rounded) with consistent stroke weights.

### Color Palette
- **Surface:** `#f7fafd` (Cool light gray for background focus).
- **Primary Action:** `#1a1b26` (Deep Slate for headers, sidebars, and primary buttons).
- **Secondary Surface:** `#ffffff` (Pure white for cards and form containers).
- **Semantic Accents:**
  - **Published:** Success Green
  - **Draft:** Neutral Slate
  - **Archived:** Destructive Red
  - **Alerts:** Informational Blue

---

## 2. Core Administrative Panels

### A. Admin Dashboard (Central Command)
**Purpose:** Real-time system health and performance overview.
- **Key Metrics:** High-level analytical cards for Submissions, Published Pages, and Conversion Rates.
- **System Health:** Monitoring module for operational status and compliance (GDPR, SOC2).
- **Quick Actions:** Grid of high-priority shortcuts to frequent tasks (Manage Forms, User Roles, API Docs).
- **Recent Activity:** Stream of the latest form submissions for immediate visibility.

### B. Master Data Table (List View)
**Purpose:** Standardized template for managing collections (Posts, Pages, Forms, Users).
- **Utility Header:** Global search, status filters, category dropdowns, and date range pickers.
- **Actionable Rows:** Tabular data with status badges, metadata (Author/Date), and row-level actions.
- **Global Actions:** Primary "Create New" button and bulk export functionality.
- **Navigation:** Standardized pagination (Rows per page, page switching).

### C. Master Form Template (Content Creator)
**Purpose:** Focused workspace for creating and editing granular content entries.
- **Two-Column Layout:**
  - **Main Column:** Rich text editor and primary input fields (Title, Body).
  - **Side Column:** Metadata management (Visibility, Publish Date, Author, Categories, Featured Image).
- **Workflow Header:** Persistent actions (Preview, Save Changes) with contextual breadcrumbs.
- **Integrations:** Embedded media uploader for featured assets.

### D. Settings & Configuration (System Hub)
**Purpose:** Global system controls and technical integrations.
- **Modular Sections:** Card-based grouping for General, Security & Privacy, API & Webhooks, and Maintenance.
- **Technical Precision:** Toggle controls for GDPR strict mode, AES-256 encryption status, and webhook event listeners.
- **System Health:** Version tracking, update checks, and manual backup triggers.

---

## 3. Persistent Layout Components

### Architect Mode Sidebar
- **Navigation:** 7 core tabs (Dashboard, Posts, Pages, Forms, Submissions, Users, Settings).
- **Identity:** Profile avatar and "Architect Mode" labeling.
- **Footer Utilities:** Help, Documentation, and "View Site" quick-link.

### Global Top Navigation
- **Utility:** Contextual search bar, notification center, and profile management dropdown.
- **Interactions:** Subtle backdrop-blur effects on scroll to maintain depth.

---

## 4. Design Tokens (Summary)
- **Roundness:** `ROUND_EIGHT` (8px radius for cards and buttons).
- **Spacing:** Fluid spacing system based on a 4px grid.
- **Shadows:** Flat design with minimal elevation (subtle border-stroke separation).
