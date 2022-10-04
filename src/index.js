(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const openMenuIcon = document.querySelector('.site-nav__icon');
  const header = document.querySelector('.header');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    openMenuIcon.classList.toggle('open-mode');
    header.classList.toggle('header--lightgrey-color');
    mobileMenu.classList.toggle('is-open');

    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const mobileMenu = document.querySelector('.js-menu-container');
      const clickLink = document.querySelectorAll('.modal-nav__link');
      clickLink.forEach(el => {
        el.addEventListener('click', () => {
          openMenuIcon.classList.remove('open-mode');
          header.classList.remove('header--lightgrey-color');
          mobileMenu.classList.remove('is-open');
          document.body.style.overflow = 'visible';
        });
      });
    } else {
      document.body.style.overflow = 'visible';
    }

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
