# 🌳 Bento-Tree Portfolio

A dark, glassy portfolio site that grows like a tree: a profile card takes root
in the center, and wavy SVG branches reach out to project, skill, and contact
cards on either side. Built to showcase **Unity & C# game development** and
**Kotlin / .NET MAUI mobile development** — web tech stays intentionally out
of the spotlight.

## ✨ Highlights

- **Organic branch layout** — SVG bezier branches connect a root card to
  surrounding cards, computed live from real DOM coordinates (no separate
  mobile layout needed) and drawn with a growth animation on load.
- **Real project data** — cards link to actual GitHub repositories, with
  live star/commit counts pulled from the GitHub API.
- **Trilingual (TR/EN/DE)** — instant language switching with a persisted
  preference.
- **Generated sound design** — short hover/click tones synthesized on the fly
  with the Web Audio API, no audio files required.
- **Case-study modals** — click a project card for a problem → approach →
  outcome narrative, lazy-loaded as its own chunk.
- **Accessible by default** — focus-visible rings, keyboard hover parity,
  dynamic `<html lang>`, and solid text contrast.

## 🛠 Tech Stack

- React + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React icons

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
```

Deployed automatically to GitHub Pages via GitHub Actions on every push to
`main`.
