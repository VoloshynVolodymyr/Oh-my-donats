var swiper = new Swiper('.swiper', {
  slideClass: 'swiper__slide',
  wrapperClass: 'swiper__wrapper',
  // Підключення пагінації
  pagination: {
    el: '.swiper__pagination',
    // Пагінація типу фракції ([поточний слайд/загальна кіль-ть] в цифрах)
    type: 'fraction',
    
  },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev'  

  // },
  
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,

  },

  autoplay: {
    delay: 3000,
  },

  // LДозволити свайпи
  allowTouchMove: true,
  touchRatio: 1,
  // grabCursor: true,

  // Відступ між слайдами
  spaceBetween: 32,

  // Встановлюємо активний стартовий слайд
  initialSlide: 1,

  // Встановлюємо активний слайд по центру
  centeredSlides: true,

  // Зациклюємо слайдер
  loop: true,

  // Встановлюємо швидкість перелистування слайдів
  speed: 400,

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
