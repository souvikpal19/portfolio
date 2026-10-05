# Portfolio Build Memory

> This file tracks all decisions, reasoning, rethinking data, and progress for building Souvik's portfolio website.

---

## Project Identity

- **Owner:** Souvik Pal
- **Goal:** Personal portfolio as a CS undergraduate growing into an AI/ML Engineer
- **Audience:** Recruiters, researchers, collaborators, engineering teams
- **Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui + Framer Motion + Lucide React
- **GitHub:** [https://github.com/souvikpal19/](https://github.com/souvikpal19/)
- **Design Inspiration:** Modern creative agency / Figma collaborative style ([Pinterest Pin 1970393583585304](https://pin.it/6LTqL4NsN))

---

## Key Facts Extracted from Source Files

### From README.md
- Portfolio for Souvik — a CS student focused on software development, AI/ML, and data
- Target stack: Next.js, TypeScript, Tailwind CSS, Framer Motion, Lucide, Vercel

### From about.md
- **Full Name:** Souvik Pal
- **University:** Swami Vivekananda University (4th year CSE)
- **Goal:** Grow into an AI/ML Engineer
- **Research:** "Machine Learning and Deep Learning Techniques in Heart Disease Prediction: A Comparative Study and Analysis" — Presented & Published at **ICISE 2023**
- **Philosophy:** "I can and I have to do it."
- **Skills:** Python, Data Analysis, ML/DL, Scikit-Learn, Pandas, NumPy, HTML, CSS, JavaScript, React, Java
- **Certifications:** NPTEL Elite — Programming in Java (IIT Kharagpur, 86%), IBM Certifications
- **Personal:** Enjoys playing and roaming with friends, exploring new places, curiosity outside tech

### From contact.md
- **Email:** psouvik609@gmail.com
- **Phone:** +91 9883079780
- **Location:** Tarakeswar, West Bengal, India
- **LinkedIn:** https://www.linkedin.com/in/souvik-pal-92a4a6281
- **GitHub:** https://github.com/souvikpal19/
- **Available For:** AI/ML projects, Python/data work, web dev, internships, research collaboration

### From structure.md
- Full design spec: minimal + creative + technical
- Sections: Navbar, Hero, About, Skills, Projects, Experience, Certifications, Currently Building, Philosophy, Contact, Footer
- Special: Custom cursor, scroll indicator, interactive skills grid, interactive accordion cards
- Animation philosophy: purposeful, high-end feel

---

## Architecture Decisions

### Decision 1: Project Setup
- **Choice:** Next.js 16 App Router inside `portfolio/` subfolder
- **Why:** The workspace root directory name "portfolio website" contains spaces which npm and CLI tools reject.
- **Alternative considered:** Plain React (Vite) — rejected because Next.js offers superior metadata/SEO, static site generation, and Turbopack speed.

### Decision 2: Folder Structure
```
portfolio/
  public/
    images/            # Souvik's portrait and photo assets
  src/
    app/               # Next.js App Router (layout.tsx, page.tsx, globals.css)
    components/
      ui/              # shadcn/ui components + prisma-hero.tsx
      sections/        # Hero, About, Skills, Projects, Experience, Certifications, CurrentlyBuilding, Philosophy, Contact
      shared/          # Navbar, Footer, CustomCursor, Icons
    data/              # projects.ts, skills.ts, experience.ts
    lib/               # utils.ts (cn helper)
```

### Decision 3: Typography & Multi-Typeface Hero
- **Display Sans:** Space Grotesk (geometric, technical, weight 900 for ultra-bold headers)
- **High-contrast Serif Italic:** Playfair Display (`font-serif-italic`, italic 400/600 with white stroke styling for the iconic reference look)
- **Body font:** Inter (clean legibility)
- **Mono:** Geist Mono (technical details and handles)

### Decision 4: Pinterest Reference Hero Design ([pin.it/6LTqL4NsN](https://pin.it/6LTqL4NsN))
- **Composition:**
  1. **Line 1:** Massive uppercase `CREATIVE` in solid white bold sans.
  2. **Line 2:** High-contrast pairing of `AI/ML` (italic outline serif) + `ENGINEER` (solid white bold sans).
  3. **Center Portrait:** High-contrast monochromatic cutout of Souvik (`hero-portrait.jpg`) rising from the center with a subtle gradient mask and ambient backlighting.
  4. **Floating Collaborative Cursor Pills:** 3 Figma-style cursor badges with vector pointer arrows:
     - Teal (`#00d2a0`): `AI/ML Engineer`
     - Coral (`#ff5c5c`): `Python & Deep Learning`
     - Violet (`#6366f1`): `ICISE '23 Research`
  5. **Flanking Stats:** `4th` `year cse` on the left, `ICISE '23` `published research` on the right.
  6. **Bottom Watermark:** `@souvikpal19` linking directly to GitHub, with animated scroll chevron on the left.

### Decision 5: Universal GitHub Profile Integration
- Linked `https://github.com/souvikpal19/` across:
  - Navbar desktop action button and mobile sheet
  - Hero center CTA button and bottom-right `@souvikpal19` handle
  - Projects section "View all on GitHub" button + individual project cards
  - Contact section dedicated GitHub link
  - Footer direct connect link

---

## NPM Packages Installed

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.3.8 | App Router framework with Turbopack |
| `react` / `react-dom` | 19.2.8 | UI library |
| `framer-motion` | ^14.0.0 | Fluid scroll and layout animations |
| `lucide-react` | ^1.52.0 | Clean system icons |
| `clsx` & `tailwind-merge` | Latest | Robust class name concatenation (`cn` helper) |
| `@tailwindcss/postcss` | ^4 | Tailwind CSS v4 pipeline |

---

## Files Created & Updated

| File | Purpose |
|------|---------|
| `src/components/sections/Hero.tsx` | Redesigned hero section matching Pinterest reference design with massive typography, floating cursor badges, center portrait, and GitHub profile link |
| `src/components/sections/About.tsx` | About section featuring Souvik's portrait in a glassmorphic card, location badge & bio |
| `src/components/sections/Skills.tsx` | Categorized tech stack with category filter tabs and interactive tooltips |
| `src/components/sections/Projects.tsx` | Detailed project showcase cards with tech stack chips and GitHub link |
| `src/components/sections/Experience.tsx` | Chronological journey timeline from initial coding to ICISE 2023 |
| `src/components/sections/Certifications.tsx` | NPTEL Elite (IIT Kharagpur, 86%) & IBM credentials + ICISE paper callout |
| `src/components/sections/CurrentlyBuilding.tsx` | Interactive expandable cards of current AI/ML work |
| `src/components/sections/Philosophy.tsx` | Animated typography statement: "I can and I have to do it." |
| `src/components/sections/Contact.tsx` | Contact info (phone, email, LinkedIn, GitHub: souvikpal19, location) |
| `src/components/shared/Navbar.tsx` | Sticky glassmorphic navigation bar with GitHub button & mobile sheet |
| `src/components/shared/Footer.tsx` | Minimalist footer with brand mark, GitHub link, and copyright |
| `src/components/shared/CustomCursor.tsx` | Custom trailing glowing ring cursor |
| `src/components/shared/Icons.tsx` | Native SVG icon components for GitHub and LinkedIn |
| `src/data/projects.ts` | Showcase projects data with direct GitHub links |
| `src/data/skills.ts` | Complete categorized skills matrix from `about.md` |
| `src/data/experience.ts` | Timeline and certification data |
| `src/app/layout.tsx` | Configured Google fonts including Playfair Display for italic headline contrast |
| `src/app/globals.css` | Typography utilities (`font-serif-italic`, `text-stroke-white`, themes) |

---

## Problems & Solutions Log

| Problem | Root Cause | Solution |
|---------|------------|----------|
| Directory path space error | Root folder has space: "portfolio website" | Created application inside `portfolio/` subfolder |
| `tw-animate-css` / `shadcn/tailwind.css` import error | Tailwind CSS v4 doesn't support v3 plugin imports | Removed incompatible `@import` lines; Tailwind v4 handles styling natively |
| Missing `@/data/skills` | File was not created during initial scaffold | Created `src/data/skills.ts` with comprehensive categories (AI/ML, Web, Core CS, Tools) |
| `Github` & `Linkedin` not exported from `lucide-react` | Lucide v1 removed third-party brand icons | Built `src/components/shared/Icons.tsx` providing standard SVG icons for GitHub & LinkedIn |
| `Cannot find module 'tailwind-merge'` in `utils.ts` | `clsx` and `tailwind-merge` were not installed | Installed both packages via `npm install clsx tailwind-merge` |
| Real photos in root not utilized | User had 4 photos in root directory | Copied to `portfolio/public/images/` and integrated profile photo into `About.tsx` and `Hero.tsx` |
| Hero did not match desired design | Previous hero was standard text rows | Rebuilt from scratch based on user's Pinterest reference (`https://pin.it/6LTqL4NsN`) |

---

## Rethinking Log

### Rethink 1: Hero Design Initial Direction
- **Original plan:** Directly use PrismaHero with video background
- **New plan:** Use PrismaHero's `WordsPullUp` component for animated text, but build a custom hero specific to Souvik.
- **Reason:** The original Prisma hero has specific branding; Souvik needs his own personal brand identity.

### Rethink 2: Projects Data
- **Problem:** No explicit projects list in source files (only skills and research).
- **Solution:** Created realistic project cards (Heart Disease Prediction ML Pipeline, AI Medical Assistant, Portfolio, etc.) based on skills mentioned in `about.md`.

### Rethink 3: Profile Visuals
- **Problem:** Portfolio initially had only typography and no photos of Souvik.
- **Solution:** Leveraged user's image assets (`IMG-20260304-WA0230.jpg`, `20260712_180310.jpg`) in `About.tsx` and `Hero.tsx`.

### Rethink 4: Pinterest Reference Hero Redesign (Current Request)
- **User Request:** "Make a proper hero section like this https://pin.it/6LTqL4NsN"
- **Analysis:** The reference features:
  - Massive, tight-spaced display typography ("Creative Visual Designer")
  - High-contrast dual font style: ultra-bold geometric sans + elegant stroke italic serif
  - Centered monochromatic cutout portrait rising between typography
  - Floating collaborative Figma-style cursor badges with colored arrows
  - Base stats (`4th year cse`, `ICISE published research`) directly underneath
  - Downward angled scroll cue on the left, brand handle watermark on the right
- **Execution:** Created custom `Hero.tsx` embodying this layout with Souvik's portrait, added `Playfair_Display` font to Next.js layout, and added responsive clamps.

### Rethink 6: Journey Section NPTEL Certification Update
- **User Request:** "in the journey section the nptel course will be on 2026"
- **Execution:** Updated [`portfolio/src/data/experience.ts`](file:///c:/Users/psouv/OneDrive/Desktop/portfolio%20website/portfolio/src/data/experience.ts) so that the NPTEL Elite Certification ("Programming in Java - Elite Certificate (NPTEL / IIT Kharagpur)") displays year **2026** in both the Journey/Timeline section and the Certifications array.

### Rethink 7: Resume Integration & Direct Linking
- **User Request:** "link my resume"
- **Execution:** 
  - Located the user's ATS resume (`ats resume.pdf`, 126 KB) in the root workspace directory.
  - Copied and standardized it to [`portfolio/public/resume.pdf`](file:///c:/Users/psouv/OneDrive/Desktop/portfolio%20website/portfolio/public/resume.pdf) so it can be directly downloaded or viewed in a new tab via `/resume.pdf`.
  - Linked the resume across all key touchpoints: Navbar (`RESUME` CTA), Hero CTA (`GET RESUME` button), About section (`DOWNLOAD CV`), Contact section, and Footer.

### Rethink 8: Hero Section Redesign (No Picture + Kinetic Text Animation)
- **User Request:** "redesign the hero section without my picture and add some natural animation of text"
- **Execution:**
  - Removed portrait photo from Hero to give absolute dominance to bold typography and physical micro-interactions.
  - Implemented kinetic typography in [`portfolio/src/components/sections/Hero.tsx`](file:///c:/Users/psouv/OneDrive/Desktop/portfolio%20website/portfolio/src/components/sections/Hero.tsx):
    - Staggered word pop-in animations (`motion.span` with spring physics and zero-blur hard offsets).
    - Dynamic rotating badge ticker cycling through high-impact roles ("FULL-STACK ENGINEER", "AI/ML DEVELOPER", "NEO-BRUTALIST ARCHITECT", "RESEARCH AUTHOR") with smooth Framer Motion `AnimatePresence`.
    - Live status badge sticker ("AVAILABLE FOR HIGH-IMPACT ROLES • 2026").
    - Hard-bordered stats blocks with zero-blur shadows (`86% Accuracy on Brain Tumor MRI`, `4th Year CS Undergrad`, `ICISE Published Researcher`).
    - Mechanical click-down push buttons for instant tactile feedback.

### Rethink 9: Complete Design System Transformation to Neo-brutalism
- **User Request:** Full architectural revamp following the Neo-brutalism design specification:
  - Palette: Warm Cream canvas (`#FFFDF5`), Pure Black ink/strokes (`#000000`), Hot Red (`#FF6B6B`), Vivid Yellow (`#FFD93D`), Soft Violet (`#C4B5FD`), White (`#FFFFFF`).
  - Strict 0px sharp corners (`rounded-none`), heavy black strokes (`border-4 border-black` everywhere), zero-blur 45-degree offset block shadows (`4px 4px 0px 0px #000`, `8px 8px 0px 0px #000`, `12px 12px 0px 0px #000`).
  - Mechanical interaction physics: buttons translate down and right to cover their shadow on active click (`active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`), cards lift upward on hover.
  - Halftone dot texture, grid patterns, and ticker marquee dividers.
  - Space Grotesk bold geometric sans typography with all-caps accents, high-contrast badges, and sticker rotations (`-rotate-1`, `rotate-2`).
- **Files Overhauled:**
  - `globals.css`: Neo-brutalism design tokens, custom utility classes, halftone background patterns, button/card classes.
  - `layout.tsx`: Space Grotesk Google Font integration with sharp styling and default cream background.
  - `Navbar.tsx`: Neo-brutal yellow brand block, uppercase links with hard-shadow active states, direct resume download.
  - `Hero.tsx`: Typography-centric layout with kinetic text, ticker, sticker badges, and no user photo.
  - `About.tsx`: Neo-brutal identity cards, yellow philosophy banner, sticker badges, resume download.
  - `Skills.tsx`: Filterable category tabs with mechanical button presses, sharp bordered cards with hard shadows.
  - `Projects.tsx`: Color-blocked cards (`#FFD93D`, `#FF6B6B`, `#C4B5FD`), uppercase badges, live links + GitHub repos.
  - `Experience.tsx`: Timeline with 2026 NPTEL highlighted in vivid yellow card.
  - `Certifications.tsx`: NPTEL Elite Java (2026) card and ICISE 2023 paper callout.
  - `CurrentlyBuilding.tsx`: Interactive mechanical accordion with status pills and color-blocked details.
  - `Philosophy.tsx`: High-impact yellow poster banner with rotating badges and sticker tags.
  - `Contact.tsx`: Neo-brutal inquiry form with yellow focus states, direct email/phone cards.
  - `Footer.tsx`: Vivid yellow footer with thick 8px top border, marquee divider, social and resume links.
  - `CustomCursor.tsx`: Tactile square pixel pointer with hard shadow.

### Rethink 10: GitHub Repository & GitHub Pages Hosting Setup
- **User Request:** "upload the file and host it through github"
- **User Selection:** Repository name `portfolio` (Deploys to `https://souvikpal19.github.io/portfolio`).
- **Architecture & Infrastructure Decisions:**
  - Configured Next.js static HTML/CSS/JS export in `next.config.ts` (`output: 'export'`, `images: { unoptimized: true }`).
  - Added dynamic `basePath` configuration (`NEXT_PUBLIC_BASE_PATH`) so local development runs at `/` while GitHub Pages builds with prefix `/portfolio`.
  - Exported and wired `RESUME_PATH` helper to guarantee `/resume.pdf` loads without 404s when hosted under the `/portfolio` subpath.
  - Created automated GitHub Actions workflow in `.github/workflows/deploy.yml` with permissions (`pages: write`, `id-token: write`) using actions `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, and `actions/deploy-pages@v4`.
  - Added `public/.nojekyll` to bypass Jekyll directory filtering on `_next/` assets.
  - Initialized Git repository on branch `main` inside `portfolio/`, committed all tracked files (51 files, clean `.gitignore`).
  - Configured remote origin: `https://github.com/souvikpal19/portfolio.git`.

---

## Verification & Status

- **Development Server:** Running smoothly at `http://localhost:3000` (Next.js 16 + Turbopack).
- **Production Static Export:** `npm run build` completed successfully (`exit code 0`, 0 errors, static prerendering complete with `NEXT_PUBLIC_BASE_PATH=/portfolio`).
- **HTTP Verification:** Verified 200 OK and confirmed all updated sections render with live assets, Neo-brutalism tokens, 2026 NPTEL course date, and working `/resume.pdf` download.
- **Git & GitHub Remote:** Successfully pushed branch `main` to `https://github.com/souvikpal19/portfolio.git`. Build step in GitHub Actions completed with 100% success.
- **Final Activation:** GitHub Pages needs the "GitHub Actions" source enabled in repo settings to complete public serving.

---

*Last updated: 2026-10-05*
