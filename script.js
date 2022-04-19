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

let lang = document.querySelectorAll(".lang_button"),
  langActive = document.querySelectorAll(".language"),
  body = document.querySelector("body");

lang.forEach((buttonLang) => {
  buttonLang.addEventListener("click", function () {
    langActive.forEach((language) => {
      language.classList.toggle("active");
    });
  });
});




// for (let i = 0; i < lang.length; i++) {
//   lang[i].classList.contains("active")

//     body.addEventListener('click', function(){
//       console.log(123)
//       // language.classList.remove("active")
//     })

// }

// for (let i = 0; i < lang.length; i++) {
//   lang[i].onclick = function () {
//     for (let p = 0; p < langActive.length; p++) {
//       langActive[p].classList.toggle("active");
//     }
//   };
// }

// function addClass() {
//   for (let i = 0; i < lang.length; i++) {
//     lang[i].addEventListener("click", removeClass);
//   }
// }

// for (let i = 0; i < lang.length; i++) {
//   lang[i].onclick = function () {
//     for (let p = 0; p < langActive.length; p++) {
//       langActive[p].classList.toggle("active");
//     }
//   };
// }
// function removeClass() {
//   for (let p = 0; p < langActive.length; p++) {
//     if (langActive[p].classList.contains("active")) {
//       langActive[p].classList.remove("active");
//     }
//   }
// }

// body.addEventListener('click', removeClass);

// removeClass()

// if (langActive[p].classList.contains("active")) {
//   body.onclick = function () {
//     console.log(123);
//     langActive[p].classList.remove("active");
//   }

// }
// body.onclick = function() {
//   for (let p = 0; p < langActive.length; p++) {
//   if (langActive[p].classList.contains("active")) {
//   console.log(123);
// }
// }
// }
// for (let x = 0; x < langActive.length; x++)
//   if (langActive[x].classList.contains("active")) {

//     body.onclick = function () {

//       // console.log(123123);

//       langActive[x].classList.remove("active");

//     }

//   }
