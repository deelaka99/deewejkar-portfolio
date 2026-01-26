# DeeWejKar Portfolio [![Netlify Status](https://api.netlify.com/api/v1/badges/c0d50c33-b0c1-499d-916f-cc1bdf5d649e/deploy-status)](https://app.netlify.com/projects/deelaka-wejith/deploys)

A modern, responsive developer portfolio built with Gatsby, Material-UI (MUI), and Framer Motion. Showcases projects, experience, skills, and more with a beautiful glassmorphism-inspired design.

## Features

- **Gatsby** static site generator for fast performance
- **Material-UI (MUI)** for modern, accessible UI components
- **Framer Motion** for smooth animations
- **Glassmorphism** and gradient design patterns
- **Responsive** and mobile-friendly layout
- **Custom DK favicon** (SVG)
- **Lazy loading** for all images
- **Project, Experience, and Special Moments pages**
- **About Me** and Hero sections
- **Languages/Tech Stack carousel**

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/deewejkar-portfolio.git
   cd deewejkar-portfolio
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:

```sh
npm run develop
# or
yarn develop
```

Visit [http://localhost:8000](http://localhost:8000) to view the site.

### Build

To build the site for production:

```sh
npm run build
# or
yarn build
```

The static files will be output to the `public/` directory.

### Clean

To clean the cache and public directories:

```sh
npm run clean
# or
yarn clean
```

## Project Structure

- `src/components/` — React components (Header, Hero, Languages, AboutMe, FeaturedProjects, Footer, etc.)
- `src/pages/` — Main pages (index.js, experience.js, projects.js, special-moments.js)
- `src/helpers/` — Data helpers (ProjectList.js)
- `src/images/` — All images and assets
- `src/styles/` — Global CSS
- `src/templates/` — Project details template
- `public/` — Gatsby build output and static assets (including favicon.svg)

## Customization

- **Favicon:** Edit `public/favicon.svg` to update the DK logo.
- **Theme:** Adjust `src/theme.js` for color and typography changes.
- **Content:** Update `src/helpers/ProjectList.js`, `src/pages/experience.js`, and other page/component files.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Deelaka Kariyawasam
