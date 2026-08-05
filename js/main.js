// IDOSTEM LABS - Main JavaScript with Premium Scroll Animations, Hero Slider & E-Commerce Modal
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initStats();
  initMobileMenu();
  initParallax();
  initTiltCards();
  initCursorGlow();
  initSmoothAnchors();
  initHeroSlider();
});

/* ───── NAVBAR ───── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 50);
    if (y > 300) {
      navbar.style.transform = y > lastScroll ? 'translateY(-100%)' : 'translateY(0)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScroll = y;
  });
  const links = document.querySelectorAll('.nav-links a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) link.classList.add('active');
  });
}

/* ───── MOBILE MENU ───── */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ───── HERO SLIDER / CAROUSEL ───── */
let currentSlideIndex = 0;
let sliderInterval = null;

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot-indicator');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');

  if (!slides.length) return;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetSliderTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetSliderTimer();
    });
  }

  startSliderTimer();
}

function showSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot-indicator');
  if (!slides.length) return;

  if (index >= slides.length) currentSlideIndex = 0;
  else if (index < 0) currentSlideIndex = slides.length - 1;
  else currentSlideIndex = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlideIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlideIndex);
  });
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function goToSlide(index) {
  showSlide(index);
  resetSliderTimer();
}

function startSliderTimer() {
  sliderInterval = setInterval(nextSlide, 4500);
}

function resetSliderTimer() {
  clearInterval(sliderInterval);
  startSliderTimer();
}

/* ───── E-COMMERCE AGE FILTER & CHECKOUT MODAL ───── */
function filterKits(category, buttonEl) {
  const pills = document.querySelectorAll('.age-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (buttonEl) buttonEl.classList.add('active');

  const cards = document.querySelectorAll('#homepage-products-grid .product-card');
  cards.forEach(card => {
    const cat = card.dataset.category || '';
    if (category === 'all' || cat === category) {
      card.style.display = 'flex';
      card.classList.add('revealed');
    } else {
      card.style.display = 'none';
    }
  });
}

function openCheckout(title, price, imageSrc) {
  const modal = document.getElementById('checkout-modal');
  const titleEl = document.getElementById('modal-kit-title');
  const priceEl = document.getElementById('modal-kit-price');

  if (!modal) return;

  if (titleEl) titleEl.textContent = title;
  if (priceEl) priceEl.textContent = `₹${price.toLocaleString()}`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function selectPayment(el) {
  const chips = document.querySelectorAll('.payment-chip');
  chips.forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function handleOrderSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('parent-name')?.value || 'Valued Customer';
  const orderId = 'IDOSTEM-' + Math.floor(100000 + Math.random() * 900000);
  
  alert(`🎉 Congratulations ${name}!\n\nYour order for IDOSTEM DIY Robotics Kit has been confirmed successfully.\n\n📦 Order ID: ${orderId}\n🚚 Free Express Delivery: Pan-India (3-5 Days)\n📹 HD Video Course Access Link sent to your phone!\n\nThank you for choosing IDOSTEM LABS!`);
  
  closeCheckout();
  if (e.target) e.target.reset();
}

/* ───── SCROLL REVEAL ENGINE ───── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('[data-reveal]');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || 0);
        setTimeout(() => {
          el.classList.add('revealed');
        }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  reveals.forEach(el => observer.observe(el));
}

/* ───── PARALLAX SCROLL ───── */
function initParallax() {
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (!parallaxEls.length) return;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (center - window.innerHeight / 2) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  }, { passive: true });
}

/* ───── ANIMATED COUNTERS ───── */
function initStats() {
  const statEls = document.querySelectorAll('.stat-number');
  if (!statEls.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 2200;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.floor(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ───── CHROMA GRID SPOTLIGHT TRACKING ───── */
function initChromaSpotlight() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ───── 3D TILT CARDS ───── */
function initTiltCards() {
  initChromaSpotlight();
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-8px) scale(1.03)`;
      const glow = card.querySelector('.card-glow');
      if (glow) {
        glow.style.background = `radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%, rgba(0,240,255,0.15), transparent 60%)`;
      }
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      const glow = card.querySelector('.card-glow');
      if (glow) glow.style.background = '';
      setTimeout(() => { card.style.transition = ''; }, 600);
    });
  });
}

/* ───── CURSOR GLOW ───── */
function initCursorGlow() {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function update() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    glow.style.left = cx + 'px';
    glow.style.top = cy + 'px';
    requestAnimationFrame(update);
  }
  update();
}

/* ───── SMOOTH ANCHORS ───── */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/* ───── TEXT SPLIT ANIMATION ───── */
function splitTextReveal(selector) {
  document.querySelectorAll(selector).forEach(el => {
    const text = el.textContent;
    el.innerHTML = '';
    el.style.opacity = '1';
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.cssText = `display:inline-block;opacity:0;transform:translateY(40px) rotateX(90deg);animation:charReveal 0.6s ${i * 0.03}s forwards cubic-bezier(0.16,1,0.3,1);`;
      el.appendChild(span);
    });
  });
}

window.addEventListener('load', () => {
  setTimeout(() => splitTextReveal('.hero h1 .gradient-text'), 400);
});
