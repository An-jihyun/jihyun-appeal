let currentSlideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.bar');

export function showSlide(index) {
  let totalSlides = slides.length;
  if (index >= totalSlides) currentSlideIndex = 0;
  if (index < 0) currentSlideIndex = totalSlides - 1;

  document.querySelector('.slides').style.transform = `translateX(${-currentSlideIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlideIndex].classList.add('active');
}

export function moveSlide(n) {
  currentSlideIndex += n;
  showSlide(currentSlideIndex);
}

export function currentSlide(n) {
  currentSlideIndex = n - 1;
  showSlide(currentSlideIndex);
}

export function startAutoSlide() {
  setInterval(() => {
    moveSlide(1);
  }, 5000);
}