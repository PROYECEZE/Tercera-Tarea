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

const signupButton = document.getElementById('signupButton');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

document.addEventListener('click', () => {
  // Basic validation for email and password (you should add more robust validation)
  if (emailInput.value.trim() === '' || !emailInput.value.includes('@') || passwordInput.value.trim() === '') {
    alert('Please fill in all fields correctly.');
    return;
  }

  // Here you would handle the actual signup process.
  // For example:
  // - Send an AJAX request to your backend to create the user account.
  // - Redirect the user to a success page.
  console.log('Sign up button clicked!');
  console.log('Email:', emailInput.value);
  console.log('Password:', passwordInput.value);
});
