# Yasar Arafat — Portfolio

A personal portfolio built with React + Vite, using CSS Modules for scoped styles.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Project Structure

```
src/
├── main.jsx                          # Entry point
├── App.jsx                           # Root component — assembles all sections
│
├── data/
│   └── resumeData.js                 # All resume content in one place
│
├── hooks/
│   ├── useInView.js                  # Scroll-triggered visibility detection
│   └── useActiveSection.js           # Highlights active nav link on scroll
│
├── styles/
│   └── global.css                    # CSS variables, resets, shared utilities
│
└── components/
    ├── Navbar/
    │   ├── Navbar.jsx
    │   └── Navbar.module.css
    ├── Hero/
    │   ├── Hero.jsx
    │   └── Hero.module.css
    ├── SectionWrapper/
    │   └── SectionWrapper.jsx        # Fade-up animation wrapper for sections
    ├── Skills/
    │   ├── Skills.jsx
    │   └── Skills.module.css
    ├── Experience/
    │   ├── Experience.jsx
    │   └── Experience.module.css
    ├── Projects/
    │   ├── Projects.jsx
    │   └── Projects.module.css
    ├── Certifications/
    │   ├── Certifications.jsx
    │   └── Certifications.module.css
    ├── Contact/
    │   ├── Contact.jsx
    │   └── Contact.module.css
    └── Footer/
        ├── Footer.jsx
        └── Footer.module.css
```

## Customisation

All resume content lives in `src/data/resumeData.js`.  
Edit that single file to update any text, add projects, or add new experience entries — no component changes needed.

## Deployment

Works with any static host. For Vercel:

```bash
npm i -g vercel
vercel
```

For GitHub Pages, run `npm run build` and push the `/dist` folder.
