const yearNode = document.getElementById('year');
const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
const heroMedia = document.querySelector('.hero-media');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

// Menú móvil simple: abre/cierra navegación sin dependencias.
if (menuButton && mainNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Si existe assets/hero-jmo.jpg, se usa como fondo. Si no, permanece el placeholder "JMO".
if (heroMedia) {
  const imageSrc = heroMedia.getAttribute('data-hero-image');

  if (imageSrc) {
    const testImage = new Image();
    testImage.src = imageSrc;

    testImage.addEventListener('load', () => {
      heroMedia.style.backgroundImage = `url('${imageSrc}')`;
      heroMedia.classList.add('has-image');
    });
  }
}
