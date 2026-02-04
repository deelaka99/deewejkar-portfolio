# DeeWejKar Portfolio [![Netlify Status](https://api.netlify.com/api/v1/badges/c0d50c33-b0c1-499d-916f-cc1bdf5d649e/deploy-status)](https://app.netlify.com/projects/deelaka-wejith/deploys)

A modern, high-performance software engineer portfolio built with **Gatsby**, **Material-UI (MUI)**, and **Framer Motion**. This project features a beautiful glassmorphism-inspired design and is fully integrated with a **Strapi CMS** for dynamic content management.

## 🚀 Key Features

### 🔍 Search Engine Optimization (SEO)

- **Comprehensive Meta Tags**: Dynamic title and description tags for every page.
- **Social Previews**: Full Open Graph (Facebook/LinkedIn) and Twitter Card support.
- **Structured Data**: JSON-LD implementation (Schema.org) for **Person** and **Article** schemas to enhance search result snippets.
- **Automated Assets**: Automatic generation of `sitemap.xml` and `robots.txt` during the build process.

### 🖼️ Image & Performance Optimization

- **Cloudinary Integration**: Fully optimized image delivery via Cloudinary.
- **Intelligent URL Handling**: Custom `getImageUrl` helper handles both external Cloudinary URLs and local Strapi assets.
- **Progressive Loading**: Lazy loading with skeleton loaders to ensure a smooth user experience even on slow connections.

### 🎨 Design & Interaction

- **Modern Aesthetics**: Glassmorphism, vibrant gradients, and premium typography (Outfit/Inter).
- **Smooth Animations**: Powered by Framer Motion for subtle micro-interactions and scroll-based animations.
- **Responsive Layout**: Pixel-perfect experience across mobile, tablet, and desktop devices.

### ⚙️ Content Management

- **Strapi Integration**: Dynamic content fetching via Redux for Projects, Experiences, Skills, and Special Moments.
- **Dynamic Routing**: Automatic page generation for project details with SEO-friendly slugs.

## 🛠️ Tech Stack

- **Frontend**: Gatsby.js (React)
- **Styling**: Material-UI (MUI), Vanilla CSS
- **Animations**: Framer Motion
- **State Management**: Redux, Redux Thunk
- **Backend**: Strapi CMS (v4)
- **Storage**: Cloudinary
- **Deployment**: Netlify

## 📂 Project Structure

- `src/components/` — Reusable UI components (SEO, Header, Hero, Timelines, etc.)
- `src/pages/` — Main site pages
- `src/templates/` — Dynamic page templates (Project Details)
- `src/store/` — Redux actions and reducers for data fetching
- `src/helpers/` — Utility functions (`imageUrl.js`, `slugify.js`)
- `gatsby-node.js` — Core logic for data fetching and dynamic page creation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone and install:
   ```sh
   git clone https://github.com/deelaka99/deewejkar-portfolio.git
   cd deewejkar-portfolio
   npm install
   ```
2. Configure Environment: Create a `.env.development` file with:
   ```env
   GATSBY_BACKEND_URL=your_strapi_url
   ```

### Development

```sh
npm run develop
```

Visit `http://localhost:8000` to view the site.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by **Deelaka Kariyawasam**
