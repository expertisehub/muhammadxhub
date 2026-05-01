# Expertise Hub Empowerment Foundation — Plain Vite + React (JSX)

A standalone single-page website built with **Vite + React 18 (JSX)** and **Tailwind CSS v3**. No TypeScript. No router. No SSR.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy these static files to **any** host:
- Netlify (drag-and-drop the `dist` folder)
- Vercel (`vercel --prod` from the project root)
- GitHub Pages
- cPanel / shared hosting (just upload `dist` contents)
- Cloudflare Pages

## Stack

- React 18 (JSX, no TypeScript)
- Vite 5
- Tailwind CSS 3
- lucide-react icons

## Structure

```
src/
  App.jsx              All sections in one page
  main.jsx             Entry
  index.css            Tailwind + design tokens
  components/
    Header.jsx         Sticky nav with anchor links
    Footer.jsx
  assets/              Images
```

## Customize

- **Colors / tokens**: `src/index.css` (HSL CSS variables) and `tailwind.config.js`
- **Content**: `src/App.jsx` (programs, stats, testimonials, blog posts arrays at the top)
- **Images**: replace files in `src/assets/`
- **SEO meta tags**: `index.html`

## Notes

This is a single-page site with smooth-scroll anchor sections (`#about`, `#programs`, etc.). The contact form currently shows a thank-you alert on submit — wire it to your own backend, Formspree, or Google Forms as needed.
