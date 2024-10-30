let currentSlideIndex = 0;

// 슬라이드를 표시하는 함수
export function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.bar');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = totalSlides - 1;
  } else {
    currentSlideIndex = index;
  }

  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(${-currentSlideIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlideIndex].classList.add('active');
}

// 화살표 클릭 시 슬라이드를 이동하는 함수
export function moveSlide(step) {
  showSlide(currentSlideIndex + step);
}

// 특정 슬라이드로 이동하는 함수
export function currentSlide(index) {
  showSlide(index - 1);
}

// 자동 슬라이드 기능
export function startAutoSlide() {
  setInterval(() => {
    moveSlide(1);
  }, 5000); // 5초마다 슬라이드 이동
}