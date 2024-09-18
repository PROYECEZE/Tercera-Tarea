document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.js-Earnings-left-side');
  const indicators = document.querySelectorAll('.js-indicator');
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
    const nextSlide = (currentSlide + 1) % totalSlides;
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

document.querySelector('.js-Earnings-right-eye-toggle').addEventListener('click', function () {
  const passwordInput = document.querySelector('.js-Password');
  const eyeOpen = document.querySelector('.js-eye-closed'); 
  const eyeClosed = document.querySelector('.js-eye-open'); 
  const visualization= document.querySelector('.js-Password-open');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'; // password
    eyeOpen.style.display = 'none'; // hide password
    eyeClosed.style.display = 'inline';// password visualization
    visualization.textContent = 'password text is hidden';
  } else {
    passwordInput.type = 'password'; 
    eyeOpen.style.display = 'inline'; 
    eyeClosed.style.display = 'none'; 
    visualization.textContent = 'password text is visible';
  }
});
