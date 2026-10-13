/* ============================================================
   PADMAPRIYA V — AI & DATA SCIENCE PORTFOLIO JAVASCRIPT
   Interactive Filters, GitHub Live API Sync, Modals & Toast
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initProjectFilters();
  initModals();
  initToast();
  initContactForm();
  initGitHubRepos();
});

/* ------------------------------------------------------------
   1. MOBILE NAVIGATION TOGGLE & SCROLL SPY
   ------------------------------------------------------------ */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Scroll spy active class
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      if (pageYOffset >= secTop) {
        current = sec.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ------------------------------------------------------------
   2. PROJECT FILTERING
   ------------------------------------------------------------ */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ------------------------------------------------------------
   3. MODAL HANDLERS (RESUME & PROJECT DETAILS)
   ------------------------------------------------------------ */
const PROJECT_DETAILS_DATA = {
  optiflow: {
    title: "OptiFlow TN (OptiFlow 5.0) — Industrial Digital Twin",
    badge: "Piloted at ICF Chennai",
    github: "https://github.com/padmapriya-a-byte/optiflow-digital-twin",
    body: `
      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Overview & Pilot</h4>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">
          <strong>OptiFlow 5.0</strong> is an intelligent Digital Twin solution for modern manufacturing logistics and industrial automation. 
          The project was piloted and validated at <strong>Integral Coach Factory (ICF) Chennai</strong>, India's premier passenger coach manufacturing facility.
        </p>
      </div>

      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Key Architectural Features</h4>
        <ul style="color: #cbd5e1; font-size: 0.92rem; padding-left: 1.2rem; line-height: 1.7;">
          <li><strong>Autonomous AGV Fleet Management:</strong> Real-time simulation of Automated Guided Vehicles (AGVs) navigating warehouse grids.</li>
          <li><strong>Algorithmic Pathfinding:</strong> Implemented and benchmarked <strong>A* (A-Star), Breadth-First Search (BFS), and Dijkstra's algorithm</strong> for optimal collision-free path computation.</li>
          <li><strong>Real-time 3D Floor Visualization:</strong> High-performance interactive factory model created using <strong>React, Three.js</strong>, and bidirectional <strong>Socket.IO</strong> telemetry streaming.</li>
          <li><strong>Predictive Maintenance:</strong> Python-based machine learning models monitoring equipment stress parameters from CSV/Excel factory logs to preempt downtime.</li>
        </ul>
      </div>

      <div style="background: rgba(15, 23, 42, 0.7); padding: 1.2rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 1.5rem;">
        <h5 style="color: #34d399; margin-bottom: 0.4rem;"><i class="fa-solid fa-code"></i> Repository Details</h5>
        <p style="color: #94a3b8; font-size: 0.88rem; margin-bottom: 0.8rem;">
          Clone and run client (Port 3000) and backend server (Port 3001) with Node.js & React.
        </p>
        <a href="https://github.com/padmapriya-a-byte/optiflow-digital-twin" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fa-brands fa-github"></i> View OptiFlow Repository
        </a>
      </div>
    `
  },
  agrineural: {
    title: "Agri-Neural Twin — Smart Agriculture & Risk Engine",
    badge: "Tamil Nadu Agriculture 38+ Districts",
    github: "https://github.com/padmapriya-a-byte/agri-neural",
    body: `
      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Problem & Mission</h4>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">
          Drought volatility, unpredictable monsoon cycles, and sudden market price collapses (gluts) severely threaten agrarian livelihoods. 
          <strong>Agri-Neural Twin</strong> is a district intelligence platform engineered to simulate farm risks before seeds are even sown.
        </p>
      </div>

      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Core Capabilities</h4>
        <ul style="color: #cbd5e1; font-size: 0.92rem; padding-left: 1.2rem; line-height: 1.7;">
          <li><strong>District Intelligence Dashboard:</strong> Live soil telemetry covering 38+ Tamil Nadu districts with detailed NPK (Nitrogen, Phosphorus, Potassium) and groundwater metrics.</li>
          <li><strong>AI Risk Engine:</strong> Runs "What-If" neural simulations predicting crop saturation and profit across <strong>1,000 future harvest seasons</strong>.</li>
          <li><strong>Market Glut Detection:</strong> Automated early warning when excessive acreage is committed to volatile cash crops (e.g., Tomato oversupply warnings vs. High-profit Turmeric opportunities).</li>
          <li><strong>Google Gemini Multilingual Assistant:</strong> Natural language advisory assisting local farmers with personalized agronomic guidelines.</li>
          <li><strong>Geospatial Map UI:</strong> Interactive block-level map views built with React 19 and Vite.</li>
        </ul>
      </div>

      <div style="background: rgba(15, 23, 42, 0.7); padding: 1.2rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 1.5rem;">
        <h5 style="color: #34d399; margin-bottom: 0.4rem;"><i class="fa-solid fa-code"></i> Repository Details</h5>
        <p style="color: #94a3b8; font-size: 0.88rem; margin-bottom: 0.8rem;">
          React 19 + Vite + CSS Grid mobile-first design, ready for Vercel/Netlify deployment.
        </p>
        <a href="https://github.com/padmapriya-a-byte/agri-neural" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fa-brands fa-github"></i> View Agri-Neural Repository
        </a>
      </div>
    `
  },
  astronomy: {
    title: "Astronomical Image Processing — Deep Learning Enhancement",
    badge: "IARRD Project",
    github: "https://github.com/padmapriya-a-byte/iarrd-project",
    body: `
      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Scientific Context</h4>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">
          Deep-space astronomical telescope captures suffer from sensor noise, cosmic ray artifacts, and atmospheric distortion. 
          This project implements deep learning workflows and browser-side computer vision to preprocess, denoise, and identify celestial objects.
        </p>
      </div>

      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Architecture & Highlights</h4>
        <ul style="color: #cbd5e1; font-size: 0.92rem; padding-left: 1.2rem; line-height: 1.7;">
          <li><strong>Deep Learning Architectures:</strong> Explored <strong>CNN, Denoising Autoencoders, and U-Net</strong> networks for high-frequency astronomical signal recovery and background noise isolation.</li>
          <li><strong>Interactive Preprocessing Pipeline:</strong> Grayscale conversion, configurable Gaussian blur sigma kernel, and histogram normalization.</li>
          <li><strong>Lightweight Centroid Detector:</strong> Bright-spot clustering algorithms identifying celestial object centroids, surface areas, and luminosity values.</li>
          <li><strong>Feature DB & JSON Export:</strong> Integrated local feature storage with search, pagination, and JSON export for research verification.</li>
        </ul>
      </div>

      <div style="background: rgba(15, 23, 42, 0.7); padding: 1.2rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 1.5rem;">
        <h5 style="color: #34d399; margin-bottom: 0.4rem;"><i class="fa-solid fa-code"></i> Repository Details</h5>
        <p style="color: #94a3b8; font-size: 0.88rem; margin-bottom: 0.8rem;">
          React frontend prototype paired with Python deep learning scripts.
        </p>
        <a href="https://github.com/padmapriya-a-byte/iarrd-project" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fa-brands fa-github"></i> View IARRD Project Repository
        </a>
      </div>
    `
  },
  civicfix: {
    title: "CivicFix — AI-Powered Civic Issue Reporting System",
    badge: "Smart City Infrastructure",
    github: "https://github.com/padmapriya-a-byte",
    body: `
      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Civic Platform Vision</h4>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">
          CivicFix bridges the communication gap between citizens and municipal municipal administrations. 
          By accepting grievance reports across multi-modal channels, it democratizes access for citizens of all literacy levels.
        </p>
      </div>

      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Key Highlights</h4>
        <ul style="color: #cbd5e1; font-size: 0.92rem; padding-left: 1.2rem; line-height: 1.7;">
          <li><strong>Multi-Modal Ingestion:</strong> Citizens can submit reports through audio voice notes, photo uploads, written text, and pinpoint GPS coordinates.</li>
          <li><strong>AI Verification & Deduplication:</strong> Machine learning filters verify legitimate civic issues, detect duplicate tickets in the same geographic radius, and auto-route to designated ward departments.</li>
          <li><strong>Administrative Dashboard:</strong> Live tracking dashboard displaying heatmaps of unresolved civic issues (potholes, sanitation, water leakage) and department SLA turnaround times.</li>
          <li><strong>Backend Integration:</strong> Designed with Supabase real-time database and secure storage buckets.</li>
        </ul>
      </div>
    `
  },
  neuralstyle: {
    title: "Neural Style Transfer Web Application",
    badge: "TensorFlow & Flask",
    github: "https://github.com/padmapriya-a-byte/Neural_Style_Transfer_app",
    body: `
      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Neural Synthesis</h4>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">
          Built as part of the Prodigy InfoTech Generative AI Internship (Task-05), this web application blends artistic styles with real-world photographs using deep convolutional networks (VGG-19 features).
        </p>
      </div>
      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Key Features</h4>
        <ul style="color: #cbd5e1; font-size: 0.92rem; padding-left: 1.2rem; line-height: 1.7;">
          <li>Calculates Gram matrices for multi-layer style loss representation.</li>
          <li>Content preservation using intermediate feature activation maps.</li>
          <li>Full-stack web showcase using Flask backend with dynamic upload and preview.</li>
          <li>Accompanied by Jupyter experiment notebook in repository <code>PRODIGY_GA_05</code>.</li>
        </ul>
      </div>
      <a href="https://github.com/padmapriya-a-byte/Neural_Style_Transfer_app" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <i class="fa-brands fa-github"></i> View Style Transfer Repository
      </a>
    `
  },
  pix2pix: {
    title: "Pix2Pix Image-to-Image Translation (Conditional GAN)",
    badge: "Conditional GAN",
    github: "https://github.com/padmapriya-a-byte/pix2pix_image_translation_app",
    body: `
      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Generative Adversarial Modeling</h4>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">
          Developed for the Prodigy InfoTech Generative AI Internship (Task-04), implementing Conditional GANs (pix2pix) for paired domain-to-domain image synthesis.
        </p>
      </div>
      <div style="margin-bottom: 1.2rem;">
        <ul style="color: #cbd5e1; font-size: 0.92rem; padding-left: 1.2rem; line-height: 1.7;">
          <li>Generator architecture based on U-Net with skip connections to preserve low-level spatial features.</li>
          <li>PatchGAN discriminator penalizing high-frequency structural errors.</li>
          <li>Objective combining adversarial loss with weighted L1 loss to prevent blurring.</li>
          <li>Documented exploratory workflow in repository <code>PRODIGY_GA_04</code>.</li>
        </ul>
      </div>
      <a href="https://github.com/padmapriya-a-byte/pix2pix_image_translation_app" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <i class="fa-brands fa-github"></i> View Pix2Pix Repository
      </a>
    `
  },
  gpt2: {
    title: "Text Generation Web Application with GPT-2",
    badge: "Transformers & NLP",
    github: "https://github.com/padmapriya-a-byte/Text-Generation-with-GPT-2_app",
    body: `
      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Transformer Autoregressive NLP</h4>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">
          Showcase web application wrapping OpenAI's GPT-2 transformer for interactive prompt completion, creative writing, and text continuation experiments.
        </p>
      </div>
      <div style="margin-bottom: 1.2rem;">
        <ul style="color: #cbd5e1; font-size: 0.92rem; padding-left: 1.2rem; line-height: 1.7;">
          <li>Exploration of sampling parameters: Temperature, Top-K, Nucleus Top-P filtering, and Repetition Penalties.</li>
          <li>Clean UI for prompt input, token length customization, and real-time inference streaming.</li>
          <li>Deep analysis notebook stored in repository <code>PRODIGY_GA_01</code>.</li>
        </ul>
      </div>
      <a href="https://github.com/padmapriya-a-byte/Text-Generation-with-GPT-2_app" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <i class="fa-brands fa-github"></i> View GPT-2 Repository
      </a>
    `
  },
  diffusion: {
    title: "Stable Diffusion & Markov AI Experiments",
    badge: "Latent Diffusion & Probabilistic Models",
    github: "https://github.com/padmapriya-a-byte/image_generation_app",
    body: `
      <div style="margin-bottom: 1.2rem;">
        <h4 style="color: #38bdf8; margin-bottom: 0.4rem;">Dual Generative Paradigms</h4>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">
          Hands-on study of modern text-to-image synthesis using pre-trained Stable Diffusion models compared against statistical n-gram Markov language models.
        </p>
      </div>
      <div style="margin-bottom: 1.2rem;">
        <ul style="color: #cbd5e1; font-size: 0.92rem; padding-left: 1.2rem; line-height: 1.7;">
          <li>Text-to-image prompt conditioning, negative prompting, and latent denoising steps in <code>image_generation_app</code> and <code>PRODIGY_GA_02</code>.</li>
          <li>Probabilistic transition matrix calculation and text synthesis in <code>markov_text_generation_app</code> and <code>PRODIGY_GA_03</code>.</li>
        </ul>
      </div>
      <a href="https://github.com/padmapriya-a-byte/image_generation_app" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <i class="fa-brands fa-github"></i> View Diffusion Repository
      </a>
    `
  }
};

function initModals() {
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtn = document.getElementById('openResumeBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');
  const closeResumeBtn = document.getElementById('closeResumeBtn');
  const printResumeBtn = document.getElementById('printResumeBtn');

  const projModal = document.getElementById('projectDetailsModal');
  const closeProjModalBtn = document.getElementById('closeProjModalBtn');
  const projModalTitle = document.getElementById('projModalTitle');
  const projModalBody = document.getElementById('projModalBody');

  // Open Resume
  const openResume = () => {
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  const closeResume = () => {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', openResume);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResume);

  // Print Resume
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Open Project Details
  document.querySelectorAll('.open-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projKey = btn.getAttribute('data-project');
      const data = PROJECT_DETAILS_DATA[projKey];
      if (data) {
        projModalTitle.innerHTML = `
          <span>${data.title}</span>
          <span class="banner-badge" style="font-size: 0.75rem; margin-left: 0.8rem; background: #0284c7;">${data.badge}</span>
        `;
        projModalBody.innerHTML = data.body;
        projModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeProj = () => {
    projModal.classList.remove('active');
    document.body.style.overflow = '';
  };
  if (closeProjModalBtn) closeProjModalBtn.addEventListener('click', closeProj);

  // Close when clicking backdrop
  [resumeModal, projModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });

  // Escape key handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (resumeModal.classList.contains('active')) closeResume();
      if (projModal.classList.contains('active')) closeProj();
    }
  });
}

/* ------------------------------------------------------------
   4. TOAST NOTIFICATIONS & CLIPBOARD
   ------------------------------------------------------------ */
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

function initToast() {
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('padmapriya6373@gmail.com').then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast('padmapriya6373@gmail.com');
      });
    });
  }
}

/* ------------------------------------------------------------
   5. CONTACT FORM TO MAILTO
   ------------------------------------------------------------ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value;
      const email = document.getElementById('senderEmail').value;
      const subject = document.getElementById('senderSubject').value;
      const message = document.getElementById('senderMessage').value;

      const mailtoUrl = `mailto:padmapriya6373@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      window.location.href = mailtoUrl;
      showToast('Opening email client with your message...');
    });
  }
}

/* ------------------------------------------------------------
   6. GITHUB REPOSITORIES LIVE FEED
   ------------------------------------------------------------ */
const BACKUP_REPOS = [
  {
    name: "optiflow-digital-twin",
    description: "OptiFlow 5.0 is an intelligent Digital Twin system for industrial automation, featuring autonomous AGV fleet management, real-time visualization, and smart pathfinding using A*, BFS, and Dijkstra algorithms. Piloted at ICF Chennai.",
    language: "JavaScript",
    html_url: "https://github.com/padmapriya-a-byte/optiflow-digital-twin"
  },
  {
    name: "agri-neural",
    description: "Agri-Neural Twin is an AI-powered smart agriculture solution combining Generative AI, IoT, and Digital Twin technology for 38+ Tamil Nadu districts. Features soil NPK analysis, weather monitoring, and 1,000-season market risk forecasting.",
    language: "JavaScript",
    html_url: "https://github.com/padmapriya-a-byte/agri-neural"
  },
  {
    name: "iarrd-project",
    description: "Astronomical UI & Deep Learning: Preprocessing, enhancement, and feature extraction pipeline exploring CNN, Autoencoder, and U-Net architectures for telescope imagery analysis.",
    language: "Python",
    html_url: "https://github.com/padmapriya-a-byte/iarrd-project"
  },
  {
    name: "Neural_Style_Transfer_app",
    description: "Neural Style Transfer web application that blends artistic styles with real-world images using deep learning. Built with Flask and TensorFlow for learning and showcase purposes.",
    language: "HTML / Python",
    html_url: "https://github.com/padmapriya-a-byte/Neural_Style_Transfer_app"
  },
  {
    name: "pix2pix_image_translation_app",
    description: "Image-to-Image Translation using pix2pix (Conditional GAN) — Prodigy InfoTech Generative AI Task-04 with U-Net generator and PatchGAN discriminator.",
    language: "Python",
    html_url: "https://github.com/padmapriya-a-byte/pix2pix_image_translation_app"
  },
  {
    name: "Text-Generation-with-GPT-2_app",
    description: "Text Generation Web Application using GPT-2 (Additional Learning & Showcase Project). Interactive sampling controls including temperature, top-k, and nucleus top-p.",
    language: "Python",
    html_url: "https://github.com/padmapriya-a-byte/Text-Generation-with-GPT-2_app"
  },
  {
    name: "image_generation_app",
    description: "Image Generation Web Application using Stable Diffusion — Generative AI learning and prompt engineering exploration.",
    language: "Python / CSS",
    html_url: "https://github.com/padmapriya-a-byte/image_generation_app"
  },
  {
    name: "markov_text_generation_app",
    description: "Text Generation using Markov Chains — Prodigy InfoTech Generative AI Internship Task-03 exploring n-gram statistical linguistics.",
    language: "Python / CSS",
    html_url: "https://github.com/padmapriya-a-byte/markov_text_generation_app"
  },
  {
    name: "PRODIGY_GA_01",
    description: "Text Generation with GPT-2 — Prodigy InfoTech Generative AI Internship Task-01 Jupyter notebook experiment.",
    language: "Jupyter Notebook",
    html_url: "https://github.com/padmapriya-a-byte/PRODIGY_GA_01"
  },
  {
    name: "PRODIGY_GA_02",
    description: "Image generation using a pre-trained Stable Diffusion model as part of the Prodigy InfoTech Generative AI Internship (Task-02).",
    language: "Jupyter Notebook",
    html_url: "https://github.com/padmapriya-a-byte/PRODIGY_GA_02"
  },
  {
    name: "PRODIGY_GA_03",
    description: "Text Generation using Markov Chains — Prodigy InfoTech Generative AI Internship Task-03 notebook implementation.",
    language: "Jupyter Notebook",
    html_url: "https://github.com/padmapriya-a-byte/PRODIGY_GA_03"
  },
  {
    name: "PRODIGY_GA_04",
    description: "Image-to-Image Translation using pix2pix (Conditional GAN) — Prodigy InfoTech Generative AI Internship Task-04.",
    language: "Jupyter Notebook",
    html_url: "https://github.com/padmapriya-a-byte/PRODIGY_GA_04"
  },
  {
    name: "PRODIGY_GA_05",
    description: "Neural Style Transfer implementation using deep learning as part of Prodigy InfoTech Generative AI Internship Task-05 notebook.",
    language: "Jupyter Notebook",
    html_url: "https://github.com/padmapriya-a-byte/PRODIGY_GA_05"
  },
  {
    name: "padmapriya-a-byte",
    description: "Personal GitHub configuration profile showcasing my learning journey, skills, and featured repositories.",
    language: "Markdown",
    html_url: "https://github.com/padmapriya-a-byte/padmapriya-a-byte"
  }
];

function renderRepoCards(repos) {
  const container = document.getElementById('githubReposContainer');
  if (!container) return;

  container.innerHTML = '';
  repos.forEach(repo => {
    const card = document.createElement('div');
    card.className = 'repo-card';
    
    const lang = repo.language || 'Code';
    let langColor = '#38bdf8';
    if (lang.includes('Python')) langColor = '#3b82f6';
    else if (lang.includes('JavaScript')) langColor = '#facc15';
    else if (lang.includes('Jupyter')) langColor = '#f97316';
    else if (lang.includes('HTML')) langColor = '#e11d48';

    card.innerHTML = `
      <div class="repo-top">
        <div class="repo-name">
          <i class="fa-regular fa-folder-closed" style="color: var(--primary); margin-right: 0.4rem;"></i>
          ${repo.name}
        </div>
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="color: var(--text-muted);">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <p class="repo-desc">${repo.description || 'Repository created for machine learning, AI, or full-stack exploration.'}</p>
      <div class="repo-footer">
        <span class="repo-lang">
          <span class="lang-indicator" style="background-color: ${langColor};"></span>
          ${lang}
        </span>
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="font-weight: 600; color: var(--primary); font-size: 0.82rem;">
          View Source &rarr;
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

function initGitHubRepos() {
  const refreshBtn = document.getElementById('refreshReposBtn');
  const countDisplay = document.getElementById('repoCountDisplay');

  // Render initial fallback immediately for instant load
  renderRepoCards(BACKUP_REPOS);

  const fetchRepos = () => {
    fetch('https://api.github.com/users/padmapriya-a-byte/repos?per_page=100&sort=updated')
      .then(res => {
        if (!res.ok) throw new Error('Network or rate limit response');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          renderRepoCards(data);
          if (countDisplay) countDisplay.textContent = `${data.length}+`;
          showToast(`Synced ${data.length} repositories live from GitHub!`);
        }
      })
      .catch(err => {
        console.warn('Using local cached GitHub repository metadata:', err);
      });
  };

  // Attempt live sync
  fetchRepos();

  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      showToast('Refreshing GitHub repositories...');
      fetchRepos();
    });
  }
}
