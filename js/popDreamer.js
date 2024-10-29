// 슬라이드 전환 로직
let activeSlide = 0;
const slides = document.querySelectorAll('.slide');
const playButton = document.querySelector('.carousel--play');

// DOMContentLoaded 이벤트를 사용하여 DOM이 완전히 로드된 후에 애니메이션을 실행
document.addEventListener("DOMContentLoaded", () => {
    // 슬라이드 전환 이벤트
    playButton.addEventListener('click', () => {
        slides[activeSlide].classList.remove('active');
        activeSlide = (activeSlide + 1) % slides.length;
        slides[activeSlide].classList.add('active');
    });

    // 둥근 마스크 애니메이션 설정
    function animateBlob() {
        const blobPath = document.querySelector('#blob-path');
        if (!blobPath) return;

        // Blob path 애니메이션 설정
        gsap.fromTo(
            blobPath,
            { d: 'M400,300 Q480,150 560,300 T 400,500 T 240,300 T 400,100 Z' },
            { 
                d: 'M400,320 Q470,150 580,300 T 400,530 T 220,300 T 400,120 Z',
                duration: 3,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true
            }
        );
    }

    // 애니메이션 시작
    animateBlob();
});