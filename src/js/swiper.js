var swiper = new Swiper('.swiper', {
  slideClass: 'swiper__slide',
  wrapperClass: 'swiper__wrapper',
  // Підключення пагінації
  pagination: {
    el: '.swiper__pagination',
    // Пагінація типу фракції ([поточний слайд/загальна кіль-ть] в цифрах)
    type: 'fraction',
  },

  autoplay: {
    delay: 3000,
  },

  // Заборонити свайпи
  allowTouchMove: false,

  // Відступ між слайдами
  spaceBetween: 32,

  // Встановлюємо активний стартовий слайд
  initialSlide: 1,

  // Встановлюємо активний слайд по центру
  centeredSlides: true,

  // Зациклюємо слайдер
  loop: true,

  // Встановлюємо швидкість перелистування слайдів
  speed: 500,

  effect: 'slide',

  breakpoints: {
    320: {
      // Кіль-то слайдів для показу
      slidesPerView: 1,
    },
    768: {
      // Кіль-то слайдів для показу
      slidesPerView: 3,
    },
  },
});
