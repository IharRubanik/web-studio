// const swiper = new Swiper('.flex-elem__slider', {
//     // Optional parameters
//     // effect: 'fade',
//     effect: 'coverflow',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

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