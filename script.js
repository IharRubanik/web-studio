const swiper = new Swiper(".flex-elem__slider", {
  // Optional parameters
  // effect: 'fade',
  effect: "coverflow",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperMobile = new Swiper(".main-mobile__slider", {
  // Optional parameters
  direction: "vertical",
  // effect: 'fade',
  // effect: 'coverflow',
  loop: true,

  // If we need pagination
  pagination: {
    el: ".mobile-pagination",
    clickable: true,
  },
});

let vh = window.innerHeight * 0.01;
// Затем устанавливаем значение свойства --vh
// для корневого элемента
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  // Выполняем тот же скрипт, что и раньше
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});


// Собираем переменные
let connection = document.querySelectorAll(".connection"),
  sociaContainer = document.querySelector(".social-container"),
  wrapper = document.querySelector(".wrapper");
  // Проходим по массиву циклом
for (let i = 0; i < connection.length; i++) {
  // включаем событие клик на каждый элемент из массива
  connection[i].onclick = function () {
    // добавляем класс active
    sociaContainer.classList.toggle("active");
// Если у элемента есть класс active
    if (sociaContainer.classList.contains("active")) {
      // При клике удаляем его
      sociaContainer.onclick = function () {
        sociaContainer.classList.toggle("active");
      };
    }
  };
}