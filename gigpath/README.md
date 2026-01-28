# GigPath - Career Navigation Platform

A stunning, modern, fully-functional frontend-only website for GigPath - a career navigation platform for gig workers in India.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with warm, approachable aesthetics
- **Fully Responsive**: Mobile-first design that works beautifully on all devices (320px to 1920px)
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Components**: Accordions, cards, modals, and more
- **Mock Data**: Complete mock data for all dynamic content
- **Accessible**: ARIA labels, keyboard navigation, and semantic HTML

## 🛠️ Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
gigpath/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Sticky navigation
│   │   └── Footer.tsx      # Footer component
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── CoreInsight.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── SkillPathways.tsx
│   │   ├── CareerRoadmap.tsx
│   │   ├── RolesReady.tsx
│   │   ├── Community.tsx
│   │   ├── WhyDifferent.tsx
│   │   ├── Trust.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Accordion.tsx
├── data/
│   └── mockData.ts         # Mock data for all sections
└── public/                 # Static assets
```

## 🎨 Design System

### Colors
- Primary: `#2563EB` (Trust Blue)
- Secondary: `#F97316` (Warm Orange)
- Success: `#10B981` (Growth Green)
- Accent: `#8B5CF6` (Purple)
- Neutral Dark: `#1F2937`
- Neutral Light: `#F9FAFB`

### Typography
- Headings: Inter (Bold, 600-800 weight)
- Body: Inter (Regular, 400 weight)
- Mono: JetBrains Mono (for stats/numbers)

## 📱 Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "export": "next export",
  "deploy": "npm run build && npm run export && gh-pages -d out"
}
```

## 📝 Notes

- This is a **frontend-only** application with mock data
- No backend API calls or database connections
- All interactions are UI-only (no actual authentication or data persistence)
- Designed for demonstration and judging purposes

## 🎯 Key Sections

1. **Hero Section** - Main value proposition
2. **Problem Section** - Context setting
3. **Core Insight** - Money vs Skills comparison
4. **How It Works** - 4-step journey
5. **Skill Pathways** - Career path cards
6. **Career Roadmap** - Interactive timeline
7. **Roles Ready** - Dynamic role matching
8. **Community** - Social features
9. **Why Different** - Unique value props
10. **Trust** - Credibility indicators
11. **FAQ** - Common questions
12. **Final CTA** - Conversion section

## 📄 License

This project is created for demonstration purposes.
