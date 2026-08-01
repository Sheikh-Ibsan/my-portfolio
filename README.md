# Sheikh Ibsan Uddin's Portfolio Website

 ### GitHub Repo Link: [https://github.com/Sheikh-Ibsan/my-portfolio]
### Live Link: [https://sheikh-ibsan.github.io/my-portfolio/]

A modern, responsive personal portfolio website built with clean glassmorphism UI principles, custom interactive wireframe globe animations, and integrated Google Sheets contact form handling. This portfolio highlights academic qualifications, competitive programming milestones, project showcase, publications, and contact options.

---

## Features

### Home
* **Hero Headline & Subtitle:** Personal branding featuring dynamic highlighted neon typography.
* **Call-to-Action:** Direct download trigger for the latest CV (`ibsan_cv_june_2026.pdf`).
* **Social Links:** Links to GitHub, LinkedIn, Facebook, and Instagram.
* **Canvas Animation:** Interactive 3D wireframe globe background rendered via HTML5 Canvas API.
* **Scroll Indicator:** Top progress bar dynamically tracking page scroll depth.

### About Me
* Detailed personal summary covering CSE background, core technologies, software engineering aspirations, and interest in AI/ML and competitive programming.

### Education
* Timeline layout detailing academic journey:
  * **SSC** - Chittagong Municipal Model School and College (2021)
  * **HSC** - Saint Placid's School and College (2023)
  * **B.Sc. in CSE** - International Islamic University Chittagong (2025 – Present)

### Achievements
* Highlighting competitive programming and extracurricular milestones:
  * Rising Star in Programming Contests
  * 4th Place in Regional Programming Contest
  * 2nd Runner Up - Intra-College Mathematics Olympiad
  * 5th Place - National Air Gun Championship 2024 (Junior)
  * 15th Place - National Air Gun Championship 2026 (Senior)

### Projects
* Interactive project display cards with zoom-on-hover image effects and repository redirect arrows:
  * **Space Shooter Game:** Arcade Space Invaders clone built from scratch in C++ using Raylib.

### Showcase & Hobbies
* Service and hobby cards covering Design Blogs, Tech Vlogs, Architectural Photography, and 3D Canvas / Three.js Experiments.

### Publications
* Academic papers showcase section including details on *"Scalable Glassmorphism in Modern Web Interfaces"* (published in International Journal of Human-Computer Studies).

### Contact
* **Interactive Contact Form:** Asynchronous form submission powered by JavaScript `fetch` and linked directly to Google Apps Script (`exec` endpoint) saving messages straight to Google Sheets.
* **Direct Links:** Direct Gmail compose integration, LinkedIn profile, and location tags.

---

## Technologies Used

* **HTML5:** Semantic markup structure.
* **CSS3:** Glassmorphism design system (`backdrop-filter`), CSS variables, custom typography (`Space Grotesk`, `Inter`), and grid/flex layout utilities.
* **JavaScript (ES6+):** Intersection Observer API for scroll fade-in animations, HTML5 Canvas 2D rendering for the wireframe globe, scroll progress tracking, and async form submission API.
* **Font Awesome (v6.5.1):** Icon library for UI elements and social branding.
* **Google Apps Script:** Serverless backend handling contact form data delivery to Google Sheets.

---

## Project Structure

```text
Portfolio/
│
├── index.html                  # Main layout & HTML structure
├── style.css                   # Main stylesheet, CSS variables, glassmorphism UI styles
├── script.js                   # Canvas animation, scroll progress, scroll animations, Google Script form handler
│
├── cv/
│   └── ibsan_cv_june_2026.pdf  # Downloadable resume PDF
│
├── img/
│   └── Screenshot...png        # Project screenshots and media assets
│
└── README.md                   # Project documentation
```

---

## Installation Guide

### Step 1: Clone the repository
```bash
git clone https://github.com/Sheikh-Ibsan/Portfolio.git
```

### Step 2: Navigate to project directory
```bash
cd Portfolio
```

### Step 3: Run the project
* Open `index.html` directly in your web browser.
* **OR** using Visual Studio Code, right-click `index.html` and select **Open with Live Server**.

---

## Responsive Design

Optimized across all viewport sizes using modern CSS techniques and glassmorphism styling:
* Desktop Display
* Laptops & Notebooks
* Tablets
* Mobile Devices

---

## External Resources & Links

* **Figma Design:** [View Figma File](https://www.figma.com/design/2Tm5Xwndje1bLyuf03t0SM/Untitled?node-id=0-1&t=AFZB1ww48UBht85e-1)
* **Google Sheets Form Database:** [View Google Sheet Response Ledger](https://docs.google.com/spreadsheets/d/18XSOryLFB1NDkxVs-dXvhcv2qSEQ-mdx9UYCDgrT_2k/edit?gid=0#gid=0)

---

## Contact & Profile Information

* **Name:** Sheikh Ibsan Uddin
* **Email:** [sheikhibsanuddin@gmail.com](mailto:sheikhibsanuddin@gmail.com)
* **GitHub:** [https://github.com/Sheikh-Ibsan](https://github.com/Sheikh-Ibsan)
* **LinkedIn:** [Sheikh Ibsan Uddin Profile](https://www.linkedin.com/in/sheikh-ibsan-uddin-9bb852369/)
* **Location:** Chittagong, Bangladesh

---

## Future Improvements

* [ ] Dark/Light mode toggle switch
* [ ] Interactive project filtering by category (C++, AI/ML, Web)
* [ ] Dynamic blog integration via Markdown/CMS API
* [ ] Enhanced 3D WebGL background effects using Three.js

---

## License

This project was developed for educational and personal portfolio purposes. All rights reserved &copy; 2026 Sheikh Ibsan Uddin.