# Tobenx Digital - Shopify Global Commerce Web Application

An authentic, modern, modular, and developer-readable implementation of the official Shopify landing page built with **React 18**, **Vite 6**, and the **Shopify Tailwind v4 Design System**.

---

## 🌟 Highlights & Restored Capabilities

- **Official Shopify Design System & Palette**: Full 255KB Tailwind v4 stylesheet with the exact dark canvas (`#000000`), emerald greens (`#008060`, `#6cd484`), pistachio accents, blurred radial lighting, and glassmorphic cards.
- **Complete Vector Icon Sprite**: 35+ official SVG symbols (`#logo-shopify-bag`, `#icon-ai`, `#icon-boost`, `#icon-social`, `#icon-pos-tick`, `#icon-global-markets`, etc.).
- **Interactive Multi-Channel Selling (3D Cards)**: Online Store, Shopify POS with handheld hardware, Multichannel selling (TikTok, IG, Google), and 1-click Shop Pay checkout.
- **Sidekick Commerce AI & Video Player**: Official Sidekick admin UI showcase + playable merchant spotlight video with audio controls.
- **Global Markets 13-Country Flag Carousel**: Dynamic country & currency switcher with live price conversions, VAT/duty calculation, and shipment map.
- **Rock-Steady Scale Metrics with Interactive Audio**: Real-time sales velocity counters + **interactive audio button that plays the real Shopify cash register sound** on the $1.6T sales milestone!
- **Developer Platform & Headless Toolkit**: Direct code sandbox and documentation references for Hydrogen, Oxygen, and Universal Commerce Protocol (AI agents).
- **App Store Ecosystem**: 21,000+ app ecosystem showcase with high-res source-set banner.
- **3-Step Fast Onboarding ("Take Your Shot")**: Interactive step gallery with high-res storefront imagery.
- **Multi-Region Selector**: Interactive modal supporting all 50+ global regions.

---

## 🏗️ Architecture & Project Structure

```
shopy/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Continuous Integration and automated quality gate
├── public/
│   └── favicon.svg                # Vector brand favicon
├── src/
│   ├── main.jsx                   # Application mount entry point
│   ├── App.jsx                    # Root application layout coordinator
│   ├── index.css                  # Custom theme variables and animation keyframes
│   ├── shopify-theme.css          # Official Shopify Tailwind v4 stylesheet
│   ├── shopify-icons.svg          # 35+ official SVG symbol definitions
│   │
│   ├── components/                # Modular, self-contained UI components
│   │   ├── SvgSprite.jsx          # Embedded SVG sprite injector
│   │   ├── Header/                # Sticky header, dropdowns & mobile drawer
│   │   ├── Hero/                  # Hero banner, email validation form & partner logo marquee
│   │   ├── OnlineInPerson/        # 4-pillar selling switcher (Online Store, POS, Social, Shop Pay)
│   │   ├── SidekickAI/            # Sidekick AI showcase & playable video testimonial
│   │   ├── GlobalSelling/         # 13-country flag carousel & dynamic checkout calculator
│   │   ├── StatsSection/          # Scale factoids + interactive cash register sound trigger
│   │   ├── DeveloperPlatform/     # Developer tools, Hydrogen & AI Agent guides
│   │   ├── AppStoreSection/       # 21,000+ app ecosystem showcase
│   │   ├── ConversionSteps/       # 3-step fast onboarding guide ("Take your shot")
│   │   ├── FAQ/                   # Interactive accordion FAQ
│   │   └── Footer/                # Multi-column footer & country selector modal
│   │
│   ├── data/                      # Structured data models (easily editable by developers)
│   │   ├── shopifyData.js         # Comprehensive extracted Shopify content & assets model
│   │   ├── brandLogos.js          # Featured partner brand logos
│   │   ├── globalMarketsData.js   # Multi-region countries, currencies, and exchange pricing
│   │   ├── statsData.js           # Reliability metrics and throughput figures
│   │   ├── developerToolsData.js  # Developer SDKs and code samples
│   │   ├── appsData.js            # App Store categories and top apps
│   │   └── faqData.js             # Frequently asked questions and answers
│   │
│   └── utils/
│       └── formatters.js          # Currency formatting and email validation utilities
│
├── index.html                     # HTML5 entry template with Google Fonts integration
├── package.json                   # Build scripts and dependencies
├── vite.config.js                 # Fast development and production build pipeline
└── README.md                      # Developer documentation and reference guide
```

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** >= 18.0.0 (or Node 24.x)
- **npm** >= 9.0.0

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates the optimized production build in `dist/`.

### 5. Validate Quality & Run CI Checks
```bash
npm run check
```
Runs lint checks, test suites, and production build verification.
