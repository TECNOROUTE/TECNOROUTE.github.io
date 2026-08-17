// ============================================================
// TECNOROUTE — site scripti
// Mobil menü, kaydırmada görünürlük animasyonu, iletişim formu
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Yıl ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobil menü ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
    });

    // Bir linke tıklayınca menüyü kapat
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Kaydırmada görünürlük (reveal) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el, i) => {
      // Aynı bölüm içinde hafif kademeli gecikme
      el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
      observer.observe(el);
    });
  }

  /* ---------- İletişim formu ---------- */
  // NOT: Bu form yalnızca istemci taraflı bir demodur; gerçek e-posta
  // gönderimi için bir backend servisi (ör. Formspree, EmailJS,
  // kendi API'niz) bu fonksiyona bağlanmalıdır.
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        status.textContent = 'Lütfen zorunlu alanları doldurun.';
        status.classList.add('error');
        return;
      }
      if (!emailPattern.test(email)) {
        status.textContent = 'Lütfen geçerli bir e-posta adresi girin.';
        status.classList.add('error');
        return;
      }

      status.classList.remove('error');
      status.textContent = `Teşekkürler ${name.split(' ')[0]}, mesajınız alındı. En kısa sürede dönüş yapacağız.`;
      form.reset();
    });
  }

});
