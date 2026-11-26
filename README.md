# Tobenx Digital Website

The Tobenx Digital website is a responsive React 18 and Vite 6 web application presenting the Tobenx ecosystem for African businesses, learners, creators, developers, and employers.

The site helps visitors discover website design, AI automation, digital marketing, cloud services, seasonal e-commerce, technical training, and hiring opportunities.

## What the website offers

- **Tobenx SBT services** — Website design, AI workflow automation, digital marketing, and cloud infrastructure.
- **Season X** — A seasonal and fashion-focused e-commerce experience.
- **Tobenx Academy** — On-demand courses, practical skill programs, career support, certification, and pathways to employment.
- **JobIn** — Vetted talent discovery, SoftHire, CV building, iWork, and job listings.
- **AI assistance** — An interactive on-page chat widget for website, automation, marketing, training, hiring, and pricing questions.
- **Conversion-focused landing content** — Service explanations, testimonials, trust metrics, onboarding steps, and calls to action.
- **Responsive experience** — Desktop, tablet, and mobile layouts built with modular React components and custom CSS.

## Technology

- React 18
- Vite 6
- JavaScript and JSX
- Custom CSS
- Lucide React icons
- GitHub Actions
- Semantic Release
- Commitlint

## Project structure

```text
.
├── .github/workflows/
│   ├── ci.yml                 # Validation, PR creation, rebase, merge, and CI
│   └── release-and-merge.yml # Production release automation
├── public/                    # Public static assets
├── src/
│   ├── components/
│   │   ├── common/            # Shared UI, logo, chat, globe, and video components
│   │   ├── Header/            # Navigation and region controls
│   │   ├── Footer/            # Footer links and contact actions
│   │   └── sections/          # Landing-page sections
│   ├── data/                  # Structured content and configuration
│   ├── utils/                 # Shared events and formatting helpers
│   ├── App.jsx                # Main application composition
│   └── main.jsx               # React entry point
├── .releaserc.json            # Semantic-release configuration
├── commitlint.config.js       # Conventional commit rules
└── package.json
```

## Local development

### Requirements

- Node.js 22
- npm

### Install

```bash
npm ci
```

### Run locally

```bash
npm run dev
```

Vite prints the local development URL when it starts, typically `http://localhost:5173`.

### Production build

```bash
npm run build
```

The optimized build is generated in `dist/`.

### Preview the production build

```bash
npm run preview
```

### Run the quality gate

```bash
npm run check
```

This runs:

1. The lint script.
2. The test script.
3. The Vite production build.

## Git workflow

Use conventional commit messages:

```text
feat: add a new website section
fix: correct mobile navigation
ci: update workflow configuration
chore: update dependencies
docs: improve setup documentation
```

Feature branches should use the `feature/*` or `feat/*` naming pattern. Pushing a feature branch creates or updates a pull request targeting `main`.

GitHub Actions validates the pull request and, after validation succeeds, handles the merge and subsequent release process.

## CI and release automation

The CI workflow:

- Creates or updates a PR for feature branches.
- Runs Commitlint for PR commits.
- Runs lint, test, and production build checks.
- Runs a semantic-release dry-run.
- Rebases the feature branch onto `main` where possible.
- Merges the validated PR.

The release workflow runs after successful CI on `main` or after a direct push to `main`. It runs the quality gate and semantic-release to calculate versions and publish GitHub release metadata.

## Deployment

Build the application with `npm run build` and deploy the contents of `dist/` to the target static host or CDN.

No backend server is required for the current implementation. External videos and images are loaded directly from their configured URLs.
