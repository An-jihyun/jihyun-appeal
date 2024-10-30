import { createStars } from './star.js';
import { createShootingStar, startShootingStars } from './shootingStars.js';
import { setupIntersectionObserver, setupCommentAnimation } from './animations.js';



document.addEventListener('DOMContentLoaded', () => {
  createStars();
  startShootingStars();

  const headerTitle = document.querySelector('.header_title');
  const square = document.querySelector('.square');

  headerTitle.addEventListener('animationend', () => {
    square.classList.add('show');
  });

  setupIntersectionObserver();
  setupCommentAnimation();
  showSlide(0);
  startAutoSlide();
});

import { showSlide, moveSlide, currentSlide, startAutoSlide } from './slides.js';

document.addEventListener('DOMContentLoaded', () => {
  // 초기 슬라이드 설정
  showSlide(0);
  startAutoSlide();

  // 화살표 버튼 이벤트 리스너 추가
  document.querySelector('.arrow.left').addEventListener('click', () => moveSlide(-1));
  document.querySelector('.arrow.right').addEventListener('click', () => moveSlide(1));

  // 바 클릭 이벤트 리스너 추가
  document.querySelectorAll('.bar').forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
  });
});
