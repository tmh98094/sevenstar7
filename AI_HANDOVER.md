# SevenStar7 Project Handover Document

## Project Overview
**SevenStar7** is a premium Online Casino platform for the Malaysia market. The design follows a "Luxury Gold" aesthetic with dark backgrounds, glassmorphism, and high-impact animations.

---

## Tech Stack
- **Framework**: React 18.3.1 (Vite)
- **Styling**: Tailwind CSS 3.4.17 (Fixed stable version)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Build Tool**: Vite 5.x

---

## Architecture & Data Flow
- **Data Source**: `constants.tsx` is the single source of truth for all games, providers, categories, and testimonials.
- **Components**: Functional components in `src/components`.
- **Pages**: Modular routes in `src/pages`.
- **Global Types**: `types.ts`.

---

## Core Component Logic

### 1. Game & Provider Display
- **Unified Aspect Ratio**: All game cards use a fixed **3:4 aspect ratio** (`aspect-[3/4]`) for consistency across games and provider logos.
- **GameShowcaseCard**: The primary component for displaying game/provider cards. Supports a "VIP" badge for exclusive titles.

### 2. Game Library (`GameLibrary.tsx`)
- **Filtering**: Supports Category, Search, and Status (Popular/New/Exclusive) filters.
- **Randomization**: The "New" category randomly picks **18 games** from the entire catalog on each load.
- **Hyphen/Space Fix**: Logic handles both hyphenated IDs (e.g., `live-casino`) and spaced data labels (e.g., `Live Casino`) for seamless filtering.
- **View Mode Toggle**: A "Games / Providers" toggle appears **only** when the "Slots" category is active.

### 3. Responsive Pagination
- **Game Library Catalog**: 10 items per page on Desktop/Tablet, **6 items per page** on Mobile.
- **Homepage Lobby**: Fixed 6 items per page for Hot Slots.
- **Testimonials**: 3 items per page with manual navigation.

---

## Assets & Images
- **Public Directory**: `public/images/`
    - `slot/games/`: 1:1 or 3:4 game posters.
    - `slot/category/`: Provider logos (used for the "Providers" view and homepage lobby).
    - `croco gaming/`: 30 unique game titles for the exclusive hub.
    - `live/` & `sports/`: Category/Provider icons.
- **Logos**: 
    - `Croco SVG.svg`: The official partner logo (located in `/public`).
    - `favico.png`: Website favicon (located in `/public/images`).

---

## Critical Design Rules
1. **Logo**: Avoid AI templates. Use custom SVGs and high-end gradients.
2. **Themes**: Dark theme (`brand-black`) with Gold (`brand-gold`) and Green (`green-500` for Croco) accents.
3. **Responsiveness**: Mobile-first approach for all lobbies and navigation bars. Use `px-4` containers.

---

## Recent Implementations (Phase 5 Complete)
- [x] Integrated **30 Croco Gaming** titles with real filenames.
- [x] Integrated **35 Slot Games** from `/slot/games`.
- [x] Implemented **Games/Providers toggle** for Slot category.
- [x] Built the **Croco Hub** banner with official SVG and branded gradients.
- [x] Fixed **Pagination bugs** in Testimonials and mobile view.
- [x] Standardized **3:4 aspect ratio** across all grids.

---

## Development Commands
- `npm run dev`: Start dev server.
- `npm run build`: Verify build stability (Strictly ensure no React 19/Tailwind 4 conflicts).
