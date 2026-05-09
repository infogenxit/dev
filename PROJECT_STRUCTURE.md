# Project Architecture: Infogenx Standard

This document outlines the standardized, professional project structure adopted across all Infogenx repositories (Dev, Global, and Australia).

## Directory Overview

*   `src/pages/`: Contains route-level page components. Each page is a container that assembles sections.
*   `src/sections/`: Contains page-specific UI blocks (e.g., `Home/Hero`, `About/Team`).
*   `src/layouts/`: Contains global layout wrappers (e.g., `MainLayout`).
*   `src/components/`: Shared logic, utilities, and global UI components (e.g., `SEO`, `StickyContact`).
*   `src/assets/`: Static files like images, icons, and logos.
*   `src/styles/`: Global CSS and theme files.
*   `src/constants/`, `src/hooks/`, `src/services/`, `src/utils/`: Specialized logic directories.

## Naming Conventions

*   **Folders**: Use **PascalCase** for all component-related folders in `sections`, `components`, and `pages` (e.g., `src/sections/Header`).
*   **Components**: All React components follow **PascalCase** (e.g., `Header.jsx`).
*   **Styles**: CSS files match their component name (e.g., `Header.css`).

## Key Structural Decisions

1.  **Global Layout**: The application uses a centralized `MainLayout.jsx` found in `src/layouts/`. This ensures every page has a consistent Header, Footer, and global logic (Analytics, SEO, ScrollTop).
2.  **Asset Centralization**: All images and the logo are moved from the `src` root to `src/assets/images/`.
3.  **CSS Consolidation**: All global CSS files are consolidated in `src/styles/`.
4.  **Component Separation**: 
    - `sections/` is for visual layout blocks.
    - `components/` is for functional/logic components.

## How to Maintain

- When adding a new section to a page, create a new folder in `src/sections/[PageName]/SectionName/`.
- When adding a new utility, place it in `src/utils/`.
- Ensure all imports use relative paths corresponding to this new structure.
