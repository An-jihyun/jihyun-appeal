// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// const dots = document.querySelectorAll('.dot');
// const leftArrow = document.querySelector('.left-arrow');
// const rightArrow = document.querySelector('.right-arrow');

// let currentIndex = 0;

// function updateSliderPosition() {
//   slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//   updateDots();
// }

// function updateDots() {
//   dots.forEach((dot, index) => {
//     if (index === currentIndex) {
//       dot.classList.add('active');
//     } else {
//       dot.classList.remove('active');
//     }
//   });
// }

// function goToSlide(index) {
//   currentIndex = index;
//   updateSliderPosition();
// }

// leftArrow.addEventListener('click', () => {
//   currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//   updateSliderPosition();
// });

// rightArrow.addEventListener('click', () => {
//   currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
//   updateSliderPosition();
// });

// dots.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     goToSlide(index);
//   });
// });

// // 자동 슬라이드 (옵션)
// setInterval(() => {
//   currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
//   updateSliderPosition();
// }, 5000); // 5초마다 자동 이동

// //000000000000000
// // 불빛 만들기
// const footer = document.querySelector('.footer');
// const grass = document.querySelector('.grass');

// // 불빛을 생성하여 하단에서 위로 올리는 함수
// function createLight() {
//   const light = document.createElement('div');
//   light.classList.add('light');
//   light.style.left = `${Math.random() * 100}%`; // 랜덤한 위치에서 불빛이 나오도록 설정
//   light.style.bottom = '0px'; // 시작 위치를 하단으로 설정
//   footer.appendChild(light);

//   // 일정 시간 후 불빛을 제거하여 성능을 유지
//   setTimeout(() => {
//     light.remove();
//   }, 3000); // 애니메이션 시간과 동일
// }

// // 일정한 간격으로 불빛을 생성
// setInterval(createLight, 1000); // 1초마다 불빛이 생성되도록 설정

// // // 마우스 커서에 불빛 추가
// // document.addEventListener('mousemove', (e) => {
// //     // 커서 불빛
// //     const cursorLight = document.createElement('div');
// //     cursorLight.classList.add('cursor-light');
    
// //     // 커서 근처에서 불빛 생성
// //     cursorLight.style.left = `${e.pageX}px`;
// //     cursorLight.style.top = `${e.pageY}px`;
  
// //     document.body.appendChild(cursorLight);
  
// //     // 일정 시간이 지나면 불빛을 제거하여 성능 유지
// //     setTimeout(() => {
// //       cursorLight.remove();
// //     }, 3000); // 3초 후 제거
// //   });

//   //222222222
//   let lastLightTime = 0; // 마지막 불빛이 생성된 시간을 저장하는 변수
// const lightInterval = 200; // 불빛이 생성되는 최소 시간 간격 (밀리초 단위, 0.5초)

// document.addEventListener('mousemove', (e) => {
//   const currentTime = Date.now(); // 현재 시간을 밀리초로 가져옴
  
//   // 불빛 생성 간격을 체크 (지정한 시간 간격이 지나야 생성)
//   if (currentTime - lastLightTime > lightInterval) {
//     // 커서 불빛 생성
//     const cursorLight = document.createElement('div');
//     cursorLight.classList.add('cursor-light');
    
//     // 커서 근처에서 불빛 생성
//     cursorLight.style.left = `${e.pageX}px`;
//     cursorLight.style.top = `${e.pageY}px`;
    
//     document.body.appendChild(cursorLight);

//     // 불빛을 3초 후에 제거하여 성능 유지
//     setTimeout(() => {
//       cursorLight.remove();
//     }, 3000); // 3초 후 제거

//     // 마지막 불빛 생성 시간을 업데이트
//     lastLightTime = currentTime;
//   }
// });

// //444444444
// // HTML 요소들을 모두 선택
// const circleContainers = document.querySelectorAll('.circle-container');

// // 각 circle-container에 hover 이벤트 적용
// circleContainers.forEach(container => {
//     const balloon = container.querySelector('.balloon');
    
//     container.addEventListener('mouseenter', () => {
//         // hover 시 기존 텍스트를 변경하고 새로운 텍스트로 대체
//         const originalText = container.getAttribute('data-text');
//         const hoverText = container.getAttribute('data-hover-text');
        
//         balloon.textContent = hoverText;  // hover 시 새로운 텍스트 표시
//         balloon.style.transform = 'translateY(-10px)';  // 말풍선을 위로 이동하여 이미지와 겹치지 않음
//     });

//     container.addEventListener('mouseleave', () => {
//         // hover가 끝나면 원래 텍스트로 복구
//         balloon.textContent = container.getAttribute('data-text');
//         balloon.style.transform = 'translateY(0px)';  // 원래 위치로 복귀
//     });
// });

//555555555555555555555555555555555555555555
// 랜덤 별 생성
function createStars() {
  const header = document.querySelector('header');

  // 작은 별 100개 생성
  for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * 100 + 'vw'; // 화면 너비에 무작위 배치
      star.style.top = Math.random() * 100 + 'vh'; // 화면 높이에 무작위 배치
      star.style.animationDuration = Math.random() * 2 + 1 + 's'; // 반짝임 속도 다르게
      header.appendChild(star);
  }
}

// 별똥별 생성
function createShootingStar() {
  const header = document.querySelector('header');
  const star = document.createElement('div');
  star.classList.add('star');

  // 시작 위치와 크기 설정
  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 50 + 'vh'; // 화면 위쪽에서 시작
  star.style.width = '3px';
  star.style.height = '3px';
  star.style.animation = 'shootingStar 1s linear';

  header.appendChild(star);

  // 1초 후 별똥별 삭제
  setTimeout(() => {
      star.remove();
  }, 1000);
}

// 일정 시간마다 별똥별 생성
setInterval(() => {
  createShootingStar();
}, Math.random() * 5000 + 2000); // 2초에서 7초 사이

// DOM 로드 시 별 생성
document.addEventListener('DOMContentLoaded', () => {
  createStars(); // 별 애니메이션

// 텍스트 애니메이션이 끝나면 네모 div가 나타나게 트리거 설정
const headerTitle = document.querySelector('.header_title');
const square = document.querySelector('.square');

// 텍스트의 마지막 애니메이션이 끝난 후에 실행
headerTitle.addEventListener('animationend', () => {
  square.classList.add('show');
});

// 스크롤할 때 문구 애니메이션 트리거 설정
const options = {
  threshold: 0.1 // 요소가 화면에 10% 이상 보이면 트리거
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('show')) {
      entry.target.classList.add('show');
    }
  });
}, options);

const slideInElements = document.querySelectorAll('.slide_in_text');
slideInElements.forEach(el => observer.observe(el));

// 스크롤 시 직사각형 애니메이션 트리거 설정
const rectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const rectangles = document.querySelectorAll('.rectangle');
rectangles.forEach(rect => rectObserver.observe(rect));})

//22222222222222222222222222222222222222

  // 스크롤할 때 문구 애니메이션 트리거 설정
  const options = {
    threshold: 0.5 // 요소가 화면에 50% 이상 보이면 트리거
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('show')) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 }); // 0.1로 조정하여 좀 더 일찍 트리거될 수 있도록 설정

  const slideInElements = document.querySelectorAll('.slide_in_text');
  slideInElements.forEach(el => observer.observe(el));

  // 스크롤 시 직사각형 애니메이션 트리거 설정
  const rectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  const rectangles = document.querySelectorAll('.rectangle');
  rectangles.forEach(rect => rectObserver.observe(rect));


// entries.forEach(entry => {
//   if (entry.isIntersecting && !entry.target.classList.contains('show')) {
//     entry.target.classList.add('show');
//   }
// }); //show 클래스를 이미 가지고 있는 요소는 다시 트리거되지 않도록 설정