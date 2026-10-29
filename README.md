# 🌳 Bento-Tree Portfolio

**Live:** https://omerfarukoktay112-max.github.io/bento-tree-portfolio/

A dark, glassy portfolio site that grows like a tree: a profile card takes root
in the center, and wavy SVG branches reach out to project, skill, and contact
cards on either side. Games on the left branch, apps on the right.

## 🎮 Featured work

**Games (Godot, on [itch.io](https://omer-faruk-oktay.itch.io))**
Halloween: The Monster Market · Win Garden · Cafe Tycoon Clicker · Waifu Blast

**Apps**
[KeyKeeper](https://github.com/omerfarukoktay112-max/KeyKeeper) (.NET MAUI, Android) ·
[GearFit](https://github.com/omerfarukoktay112-max/GearFit) (.NET MAUI, Windows/Android) ·
[Paint for Mac](https://github.com/omerfarukoktay112-max/paint-for-mac) (Swift, macOS)

## ✨ Highlights

- **Organic branch layout**: SVG bezier branches connect a root card to
  surrounding cards, computed live from real DOM coordinates (no separate
  mobile layout needed) and drawn with a growth animation on load.
- **Data-driven**: add a project to `src/data/projects.js` (plus its text in
  `src/i18n/translations.js`) and it gets a card and a branch automatically.
- **Trilingual (TR/EN/DE)**: follows the browser language on first visit,
  then remembers the visitor's choice.
- **Downloadable CV** in Turkish and English, straight from the profile card.
- **Generated sound design**: short hover/click tones synthesized on the fly
  with the Web Audio API, no audio files required.
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
