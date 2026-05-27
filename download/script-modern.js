/**
 * NAVI Pro Landing Page — Interactive Script
 * Modern vanilla JS (ES6+), no frameworks
 * Uses IntersectionObserver for scroll effects
 */

;(function () {
  'use strict';

  // ─── DOM Ready ──────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initThemeToggle();
    initNavbarScroll();
    initMobileMenu();
    initScrollReveal();
    initCounterAnimation();
    initBillingToggle();
    initFormValidation();
    initToast();
    initBackToTop();
    initSmoothScroll();
    initLeadCounter();
    initActiveNavLink();
    initCTATracking();
  }

  // ─── 1. Theme Toggle ───────────────────────────────────────────────────────
  function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const STORAGE_KEY = 'navi-theme';

    // Apply saved or system preference on load
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      root.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.setAttribute('data-theme', 'dark');
    }

    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }

  // ─── 2. Navbar Scroll Effect ───────────────────────────────────────────────
  function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function onScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      lastScrollY = currentScrollY;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    // Initial check
    onScroll();
  }

  // ─── 3. Mobile Menu ────────────────────────────────────────────────────────
  function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileClose = document.getElementById('mobileClose');

    function openMenu() {
      mobileOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', openMenu);
    mobileClose.addEventListener('click', closeMenu);

    // Close on clicking any mobile link
    mobileOverlay.addEventListener('click', (e) => {
      if (e.target.classList.contains('mobile-link')) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileOverlay.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // ─── 4. Scroll Reveal ──────────────────────────────────────────────────────
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = getComputedStyle(entry.target).getPropertyValue('--delay').trim();
            const ms = delay ? parseInt(delay, 10) : 0;

            if (ms > 0) {
              setTimeout(() => entry.target.classList.add('active'), ms);
            } else {
              entry.target.classList.add('active');
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  // ─── 5. Counter Animation ──────────────────────────────────────────────────
  function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-value[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => observer.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000; // ms
    const startTime = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const current = Math.round(easedProgress * target);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ─── 6. Billing Toggle ─────────────────────────────────────────────────────
  function initBillingToggle() {
    const toggle = document.getElementById('billingToggle');
    if (!toggle) return;

    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    let isYearly = false;

    toggle.addEventListener('click', () => {
      isYearly = !isYearly;
      toggle.classList.toggle('active', isYearly);

      monthlyPrices.forEach((el) => {
        el.style.display = isYearly ? 'none' : '';
      });

      yearlyPrices.forEach((el) => {
        el.style.display = isYearly ? '' : 'none';
      });
    });
  }

  // ─── 7. Form Validation ────────────────────────────────────────────────────
  function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const fields = {
      name: {
        input: document.getElementById('form-name'),
        error: document.getElementById('name-error'),
        validate: (v) => v.trim().length >= 2 ? '' : 'Nama harus minimal 2 karakter',
      },
      phone: {
        input: document.getElementById('form-phone'),
        error: document.getElementById('phone-error'),
        validate: (v) => /^[0-9+\-\s()]{8,15}$/.test(v.trim()) ? '' : 'Nomor WhatsApp tidak valid',
      },
      email: {
        input: document.getElementById('form-email'),
        error: document.getElementById('email-error'),
        validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Email tidak valid',
      },
      store: {
        input: document.getElementById('form-store'),
        error: document.getElementById('store-error'),
        validate: (v) => {
          const trimmed = v.trim();
          if (!trimmed) return 'Link toko wajib diisi';
          try {
            const url = new URL(trimmed);
            if (!url.protocol.startsWith('http')) return 'URL harus dimulai dengan http:// atau https://';
            return '';
          } catch {
            return 'URL toko tidak valid';
          }
        },
      },
    };

    // Real-time validation on blur
    Object.values(fields).forEach(({ input, error, validate }) => {
      input.addEventListener('blur', () => {
        const msg = validate(input.value);
        error.textContent = msg;
        input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      });

      // Clear error on input
      input.addEventListener('input', () => {
        if (error.textContent) {
          error.textContent = '';
          input.setAttribute('aria-invalid', 'false');
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate all fields
      Object.values(fields).forEach(({ input, error, validate }) => {
        const msg = validate(input.value);
        error.textContent = msg;
        input.setAttribute('aria-invalid', msg ? 'true' : 'false');
        if (msg) isValid = false;
      });

      if (!isValid) return;

      // Show loading state
      const submitBtn = document.getElementById('form-submit');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');

      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = '';

      // Simulate form submission delay
      setTimeout(() => {
        // Reset loading state
        submitBtn.disabled = false;
        btnText.style.display = '';
        btnLoading.style.display = 'none';

        // Reset form
        form.reset();

        // Show toast
        showToast();

        // Track conversion
        console.log('[Analytics] Form submitted successfully');
      }, 1500);
    });
  }

  // ─── 8. Toast Notification ─────────────────────────────────────────────────
  let toastTimeout = null;

  function initToast() {
    const toastClose = document.getElementById('toastClose');
    if (toastClose) {
      toastClose.addEventListener('click', hideToast);
    }
  }

  function showToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;

    // Clear any existing timeout
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toast.classList.add('show');

    // Auto-hide after 5 seconds
    toastTimeout = setTimeout(() => {
      hideToast();
    }, 5000);
  }

  function hideToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.classList.remove('show');

    if (toastTimeout) {
      clearTimeout(toastTimeout);
      toastTimeout = null;
    }
  }

  // ─── 9. Back to Top ────────────────────────────────────────────────────────
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    let ticking = false;

    function onScroll() {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── 10. Smooth Scroll ─────────────────────────────────────────────────────
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  }

  // ─── 11. Lead Counter Animation (Hero) ─────────────────────────────────────
  function initLeadCounter() {
    const leadCount = document.getElementById('leadCount');
    if (!leadCount) return;

    let currentValue = 1234;

    function formatNumber(n) {
      return n.toLocaleString('en-US');
    }

    function incrementCounter() {
      const increment = Math.floor(Math.random() * 5) + 1;
      currentValue += increment;
      leadCount.textContent = formatNumber(currentValue);

      // Random interval between 1.5s and 4s
      const nextDelay = 1500 + Math.random() * 2500;
      setTimeout(incrementCounter, nextDelay);
    }

    // Start after a brief delay
    setTimeout(incrementCounter, 2000);
  }

  // ─── 12. Active Nav Link ───────────────────────────────────────────────────
  function initActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = [];

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          sections.push({ el: section, id: href });
        }
      }
    });

    if (!sections.length) return;

    let ticking = false;

    function updateActiveLink() {
      const scrollY = window.scrollY;
      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const offset = navbarHeight + 100;

      let currentSection = sections[0];

      for (const section of sections) {
        const top = section.el.offsetTop - offset;
        if (scrollY >= top) {
          currentSection = section;
        }
      }

      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentSection.id) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveLink);
        ticking = true;
      }
    }, { passive: true });

    // Initial check
    updateActiveLink();
  }

  // ─── 13. Hero CTA Tracking ─────────────────────────────────────────────────
  function initCTATracking() {
    const trackedIds = [
      'hero-cta-primary',
      'hero-cta-secondary',
      'pricing-starter',
      'pricing-growth',
      'pricing-enterprise',
      'cta-main',
      'cta-demo',
    ];

    trackedIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', () => {
          console.log(`[Analytics] CTA clicked: ${id}`);
        });
      }
    });
  }

})();
