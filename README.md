# FORMA - Luxury Interior Design Studio

A sophisticated, minimalist website for FORMA, a boutique interior design agency specializing in modern, architectural spaces that fuse minimalism with warmth.

## 🎨 Design Philosophy

"Design as spatial poetry" - FORMA creates immersive, award-winning digital experiences that reflect the agency's mastery of proportion, materiality, and rhythm.

## ✨ Features

- **Cinematic Motion**: Smooth, weighty animations that feel like light traveling across surfaces
- **SEO Optimized**: Complete on-site SEO architecture for top-tier organic visibility
- **Performance**: Core Web Vitals optimized with 95+ Lighthouse scores
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML structure
- **Responsive**: Mobile-first design with perfect scaling across all devices

## 🏗️ Technical Stack

- **Framework**: Next.js 15.5.5 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion + GSAP for cinematic effects
- **SEO**: Comprehensive metadata, structured data, and sitemap
- **Deployment**: Cloudflare Pages with edge optimization

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects listing & case studies
│   ├── services/          # Services pages
│   ├── studio/            # About/Studio page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with SEO
│   ├── sitemap.ts         # XML sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section with video
│   ├── Footer.tsx         # Site footer
│   └── StructuredData.tsx # SEO schema markup
├── lib/                   # Utilities and configurations
│   ├── seo.ts            # SEO metadata and utilities
│   └── analytics.ts       # Google Analytics integration
└── hooks/                 # Custom React hooks
    └── useMultiLayerScroll.ts # Scroll optimization
```

## 🎯 SEO Architecture

- **Semantic HTML**: Proper heading hierarchy and accessibility
- **Metadata**: Optimized titles, descriptions, and Open Graph tags
- **Schema Markup**: Organization, Website, and Project structured data
- **Performance**: Core Web Vitals optimization with lazy loading
- **Analytics**: Google Analytics 4 with custom event tracking

## 🌐 Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Configure environment variables:
   - `NEXT_PUBLIC_BASE_URL`: Your domain URL
   - `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID
   - `GOOGLE_SITE_VERIFICATION`: Search Console verification

### Environment Variables

```env
NEXT_PUBLIC_BASE_URL=https://forma-design.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=your_verification_code
```

## 📊 Performance Targets

- **Lighthouse Performance**: 95+
- **Lighthouse Accessibility**: 95+
- **Lighthouse SEO**: 100
- **Core Web Vitals**: All green
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🎨 Design System

### Colors
- Background: `#F8F6F3`
- Primary Text: `#1A1A1A`
- Secondary Text: `#6C6C6C`
- Accent: `#B88A6F`
- Borders: `#E4DFDA`

### Typography
- **Display**: GT Sectra Fine (headlines)
- **Body**: Neue Haas Grotesk (text, UI)

### Spacing Scale
8px → 16px → 32px → 64px → 128px

## 📈 SEO Strategy

### Target Keywords
- Luxury Interior Design
- Modern Interior Design
- Architectural Design
- Residential Design
- Commercial Design
- Interior Design Studio

### Content Strategy
- Editorial sophistication (Aesop, Apparatus Studio style)
- Architectural precision in copy
- Timeless luxury positioning
- Creative authority establishment

## 🔧 Development

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Husky for git hooks

### Performance
- Next.js Image optimization
- Code splitting and lazy loading
- Critical resource preloading
- Bundle size optimization

## 📞 Contact

For questions about this implementation:
- Email: ziadsk94@hotmail.com
- GitHub: [ziadsk94/forma](https://github.com/ziadsk94/forma)

---

*Built with precision, designed for performance, optimized for success.*