document.addEventListener('DOMContentLoaded', () => {

  // Replace this URL with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyU9lB733ORvHg5w55GivlMu348vfn3um2b3fyZJYZxYljixqEYUGzY9Q0FPhN8zmDk/exec";

  /* 1. GLOBE CANVAS */
  const canvas = document.getElementById('globe-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = 500);
    let height = (canvas.height = 500);
    let rotation = 0;

    function drawWireframeGlobe() {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);

      const radius = 220;
      const lines = 16;
      ctx.strokeStyle = 'rgba(116, 214, 0, 0.25)';
      ctx.lineWidth = 1;

      for (let i = -lines / 2; i <= lines / 2; i++) {
        let latAngle = (i * Math.PI) / lines;
        let r = radius * Math.cos(latAngle);
        let y = radius * Math.sin(latAngle);

        ctx.beginPath();
        ctx.ellipse(0, y, r, r * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (let i = 0; i < lines; i++) {
        let lonAngle = (i * Math.PI) / lines + rotation;
        let x = radius * Math.sin(lonAngle);

        ctx.beginPath();
        ctx.ellipse(0, 0, Math.abs(x), radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
      rotation += 0.002;
      requestAnimationFrame(drawWireframeGlobe);
    }
    drawWireframeGlobe();
  }

  /* 2. SCROLL PROGRESS */
  const scrollProgress = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0) {
      scrollProgress.style.width = `${(window.scrollY / totalScroll) * 100}%`;
    }
  });

  /* 3. FADE OBSERVER */
  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

  /* 4. GOOGLE SHEET FORM SUBMISSION */
  const contactForm = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submit-btn');
      submitBtn.disabled = true;
      statusMsg.style.color = '#666';
      statusMsg.innerText = 'Sending message...';

      const formData = new FormData(contactForm);

      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        statusMsg.style.color = '#74D600';
        statusMsg.innerText = 'Thank you! Your message has been saved.';
        contactForm.reset();
        submitBtn.disabled = false;
      })
      .catch(error => {
        statusMsg.style.color = '#ff3333';
        statusMsg.innerText = 'Error submitting form. Please try again.';
        submitBtn.disabled = false;
      });
    });
  }
});