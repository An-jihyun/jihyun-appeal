function createStars() {
  const header = document.querySelector('header');
  const headerHeight = header.clientHeight; // header의 높이를 기준으로 별 배치

  // 작은 별 100개 생성
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw'; // 화면 너비에 무작위 배치
    star.style.top = Math.random() * headerHeight + 'px'; // header 높이 내에서 무작위 배치
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

  //2222222222222222222210.15
  document.addEventListener('DOMContentLoaded', function() {
    const comments = document.querySelectorAll('.comment');

    setTimeout(() => {
        comments.forEach((comment, index) => {
            setTimeout(() => {
                comment.style.opacity = '1';
                comment.style.animationPlayState = 'running';
            }, index * 500);  // 댓글이 순차적으로 나타나도록 딜레이 추가
        });
    }, 4000);  // square가 나타난 후 4초 뒤에 댓글 애니메이션 실행
});