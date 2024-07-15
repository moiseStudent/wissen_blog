// todos los elementos

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0

function calcSlide(n){
  return(n + slides.length) % slides.length
} 

//* funciones
function showSlide(n){
  slides[calcSlide(1+currentSlide)].classList.remove("right")
  slides[calcSlide(2+currentSlide)].classList.remove("left")
  currentSlide = calcSlide(n)// limita que solamente pueda tener el valores menores a el maximo de slides positivo

  slides[calcSlide(1+currentSlide)].classList.add("right")
  slides[calcSlide(2+currentSlide)].classList.add("left")
}

function resetInterval(){
  clearInterval(autoplayInterval)
  autoplayInterval = setInterval(rightSlide, 5000);
}


function leftSlide(){
  showSlide(currentSlide + 1)
  resetInterval()
}

function rightSlide(){
  showSlide(currentSlide - 1)
  resetInterval()
}

prevBtn.addEventListener('click', leftSlide);
nextBtn.addEventListener('click', rightSlide);

let autoplayInterval = setInterval(rightSlide, 5000);
//* bucle

slides.forEach(slide => {
  slide.addEventListener('mouseover', () => {
    clearInterval(autoplayInterval);
  });
  
  slide.addEventListener('mouseout', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
  });
});

