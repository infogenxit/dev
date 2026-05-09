# Project Structure Report

This document provides a comprehensive overview of the reorganized project structure for Infogenx. The goal was to achieve a professional, scalable, and clean architecture by separating pages, sections, and global components.

## Directory Structure

```text
src/
├── assets/             # Static files (images, videos, fonts)
│   ├── images/         # All project images and icons
│   └── videos/         # All background and marketing videos
├── components/         # Global Logic & Utility Components
│   ├── analytics/      # GTM and Page View Tracking
│   ├── ErrorBoundary/  # React Error handling
│   ├── SEO/            # Meta tags and SEO logic
│   ├── ScrollTop/      # Scroll position utility
│   ├── StickyContact/  # Global floating contact component
│   └── NetworkBackground/ # Global visual background
├── sections/           # Visual Page Building Blocks
│   ├── header/         # Main Navigation and Dropdowns
│   ├── Footer/         # Main Site Footer
│   ├── Common/         # Reusable sections (Breadcrumbs, FAQ, etc.)
│   ├── Home/           # Hero, Expertise, Slider, etc. for Home page
│   ├── About/          # About page sections
│   ├── Services/       # All service-specific sections
│   ├── Solutions/      # All solution-specific sections
│   ├── Technologies/   # All technology-specific sections
│   ├── Platforms/      # All platform-specific sections
│   └── Industries/     # All industry-specific sections
├── pages/              # Main Page Entries (Route Targets)
│   ├── Home/           # Home page entry
│   ├── About/          # About page entry
│   ├── Services/       # Service page entries
│   └── ...             # Other route-level components
├── styles/             # Global CSS and Design Tokens
│   ├── App.css         # Main App styles
│   └── index.css       # Global reset and typography
├── constants/          # Application-wide constants (Empty)
├── hooks/              # Custom React Hooks (Empty)
├── layouts/            # Page layout wrappers (Empty)
├── services/           # External API services (Empty)
└── utils/              # Helper functions (Empty)
```

## Key Reorganization Rules Applied

1.  **Page Specific vs. Global**: 
    -   Any component that is specific to a page (e.g., `Hero`, `Expertise` for Home) has been moved to `src/sections/[PageName]/`.
    -   Only generic, highly reusable, or logic-heavy components stay in `src/components/`.

2.  **Structural Integrity**:
    -   `header` and `Footer` are now treated as "major sections" and located in `src/sections/`.
    -   Common visual patterns like `Breadcrumbs` and `ServiceFaq` are in `src/sections/Common/`.

3.  **Clean Source Root**:
    -   All CSS files have been moved to `src/styles/`.
    -   All images are centralized in `src/assets/images/`.
    -   The `src` root now only contains the essential entry points (`App.js`, `index.js`, `reportWebVitals.js`).

## Final Verification
All imports across the entire project have been analyzed and updated to ensure that the site works perfectly with this new structure.

---
*Created on: 2026-05-09*
