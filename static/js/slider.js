const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

let autoplayInterval = setInterval(nextSlide, 5000);

slides.forEach(slide => {
  slide.addEventListener('mouseover', () => {
    clearInterval(autoplayInterval);
  });
  
  slide.addEventListener('mouseout', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
  });
});
