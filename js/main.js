import { createStars } from './stars.js';
import { createShootingStar, startShootingStars } from './shootingStars.js';
import { setupIntersectionObserver, setupCommentAnimation } from './animations.js';
import { showSlide, startAutoSlide } from './slides.js';

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