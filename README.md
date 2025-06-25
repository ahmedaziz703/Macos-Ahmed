# 🍏 macos.dawidolko.pl  
_A TypeScript + React playground that recreates the macOS desktop right inside your browser_


> **Live Demo:** <https://macos-ahmed.vercel.app>

---

## 📑 Table of Contents
1. [About](#about)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Screenshots](#screenshots)
5. [Changelog](#changelog)
6. [Credits](#credits)
7. [Contributing](#contributing)
8. [License & Author](#license--author)

---

## About
`Macos-Ahmed` is an **open-source portfolio / desktop simulator** that mirrors the look-and-feel of modern macOS (Big Sur → Sonoma).  
Built with **React**, **TypeScript**, **Vite**, **UnoCSS** and **Zustand** for state-management, it delivers buttery-smooth animations, draggable windows, launchpad apps, a dynamic dock, and light/dark appearance that respects the system preference. 🍎🖥️

---

## Project Structure
```text
.
├── .github/          # GitHub Actions & issue templates
├── .husky/           # Pre-commit hooks
├── assets/           # Icons, wallpapers, fonts
├── img/              # Marketing images
├── logo/             # SVG/PNG logo variants
├── markdown/         # Blog posts / docs (rendered in-app)
├── music/            # Demo audio files
├── public/           # Static assets served at /
├── screenshots/      # Light / dark previews
├── src/              # Application code
│   ├── components/   # Re-usable React components
│   ├── containers/   # Window / desktop shells
│   ├── stores/       # Zustand stores
│   ├── theme/        # UnoCSS & design tokens
│   ├── utils/        # Helpers
│   ├── main.tsx      # Entry point
│   └── vite-env.d.ts # Type helpers
├── .editorconfig
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .nojekyll
├── CNAME
├── LICENSE
├── README.md         # You are here!
├── index.html        # Vite HTML shell
└── manifest.json     # PWA manifest
````

---


## Getting Started

### Prerequisites

* **Git** – [https://git-scm.com](https://git-scm.com)
* **Node.js 18 +** – [https://nodejs.org](https://nodejs.org)
* **pnpm** (recommended) – `npm i -g pnpm`

### Installation

```bash
# 1. Clone
git clone https://github.com/Macos-Ahmed
cd Macos-Ahmed

# 2. Install deps
pnpm install        # or npm i / yarn

# 3. Start the dev server with HMR
pnpm dev
```

### Production build

```bash
pnpm build          # outputs static files to /dist
```

---

## Screenshots

|                Light mode                |                Dark mode               |
| :--------------------------------------: | :------------------------------------: |
| ![Light](./public/screenshots/light.png) | ![Dark](./public/screenshots/dark.png) |

---

## Changelog

* **2023-06-26** – FaceTime UI polish & bug-fixes
* **2023-06-25** – Added Typora markdown editor (powered by Milkdown)
* **2021-12-05** – Battery API integration + full functional-component refactor

See [`CHANGELOG.md`](CHANGELOG.md) for the complete list.

---

## Credits

* Apple **macOS**, **Monterey**, **Catalina** iconography
* [macOS Icon Gallery](https://www.macosicongallery.com/)
* [`file-icon-cli`](https://github.com/sindresorhus/file-icon-cli) by @sindresorhus

This project originally drew inspiration from the amazing Ubuntu/Windows simulators linked below.

---

## Contributing

Bug reports, feature suggestions and pull requests are **welcome & appreciated**!

```bash
# Fork → clone → create a branch
git checkout -b feat/amazing-feature

# Commit & push
git commit -m "Add amazing feature"
git push origin feat/amazing-feature

# Open a PR 🎉
```

Please include screenshots or GIFs when UI is involved.

---

## License & Author

* **License:** MIT – free to use, fork and remix!
* **Author:** Dawid Olko

* Portfolio [https://portfolio-orcin-seven-1mk53kxuyx.vercel.app/](https://portfolio-orcin-seven-1mk53kxuyx.vercel.app/)
* GitHub: [https://github.com/ahmedaziz703](https://github.com/ahmedaziz703)
* LinkedIn [https://www.linkedin.com/in/ahmed-alrages-810778344/](https://www.linkedin.com/in/ahmed-alrages-810778344/)


> Crafted with ☕, 🎧 and a healthy dose of macOS nostalgia.
