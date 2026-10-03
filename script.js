const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');
const form = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (form && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim() || 'friend';
    formStatus.textContent = `Thanks, ${name}! Your request has been received — we’ll be in touch soon.`;
    form.reset();
  });
}
