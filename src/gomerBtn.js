const btnUp = {
  el: document.querySelector('.bottom-top'),
  scrolling: false,
  show() {
    if (this.el.classList.contains('bottom-top_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.remove('bottom-top_hide');
      this.el.classList.add('bottom-top_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('bottom-top_hiding');
      }, 300);
    }
  },
  hide() {
    if (!this.el.classList.contains('bottom-top_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.add('bottom-top_hiding');
      window.setTimeout(() => {
        this.el.classList.add('bottom-top_hide');
        this.el.classList.remove('bottom-top_hiding');
      }, 300);
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
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 400) {
        // сделаем кнопку .btn-up видимой
        this.show();
      } else {
        // иначе скроем кнопку .btn-up
        this.hide();
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.bottom-top').onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();