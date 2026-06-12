const cards = document.querySelectorAll('.product-card, .category-grid article');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

cards.forEach((card) => {
  card.style.opacity = '0';
  card.style.transform += ' translateY(18px)';
  card.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(card);
});

const style = document.createElement('style');
style.textContent = `.show { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);
