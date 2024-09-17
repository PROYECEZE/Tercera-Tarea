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
    visualization.textContent = 'password hide';
  } else {
    passwordInput.type = 'password'; 
    eyeOpen.style.display = 'inline'; 
    eyeClosed.style.display = 'none'; 
    visualization.textContent = 'password visualization';
  }
});

document.querySelector('.js-sign-up-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // form fields
  const firstName = document.querySelector('.js-first-name').value.trim();
  const lastName = document.querySelector('.js-last-name').value.trim();
  const email = document.querySelector('.js-email').value.trim();
  const password = document.querySelector('.js-Password').value.trim();
  const errorMessage = document.querySelector('.js-error-message');
  const successMessage = document.querySelector('.js-success-message');

   // Field Verifier 
   if (!firstName || !lastName || !email || !password) {
    errorMessage.style.display = 'block'; 
    successMessage.style.display = 'none'; 
  } else {
    errorMessage.style.display = 'none'; 
    successMessage.style.display = 'block'; 
  }
});