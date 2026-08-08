# 🌊 Trazmedia

Website resmi Trazmedia — software house Indonesia berbasis di Yogyakarta. Dibangun dengan [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com) dan di-deploy di [Vercel](https://vercel.com).

> **"Code that scales, design that converts"**

## ✨ Fitur

- 🚀 **Astro Framework** — Static + server-rendered hybrid dengan Vercel adapter
- 🌐 **Full Bilingual** — ID & EN auto-detect via `x-vercel-ip-country` header
- 🎨 **Tailwind CSS v4** — Utility-first styling dengan design system custom
- ⚛️ **React 19 + TanStack Query** — Interactive islands (MobileMenu, WAFloatingButton)
- 📱 **Responsive Design** — Mobile-first dengan glass morphism navbar & mobile drawer
- 🎭 **Staggered Animations** — CSS-only reveal dengan `prefers-reduced-motion` support
- 📊 **SEO Optimized** — hreflang, OG meta, canonical URLs, sitemap auto
- 📝 **30 Halaman** — 14 main routes + 16 portfolio detail (prerendered)
- 🔄 **CI/CD Ready** — semantic-release + Conventional Commits + GitHub Actions
- 🔍 **Meta Pixel** — Facebook Pixel integration untuk conversion tracking
- ☁️ **Vercel Deployment** — Serverless deployment dengan edge i18n redirect

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Astro](https://astro.build) | ^5.0 | Framework |
| [@astrojs/vercel](https://www.npmjs.com/package/@astrojs/vercel) | ^8.0 | Deployment adapter |
| [Tailwind CSS](https://tailwindcss.com) | ^4.0 | Styling |
| [React](https://react.dev) | ^19.0 | Interactive islands |
| [TanStack Query](https://tanstack.com/query) | ^5.0 | Data fetching |
| [TypeScript](https://www.typescriptlang.org) | ^5.0 | Type safety |
| [semantic-release](https://semantic-release.gitbook.io) | ^24.0 | Automated versioning |

## 📁 Project Structure

```
trazmediacom/
├── .github/
│   └── workflows/
│       └── release.yml         # Auto release dari push ke main
├── src/
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── Navbar.astro    # Fixed glass-blur navbar
│   │   │   ├── Footer.astro    # Dark footer
│   │   │   ├── MobileMenu.tsx  # React island slide-in drawer
│   │   │   └── WAFloatingButton.tsx  # Floating WhatsApp button
│   │   └── sections/           # Page sections
│   │       ├── HeroSection.astro      # Gradient mesh + terminal code visual
│   │       ├── ServiceCards.astro     # 3 pillar services
│   │       ├── PortfolioGrid.astro    # Portfolio preview grid
│   │       ├── PortfolioPage.astro    # Full portfolio listing
│   │       ├── PortfolioDetail.astro  # Project detail page
│   │       ├── CTABanner.astro        # CTA section
│   │       ├── AboutSection.astro     # Vision, values, vectorion partner
│   │       ├── ServicesPage.astro     # Service detail page
│   │       ├── BlogPage.astro         # Coming Soon blog
│   │       ├── ContactPage.astro      # WA + Email contact cards
│   │       ├── FAQSection.astro       # Accordion FAQ
│   │       └── SectionHeading.astro   # Reusable heading
│   ├── i18n/
│   │   ├── translations.ts     # Single file, nested objects, as const
│   │   └── index.ts            # Helpers: getTranslations, getAlternateLocale
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell, SEO, OG, Meta Pixel, favicon
│   ├── styles/
│   │   └── global.css          # Tailwind v4 theme tokens
│   ├── types/
│   │   └── i18n.ts             # TypeScript interfaces
│   └── pages/
│       ├── index.astro         # Root redirect (Vercel IP detection)
│       ├── id/                 # Indonesian pages
│       │   ├── index.astro     # Home
│       │   ├── about.astro     # About
│       │   ├── services.astro  # Services
│       │   ├── portfolio.astro # Portfolio
│       │   ├── portfolio/[slug].astro  # Portfolio detail (prerender)
│       │   ├── blog.astro      # Blog
│       │   └── contact.astro   # Contact
│       └── en/                 # English pages (mirror structure)
├── public/
│   ├── logo.svg               # Trazmedia logo
│   ├── logo-alt.svg           # Icon-only logo
│   ├── favicon.svg            # Favicon (SVG)
│   ├── favicon.ico            # Favicon (ICO fallback)
│   └── project-images/        # Portfolio screenshots
├── .releaserc.json            # semantic-release config
├── astro.config.mjs           # Astro + i18n config
├── package.json
├── tsconfig.json
├── vercel.json                # Vercel config
└── .env.example               # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

```bash
# Development server dengan hot reload
npm run dev

# Open browser
open http://localhost:4321
```

## 🌐 i18n Architecture

Situs ini full bilingual (Indonesia & Inggris) dengan auto-detect:

1. **Root (`/`)** → redirect via `x-vercel-ip-country` header
   - Indonesia / unknown → `/id/`
   - International → `/en/`
2. **Semua konten** di `src/i18n/translations.ts` — single file, type-safe
3. **Language switcher** di Navbar untuk switch manual
4. **hreflang tags** + **og:locale** untuk SEO multilingual

## 📄 Halaman

| Halaman | Route ID | Route EN | Deskripsi |
|---|---|---|---|
| Home | `/id/` | `/en/` | Hero, services, portfolio preview, CTA |
| About | `/id/about` | `/en/about` | Visi, nilai, partner vectorion.design |
| Services | `/id/services` | `/en/services` | 3 pillar layanan detail |
| Portfolio | `/id/portfolio` | `/en/portfolio` | 8 project grid |
| Portfolio Detail | `/id/portfolio/[slug]` | `/en/portfolio/[slug]` | Detail project (prerender) |
| Blog | `/id/blog` | `/en/blog` | Coming Soon |
| Contact | `/id/contact` | `/en/contact` | WhatsApp + Email + FAQ |

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1F29E4` | CTA, active links, brand |
| `--color-primary-hover` | `#1a22c4` | Button hover |
| `--color-primary-light` | `#a5abff` | Gradient blobs |
| `--color-accent` | `#2890FF` | Secondary accent |
| `--color-accent-light` | `#7dbfff` | Gradient blobs |
| `--color-surface` | `#ffffff` | Background |
| `--color-surface-alt` | `#f8f9fc` | Card backgrounds |
| `--color-text` | `#0f1024` | Primary text |
| `--color-text-muted` | `#6b7280` | Secondary text |
| `--color-border` | `#e5e7eb` | Borders |

### Typography

- **Body**: Plus Jakarta Sans (sans-serif)
- **Code**: JetBrains Mono (monospace)

## 📦 Deployment & Release

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Atau connect repository ke Vercel untuk auto-deploy dari branch `main`.

### semantic-release

Push ke branch `main` akan trigger auto-release via GitHub Actions.

Format commit gunakan **Conventional Commits**:
```
feat: add new feature        → minor version bump
fix: fix bug                 → patch version bump
BREAKING CHANGE: description → major version bump
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` ke `.env`:

```bash
# WhatsApp Business number (tanpa +)
PUBLIC_WA_NUMBER=628XXXXXXXXXX

# Email inquiry
PUBLIC_EMAIL=hello@trazmedia.com

# Meta Pixel (Facebook Pixel) — Ad tracking & conversion
PUBLIC_META_PIXEL_ID=your-pixel-id-here

# Site URL (CDN/asset base)
PUBLIC_SITE_URL=https://trazmedia.com
```

### Meta Pixel Tracking

Meta Pixel otomatis melacak **PageView** di setiap halaman. Untuk tracking tambahan:

| Event | Use Case |
|---|---|
| `Lead` | User submit form / kontak pertama |
| `Contact` | Klik WhatsApp / phone call |
| `ViewContent` | View portfolio / service detail |
| `CompleteRegistration` | User selesai registrasi |

### WhatsApp Integration

Nomor WA diset di `PUBLIC_WA_NUMBER` — otomatis dipakai di semua component: Hero CTA, WAFloatingButton, Contact page.

## 📂 Portfolio Projects

| # | Project | Stack | Stars |
|---|---|---|---|
| 1 | Simpel POS | PHP/Laravel POS UMKM | ⭐ 2 |
| 2 | Gojamu | Astro landing herbal | ⭐ 1 |
| 3 | Gojamu Reseller | Laravel+Inertia+React 19 | ⭐ 1 |
| 4 | Simpel POS Landing | Astro marketing site | ⭐ 1 |
| 5 | EziTour | Laravel 12 travel booking | ⭐ 0 |
| 6 | Suntree | Laravel+Inertia+React 19 marketplace | ⭐ 1 |
| 7 | Isometricon | TypeScript AI icon generator | ⭐ 2 |
| 8 | 4DA Cathering | Astro catering landing page | ⭐ 0 |

## 🤝 Kolaborasi

UI/UX design oleh [**vectorion.design**](https://vectorion.design) — "Your Real-Time Design Partner" berbasis di Yogyakarta.

## 📄 Lisensi

© 2017–2026 Trazmedia Segoro Digital. Semua Hak Dilindungi.

## 👤 Kontak

- **WhatsApp**: [Chat Trazmedia](https://wa.me/message/3YRO62W3ODMXN1)
- **Email**: hello@trazmedia.com
- **Instagram**: [@trazmediacom](https://instagram.com/trazmediacom)
- **Threads**: [@trazmediacom](https://threads.net/@trazmediacom)

---

<div align="center">
  Dibuat dengan 🌊 dan Astro oleh Trazmedia Segoro Digital
</div>
