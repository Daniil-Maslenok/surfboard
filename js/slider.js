const slider = $(".products").bxSlider({
  pager: false,
  controls: false
});

$('.product-slider__arrow--slider-left').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
})

$('.product-slider__arrow--slider-right').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
})