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
  const passwordInput = document.getElementById('js-Password');
  const eyeOpen = document.querySelector('.js-eye-closed'); 
  const eyeClosed = document.querySelector('.js-eye-open'); 
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'; // password
    eyeOpen.style.display = 'none'; // hide password
    eyeClosed.style.display = 'inline';// password visualization
  } else {
    passwordInput.type = 'password'; 
    eyeOpen.style.display = 'inline'; 
    eyeClosed.style.display = 'none'; 
  }
});

document.getElementById('js-sign-up-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // form fields
  const firstName = document.getElementById('js-first-name').value.trim();
  const lastName = document.getElementById('js-last-name').value.trim();
  const email = document.getElementById('js-email').value.trim();
  const password = document.getElementById('js-Password').value.trim();
  const errorMessage = document.getElementById('js-error-message');
  const successMessage = document.getElementById('js-success-message');

   // Field Verifier 
   if (!firstName || !lastName || !email || !password) {
    errorMessage.style.display = 'block'; 
    successMessage.style.display = 'none'; 
  } else {
    errorMessage.style.display = 'none'; 
    successMessage.style.display = 'block'; 
  }
});