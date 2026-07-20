# DOGSTUDIO — Modern 3D Landing Page

A polished, immersive portfolio-style web experience built with React, Vite, Three.js, GSAP, and Tailwind CSS.

This project showcases modern 3D storytelling for branding and creative studios with animated visuals, scroll-driven motion, and a sleek content-first layout.

## ✨ What this project demonstrates

- Interactive 3D presentation using `@react-three/fiber` and `@react-three/drei`
- Animated model behavior and color transitions driven by `gsap` + `ScrollTrigger`
- Elegant responsive landing page design with Tailwind CSS
- Seamless integration of WebGL content and HTML sections for high-impact branding
- Production-ready frontend architecture with Vite and ESLint

## 🚀 Key highlights

- **3D hero animation**: animated dog model loaded from GLTF and styled with custom materials
- **Scroll-based storytelling**: camera and object motion orchestrated across distinct page sections
- **Brand-first UX**: bold typography, contrast-rich visuals, and layered content for modern creative studios
- **Performance-aware rendering**: tone mapping and sRGB color space configured for better WebGL fidelity

## 🧩 Tech stack

- `react` 19
- `vite`
- `three` 0.184
- `@react-three/fiber`
- `@react-three/drei`
- `gsap` with `ScrollTrigger`
- `tailwindcss`
- `eslint`

## 📁 Project structure

- `src/App.jsx` — root app container with WebGL canvas and content sections
- `src/components/Dog.jsx` — 3D dog model, materials, lighting, and scroll animation logic
- `src/components/Sections.jsx` — landing page sections, copy, and variant list
- `public/models/` — 3D assets used in the hero scene
- `public/matcap/` — material textures used by the 3D model

## 💼 Why clients and recruiters should care

This project is a great fit for agencies, studios, and digital brands seeking:

- a **high-impact landing page** with experiential visuals
- a **creative portfolio concept** that merges motion design and product storytelling
- evidence of **modern frontend skills** in React, 3D web, animation, and responsive UX

## ▶️ Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## ✅ Build for production

```bash
npm run build
npm run preview
```

## 📌 Notes for reviewers

- The 3D animation is authored in `src/components/Dog.jsx` using `useGLTF`, `useAnimations`, and custom GSAP timelines.
- Scroll triggers are configured to animate position, rotation, and material colors across sections.
- The UI blends fixed background imagery with foreground content for a dramatic landing presentation.

## 📣 Showcase opportunity

Use this repository to present capability in:

- WebGL-enhanced brand experiences
- immersive portfolio landing pages
- creative studio and agency-facing visual design
- polished frontend development with modern tooling

---

Built to impress recruiters and win clients with a strong visual first impression and a clean, maintainable React + Three.js architecture.
