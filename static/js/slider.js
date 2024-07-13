// todos los elementos

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0

slides[0].classList.add("active")

//* funciones
function showSlide(n){
  slides[currentSlide].classList.remove("active")
  currentSlide = (n + slides.length) % slides.length // limita que solamente pueda tener el valores menores a el maximo de slides positivo
  slides[currentSlide].classList.add("active")
}

function resetInterval(){
  clearInterval(autoplayInterval)
  autoplayInterval = setInterval(nextSlide, 5000);
}
function nextSlide(){
  showSlide(currentSlide + 1)
  resetInterval()
}

function prevSlide(){
  showSlide(currentSlide - 1)
  resetInterval()
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

let autoplayInterval = setInterval(nextSlide, 5000);
//* bucle

slides.forEach(slide => {
  slide.addEventListener('mouseover', () => {
    clearInterval(autoplayInterval);
  });
  
  slide.addEventListener('mouseout', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
  });
});

