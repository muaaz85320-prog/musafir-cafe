const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;
  slides[currentSlide].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
  currentSlide--;
  showSlide(currentSlide);
});

setInterval(() => {
  currentSlide++;
  showSlide(currentSlide);
}, 5000);