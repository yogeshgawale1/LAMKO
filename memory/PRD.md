# LAMKO B2B Website - Product Requirements Document

## Original Problem Statement
Build a professional B2B company website for LAMKO, a technology company specializing in high-performance materials for the semiconductor, display, and chemical industries.

## Core Requirements
- **Pages:** Home, About, Services, Industries, Capabilities, Brands, Get-in-Touch
- **Branding:** Professional tech theme with Orange/Teal accent
- **Navigation:** Multi-level dropdown navigation structure
- **Mobile:** Fully responsive design
- **Multi-language:** English, Korean, Chinese, German (planned)

## Tech Stack
- **Frontend:** React, React Router, Tailwind CSS, Shadcn/UI
- **Backend:** FastAPI (planned for form submission)
- **Database:** MongoDB (planned)
- **Build Tool:** Create React App with CRACO

## What's Been Implemented (December 2025)

### Completed Features
- [x] Full multi-page React frontend structure
- [x] Professional Orange/Teal color scheme
- [x] Complex dropdown navigation system (Company, Services, Industries, Capabilities, Platform/Brands)
- [x] Home page with hero, stats, services preview, industry experience section
- [x] About page with company info, core function, goals
- [x] Services page (CMO - Specialty Materials Production, CRDMO - Integrated Materials Solutions)
- [x] Industries page (Semiconductor, Display, Personal Care Actives)
- [x] Capabilities pages (R&D, Purifications, Facility, Production Plants)
- [x] Brands page with LUMORA external link
- [x] Get in Touch page with detailed contact form
- [x] CEO Message and Organisation Chart pages
- [x] Footer with contact info and quick links
- [x] Mobile responsive design across all pages
- [x] Content updates for Semiconductor, Display, Personal Care pages
- [x] Removed "Specialty Chemicals" from navigation and site

### Latest Updates (December 2025)
1. Updated Semiconductor page content with detailed description
2. Updated Display page content with OLED/LCD focus
3. Updated Personal Care Actives page content
4. Removed "Specialty Chemicals" from Industries dropdown
5. Applied comprehensive mobile responsiveness fixes to all pages:
   - Responsive typography (sm:, md:, lg: breakpoints)
   - Adaptive spacing and padding
   - Mobile-friendly navigation (hamburger menu)
   - Responsive grid layouts

## Pending/Backlog Tasks

### P1 - High Priority
- [ ] Multi-language support (EN, KO, ZH, DE) using i18next

### P2 - Medium Priority
- [ ] Backend integration for "Get in Touch" form (FastAPI + MongoDB)
- [ ] Form submission endpoint and email notifications

### P3 - Future Enhancements
- [ ] Add India operations images
- [ ] SEO optimization
- [ ] Analytics integration

## File Structure
```
/app/frontend/src/
├── components/
│   ├── Header.jsx (navigation with dropdowns)
│   ├── Footer.jsx
│   └── ui/ (shadcn components)
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Industries.jsx
│   ├── Capabilities.jsx
│   ├── GetInTouch.jsx
│   ├── Brands.jsx
│   ├── CEOMessage.jsx
│   ├── OrganisationChart.jsx
│   ├── services/ (Production.jsx, Integrated.jsx)
│   ├── industries/ (Semiconductor.jsx, Display.jsx, PersonalCare.jsx)
│   └── capabilities/ (RD.jsx, Purifications.jsx, Facility.jsx, ProductionPlants.jsx)
├── App.js (routing)
├── mock.js (all content data)
└── index.css (global styles)
```

## Key Design Decisions
- All content stored in `/app/frontend/src/mock.js` for easy updates
- Mobile-first responsive design with Tailwind CSS
- Shadcn/UI components for consistent styling
- Orange (#ea580c) and Teal (#0d9488) as primary accent colors
- Dark gray backgrounds for hero sections
