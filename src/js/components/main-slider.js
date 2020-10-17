const slider = document.querySelector('.swiper-container');

let mySwiper;

function desktopSlider() {
  if (window.innerWidth >= 1025 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      direction: 'horizontal',
      loop: true,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },


      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth < 1025) {
    slider.dataset.mobile == 'false'

    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

desktopSlider();

window.addEventListener('resize', () => {
  desktopSlider();
});
