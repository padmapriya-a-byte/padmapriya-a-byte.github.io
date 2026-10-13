# Padmapriya V — AI & Data Science Portfolio Website

A modern, high-performance portfolio website built for **Padmapriya V**, highlighting academic credentials, industrial pilots, internships, and all 14 GitHub repositories.

---

## 🌟 Highlights & Features

- **Direct GitHub Integration**:
  - Live synchronization with [@padmapriya-a-byte](https://github.com/padmapriya-a-byte) using the GitHub API with graceful fallback caching.
  - Deep-dive links and details for all flagship projects:
    - **OptiFlow TN (OptiFlow 5.0)**: AI Industrial Digital Twin piloted at **ICF Chennai**.
    - **Agri-Neural Twin**: District intelligence and 1,000-season risk simulation for 38+ districts across Tamil Nadu.
    - **Astronomical Image Processing (IARRD Project)**: Deep Learning CNN, Autoencoder, and U-Net telescope denoising.
    - **CivicFix**: Multimodal AI-powered civic issue reporting platform.
    - **Generative AI Suite**: Neural Style Transfer (TF/Flask), Pix2Pix (cGAN), GPT-2 Text Generation, Stable Diffusion, and Markov Chains.
- **Interactive Resume Viewer**:
  - In-browser digital resume preview matching the PDF layout with a one-click **Print / Save PDF** action.
- **Dynamic Category Filtering**:
  - Filter projects by *Digital Twins & AI*, *Deep Learning & Vision*, *Generative AI & LLMs*, and *Civic & Web Apps*.
- **Comprehensive Internship Timeline**:
  - Front-End Developer Intern @ Strydo Technologies Pvt. Ltd. (Vellore)
  - Machine Learning Intern @ Prodigy InfoTech (Remote)
  - Prompt Engineering & AI Intern @ SkillCraft Technology (Remote)
- **Technical Skills Matrix**:
  - Categorized into Programming, AI & Generative AI, Data Analytics, Web Development, Tools & Platforms, and Focus Areas.
- **Contact Channels**:
  - One-click copy email button with toast alerts, LinkedIn link, and prefilled mailto contact form.
- **Zero-Dependency Architecture**:
  - Pure HTML5, CSS3, and modern ES6+ JavaScript. No build step required—open `index.html` directly in any browser!

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Double click `index.html` or open it with your browser of choice (Chrome, Edge, Firefox, Brave).

### Option 2: Python Local Server
Run in PowerShell or terminal inside this directory:
```bash
python -m http.server 8080
```
Then visit: `http://localhost:8080`

### Option 3: Node / NPX
```bash
npx serve .
```

---

## 🌐 How to Deploy for Free

### 1. GitHub Pages (Recommended)
You can deploy this as your personal GitHub site at **`https://padmapriya-a-byte.github.io`**:
1. Create a new GitHub repository named `padmapriya-a-byte.github.io` (or push to a repo named `portfolio`).
2. Push all files (`index.html`, `style.css`, `script.js`, `assets/`, `README.md`) to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of AI Engineer portfolio"
   git branch -M main
   git remote add origin https://github.com/padmapriya-a-byte/padmapriya-a-byte.github.io.git
   git push -u origin main
   ```
3. Enable GitHub Pages in repository **Settings -> Pages** -> Source: `Deploy from branch main` (`/root`).

### 2. Vercel / Netlify
- Drag and drop this folder onto [Netlify Drop](https://app.netlify.com/drop), or import your GitHub repository into [Vercel](https://vercel.com) with default static settings.

---

## 📂 Project Directory Structure

```
padmapriya-portfolio/
│
├── index.html            # Main semantic webpage with SEO & metadata
├── style.css             # Glassmorphism styling, ambient glows & animations
├── script.js             # Project filtering, modals, GitHub API sync & toast
├── README.md             # Documentation & deployment guide
└── assets/
    └── avatar.png        # Profile avatar photo
```
