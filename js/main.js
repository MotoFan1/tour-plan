const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  // Add Keyboard Control
  keyboard: {
    enabled: "true",
    onlyInViewport: "true",
  },
});
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: ".reviews-slider__button--next",
    nextEl: ".reviews-slider__button--prev",
  },
});
