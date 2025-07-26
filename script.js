// Sanfte Scroll-Animation bei Klick auf "Projekte ansehen"
document.querySelector('.cta').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});