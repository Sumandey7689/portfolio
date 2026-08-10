# React Portfolio & CV Website

A premium, modern, and highly interactive Developer Portfolio and CV website built with React, Vite, TypeScript, and clean Vanilla CSS (no UI frameworks or Tailwind). This website showcases professional work history, certifications, projects, technical skills, services, and has an interactive contact form.

The project is fully configured for automated deployment to **GitHub Pages** using GitHub Actions.

---

## 🚀 Live Demo & Hosting
The application is hosted on GitHub Pages:
- **Base URL Config**: `./` (Relative path configuration in `vite.config.ts` ensures it runs correctly under sub-directories / custom repositories).

---

## 🛠️ Technology Stack
- **Core**: React 19, TypeScript
- **Bundler & Build Tool**: Vite 8 (extremely fast Hot Module Replacement)
- **Styling**: Vanilla CSS with custom properties (CSS variables), glassmorphism, responsive grids, and clean hover micro-animations.
- **Icons**: Lucide React (SVG-based lightweight icons)
- **Deployment**: GitHub Actions

---

## 📁 Project Structure
```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── assets/
│       └── images/             # Resume PDF and project screenshots
├── src/
│   ├── components/
│   │   ├── BrandIcons.tsx      # High-fidelity social Brand SVGs
│   │   ├── Footer.tsx          # Responsive footer component
│   │   ├── Modal.tsx           # Reusable glassmorphic Modal overlay
│   │   └── Navbar.tsx          # Sticky glassmorphic navigation header
│   ├── data/
│   │   └── portfolioData.ts    # Centralized data model & resume content
│   ├── sections/
│   │   ├── About.tsx           # Biography & Interactive tabs (Skills, Exp, Edu)
│   │   ├── Contact.tsx         # Contact info & AJAX integrated form
│   │   ├── Hero.tsx            # Headline, availability badge & CTAs
│   │   ├── Projects.tsx        # Project categories (Client, OS, Personal) with filter tabs
│   │   └── Services.tsx        # Services list (Web Dev, UI/UX, Android Dev) with details modals
│   ├── App.css
│   ├── App.tsx                 # Core app page builder
│   ├── index.css               # Global styling, themes, resets, and layout utils
│   └── main.tsx                # Client entry point
├── index.html                  # SEO head configuration, title, favicon, and viewport
├── vite.config.ts              # Vite configurations (Relative base path setup)
└── package.json
```

---

## 💻 Local Development

### Prerequisites
Make sure you have Node.js installed (v20+ recommended).

### 1. Install Dependencies
```bash
npm install
```
*Note: If npm skips native binary modules due to local Node version warnings, you can install the platform-specific binding manually, e.g., `npm install @rolldown/binding-win32-x64-msvc --save-dev` for Windows x64.*

### 2. Run Dev Server
Launch the local development environment:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
Compile and optimize assets to the `dist/` directory:
```bash
npm run build
```

---

## 🛰️ GitHub Pages Deployment

This project includes a **GitHub Actions workflow** that handles compiling and publishing to GitHub Pages automatically.

### Automated Deployment (Recommended)
1. Push your changes to the `main` or `master` branch.
2. The GitHub Action in `.github/workflows/deploy.yml` will automatically:
   - Check out the code.
   - Install node modules.
   - Run `npm run build`.
   - Upload the build output (`dist/` directory) and deploy it to GitHub Pages.
3. Make sure to configure your GitHub repository to deploy from **GitHub Actions**:
   - Go to your repository settings -> **Pages**.
   - Under **Build and deployment**, select **GitHub Actions** as the source.

---

## ✏️ Customizing Content
All text content, contact details, work experience, projects, skills, education, and services are centralized in `src/data/portfolioData.ts`. 

To update the website, simply modify the data in this file:
```typescript
export const portfolioData = {
  contact: {
    name: 'Suman Dey',
    // ...
  },
  // Add/remove projects, skills, or experience here
};
```
To update the downloadable resume, replace the PDF file in `public/assets/images/My_Resume.pdf`.
To update project screenshots or profile images, place them in `public/assets/images/` and update references in `portfolioData.ts`.

---

## ♿ Accessibility & SEO
- **SEO Best Practices**: Proper metadata title, meta description, Open Graph details, semantic tags, and search engine optimization setup in `index.html`.
- **Contrast & Visibility**: Built using high-contrast typography, readable body sizing, and semantic markup for screen readers.
- **Alt Text**: Descriptive alt tags are assigned to all loaded images (`user.png`, project cards, etc.).
