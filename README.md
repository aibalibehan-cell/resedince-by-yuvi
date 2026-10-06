# ERA Residence — Contemporary Mediterranean Residences

> **Architected & Engineered by Yuvi**  
> **Contact / Phone:** +91 7481889979  
> **Location:** New Golden Mile, Estepona, Málaga, Spain

---

## 🏛️ Project Overview

**ERA Residence** is a boutique luxury real estate web experience for a gated community of 25 contemporary residences on Spain's celebrated New Golden Mile between Marbella and Estepona.

The platform is designed around timeless Mediterranean living, privacy, and architectural purity. It delivers an immersive digital showcase featuring interactive master plans, floor layouts, cinematic media, dynamic theme transitions, and apartment catalogs.

---

## ⚡ Technical Architecture & Tech Stack

This website is engineered from scratch as a high-performance, zero-bloat modern web application:

- **Core Engine:** Custom lightweight frontend runtime (`js/app-core.js`) delivering motion, responsive touch triggers, and interactive form handling.
- **Cinematic Transitions:** [Barba.js](https://barba.js.org/) for PJAX seamless page routing without full browser refreshes.
- **Motion & Parallax:** [GSAP](https://greensock.com/gsap/) (GreenSock) suite paired with **ScrollTrigger**, **SplitText**, and **CustomEase** for precision animations.
- **Smooth Momentum Scrolling:** [Lenis](https://lenis.darkroom.engineering/) smooth scroll engine with normalized touch and trackpad momentum.
- **Interactive Vector Graphics:** [Lottie Web](https://airbnb.io/lottie/) runtime for SVG vector animations and interactive triggers.
- **Custom Typography:** Local high-resolution WOFF2 font stacks featuring **Maison Neue Extended** (Book & Bold) with fallbacks for Ambroise François Std and Sloop Script.
- **Media Streaming:** HTML5 video streaming engine with HTTP 206 range-request compatibility for high-definition ambient looping loops.
- **Zero Third-Party Telemetry:** Completely private, 0 external trackers (no Google Tag Manager, analytics beacons, or remote telemetry).

---

## 📁 Directory Structure

```text
├── index.html                   # Homepage (Hero, Gallery, Masterplan, Features, Inquiry)
├── apartments.html              # Comprehensive residences catalog & unit selector
├── contact.html                 # Direct inquiry, showroom booking, and location guide
├── coming-soon.html             # Milestone & phased release portal
├── 404.html                     # Custom styled 404 error page
├── apartments/                  # Dedicated single-unit showcase pages
│   ├── 011.html ... 224.html    # 24 individual apartment architectural blueprints
├── assets/                      # Application media assets
│   ├── css/                     # Primary styles (era-residence.css, custom.css, lenis.css)
│   ├── js/                      # Script modules (app-core.js, main.js, gsap, lenis, etc.)
│   ├── fonts/                   # Maison Neue Extended webfonts (.woff2)
│   ├── images/                  # High-fidelity architectural renders & floorplans (.webp, .png)
│   ├── videos/                  # Ambient background video assets (.webm, .mp4, .mov)
│   ├── pdfs/                    # Architectural brochures and floor plan specs
│   ├── svgs/                    # Architectural diagram vectors & markers
│   └── lottie/                  # Lottie JSON motion graphics
├── package.json                 # Project configuration & npm run scripts
├── server.js                    # High-speed Node.js ESM static & media streaming server
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or later recommended)

### Running Locally

1. Open a terminal in the project directory:
   ```bash
   cd "C:\Users\HIMANSHU\Desktop\all website"
   ```

2. Start the local server:
   ```bash
   npm start
   ```
   *(or run directly: `node server.js`)*

3. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 📄 License & Attribution

- **Project:** ERA Residence
- **Developer & Maintainer:** Yuvi
- **Phone:** +91 7481889979
