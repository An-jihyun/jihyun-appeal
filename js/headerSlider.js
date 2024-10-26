let currentIndex = 0;

function showNextSlide() {
    const headerSlider = document.querySelector('.header_example_slider');
    const headerSlides = document.querySelectorAll('.header_example_slide');
    currentIndex++;

    if (currentIndex >= headerSlides.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 500; // 슬라이더 높이와 동일하게 설정 (500px)
    headerSlider.style.transform = `translateY(${offset}px)`;
}

setInterval(showNextSlide, 5000); // 5초마다 다음 슬라이드로 이동