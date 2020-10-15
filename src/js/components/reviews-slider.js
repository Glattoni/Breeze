const ReviewsSlider = document.querySelector('.reviews__swiper-container');

let mySwiper1;

function ReviewsDesktopSlider() {
  if (window.innerWidth >= 900 && ReviewsSlider.dataset.mobile == 'false') {
    mySwiper1 = new Swiper(ReviewsSlider, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.reviews-pagination',
        clickable: true,
      },
    });

    ReviewsSlider.dataset.mobile = 'true';
  }

  if (window.innerWidth < 900) {
    ReviewsSlider.dataset.mobile == 'false'

    if (ReviewsSlider.classList.contains('swiper-container-initialized')) {
      mySwiper1.destroy();
    }
  }
}

ReviewsDesktopSlider();

window.addEventListener('resize', () => {
  ReviewsDesktopSlider();
});
