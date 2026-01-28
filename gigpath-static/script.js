// 1) Sticky navigation shadow on scroll
(() => {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 50) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// 2) Mobile hamburger menu toggle
(() => {
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");
  if (!btn || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("active", open);
    btn.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  btn.addEventListener("click", () => setOpen(!menu.classList.contains("active")));

  // Close menu when clicking a link
  menu.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) setOpen(false);
  });

  // Close menu on escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();

// 3) Smooth scroll for anchor links (safe for double-click open)
(() => {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();

// 4) FAQ accordion (only one open at a time)
(() => {
  const items = Array.from(document.querySelectorAll(".faq__item"));
  if (!items.length) return;

  const closeAll = (except) => {
    items.forEach((it) => {
      if (it === except) return;
      it.classList.remove("active");
      const btn = it.querySelector(".faq__q");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  };

  items.forEach((item) => {
    const btn = item.querySelector(".faq__q");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const willOpen = !item.classList.contains("active");
      closeAll(item);
      item.classList.toggle("active", willOpen);
      btn.setAttribute("aria-expanded", String(willOpen));
    });
  });
})();

// 5) Fade-in on scroll animations
(() => {
  const els = document.querySelectorAll(".animate-on-scroll");
  if (!els.length) return;

  // Fallback if IntersectionObserver isn't available
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => observer.observe(el));
})();

