document.addEventListener('DOMContentLoaded', function () {
  let slides = document.querySelectorAll('.js-Earnings-left-side');
  let indicators = document.querySelectorAll('.js-indicator');
  let currentSlide = 0;
  const totalSlides = slides.length;
  let autoSlideInterval;

  function goToSlide(slideIndex) {
    slides.forEach((slide, index) => {
      slide.style.display = (index === slideIndex) ? '' : 'none';
    });

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === slideIndex);
    });

    currentSlide = slideIndex;
  }

  function autoSlide() {
    let nextSlide = (currentSlide + 1) % totalSlides;
    goToSlide(nextSlide);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }


  goToSlide(currentSlide);
  startAutoSlide();

  slides.forEach(slide => {
    slide.addEventListener('mouseenter', stopAutoSlide); 
    slide.addEventListener('mouseleave', startAutoSlide);
  });
});