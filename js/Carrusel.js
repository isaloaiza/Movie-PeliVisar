let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

// Mostrar la primera imagen al cargar la página
showSlide();

// Cambiar de imagen cada 3 segundos (ajusta el intervalo según tus preferencias)
setInterval(nextSlide, 3000);