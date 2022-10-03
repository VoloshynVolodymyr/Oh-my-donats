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
