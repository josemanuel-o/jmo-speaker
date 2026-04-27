const yearNode = document.getElementById('year');
const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');

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
