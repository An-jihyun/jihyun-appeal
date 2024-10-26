const slides = document.querySelectorAll('.header_example_slide');
let currentSlide = 0;

function showHeaderSlide(index) {
    slides[currentSlide].classList.remove('active'); // 현재 슬라이드 숨김
    currentSlide = (index + slides.length) % slides.length; // 인덱스를 순환
    slides[currentSlide].classList.add('active'); // 새 슬라이드 보임
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 3000); // 3초마다 슬라이드 전환
showSlide(currentSlide); // 초기 슬라이드 표시

// 내보내기
export { showHeaderSlide, nextSlide };