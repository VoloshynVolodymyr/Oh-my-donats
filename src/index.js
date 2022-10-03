(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

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

// btnUP кнопка Гомер
const btnUp = {
  el: document.querySelector('.bottom-top'),
  scrolling: false,
  show() {
    if (
      this.el.classList.contains('bottom-top_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.remove('bottom-top_hide');
      this.el.classList.add('bottom-top_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('bottom-top_hiding');
      }, 400);
    }
  },
  hide() {
    if (
      !this.el.classList.contains('bottom-top_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.add('bottom-top_hiding');
      window.setTimeout(() => {
        this.el.classList.add('bottom-top_hide');
        this.el.classList.remove('bottom-top_hiding');
      }, 400);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 400px
      if (scrollY > 400) {
        // сделаем кнопку .bottom-top видимой
        this.show();
      } else {
        // иначе скроем кнопку .bottom-top
        this.hide();
      }
    });
    // при нажатии на кнопку .bottom-top
    document.querySelector('.bottom-top').onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
