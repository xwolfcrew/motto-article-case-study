document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector('[data-id="two-col-content"]');
  const navCenter = document.querySelector(".nav-center");

  const navObserver = new IntersectionObserver(
    ([entry]) => {
      const nearTop = entry.boundingClientRect.top <= window.innerHeight * 0.3;
      navCenter.classList.toggle("is-hidden", nearTop);
    },
    { threshold: Array.from({ length: 31 }, (_, i) => i / 30) },
  );

  navObserver.observe(section);
});
