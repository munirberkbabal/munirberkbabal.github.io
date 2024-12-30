let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === currentSlide) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Otomatik slider geçişi
setInterval(nextSlide, 5000);
