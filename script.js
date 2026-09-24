// Subtle scroll-reveal — fades and lifts elements into place once,
// as they enter the viewport. Skipped if the visitor has motion
// reduction turned on at the OS level.
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');

  if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { observer.observe(el); });
  }

  // One-time hero entrance on load (above the fold, so no scroll needed)
  var hero = document.querySelector('.reveal-load');
  if (hero && !prefersReduced) {
    requestAnimationFrame(function () {
      setTimeout(function () { hero.classList.add('is-visible'); }, 60);
    });
  } else if (hero) {
    hero.classList.add('is-visible');
  }
})();