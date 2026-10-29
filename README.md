# 🌳 Bento-Tree Portfolio

**Live:** https://omerfarukoktay112-max.github.io/bento-tree-portfolio/

A dark, glassy portfolio site. The landing screen grows like a tree: a profile
card takes root in the center and wavy SVG branches reach out to the featured
game, featured app, stats and links. Below it: Games, Apps, About (experience,
education, certificates, skills) and Contact sections.

## 🎮 Featured work

**Games (Godot, on [itch.io](https://omer-faruk-oktay.itch.io))**
Halloween: The Monster Market · Win Garden · Cafe Tycoon Clicker · Waifu Blast

**Apps**
[KeyKeeper](https://github.com/omerfarukoktay112-max/KeyKeeper) (.NET MAUI, Android) ·
[GearFit](https://github.com/omerfarukoktay112-max/GearFit) (.NET MAUI, Windows/Android) ·
[Paint for Mac](https://github.com/omerfarukoktay112-max/paint-for-mac) (Swift, macOS)

## ✨ Highlights

- **Organic branch hero**: SVG bezier branches connect the profile card to
  surrounding tiles, computed live from real DOM coordinates and drawn with a
  growth animation on load.
- **Sticky navigation** with section anchors and a mobile menu.
- **Data-driven**: add a project to `src/data/projects.js` (plus its text in
  `src/i18n/translations.js`) and it shows up in its section automatically;
  `featured: true` also puts it on the landing screen.
- **Direct links on every card**: itch.io page for games, GitHub and latest
  release download for apps.
- **Trilingual (TR/EN/DE)**: follows the browser language on first visit,
  then remembers the visitor's choice.
- **Downloadable CV** in Turkish and English, straight from the profile card.
- **Optional sound design**: short hover/click tones synthesized with the Web
  Audio API; off by default, one click to turn on.
- **Case-study modals**: click a project card for a problem → approach →
  outcome write-up, lazy-loaded as its own chunk.
- **Accessible by default**: focus-visible rings, keyboard hover parity,
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
