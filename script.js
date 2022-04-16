const swiper = new Swiper('.flex-elem__slider', {
    // Optional parameters
    // effect: 'fade',
    effect: 'coverflow',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperMobile = new Swiper('.main-mobile__slider', {
    // Optional parameters
    direction: 'vertical',
    // effect: 'fade',
    // effect: 'coverflow',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.mobile-pagination',
      clickable: true,
    },
  });

  let vh = window.innerHeight * 0.01;

// Затем устанавливаем значение свойства --vh
// для корневого элемента
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});