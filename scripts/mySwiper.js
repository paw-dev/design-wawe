
// Получаем ссылку на контейнер Swiper
let swiperContainer = document.querySelector('.swiper-wrapper');

// Получаем HTML содержимое вашего слайда
let slideContent = document.querySelector('.swiper-slide').innerHTML;

// Добавляем 10 копий вашего слайда в контейнер
for (let i = 0; i < 10; i++) {
  let newSlide = document.createElement('div');
  newSlide.classList.add('swiper-slide');
  newSlide.innerHTML = slideContent;
  swiperContainer.appendChild(newSlide);
}


const swiper = new Swiper('.image-slider', {
    // Стрелки
    
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    slideToClickedSlide: true,

    // Автовысота
    autoHeight: true,

    // slidesPerView: 2,

    // Отступы
    spaceBetween: 40,

    // Бесконечность
    loop: true,



});



swiper.pagination.update();