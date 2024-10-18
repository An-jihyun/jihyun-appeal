export function setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('show')) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);
  
    const slideInElements = document.querySelectorAll('.slide_in_text');
    slideInElements.forEach((el) => observer.observe(el));
  
    const rectangles = document.querySelectorAll('.rectangle');
    rectangles.forEach((rect) => observer.observe(rect));
  }
  
  export function setupCommentAnimation() {
    const comments = document.querySelectorAll('.comment');
    setTimeout(() => {
      comments.forEach((comment, index) => {
        setTimeout(() => {
          comment.style.opacity = '1';
          comment.style.animationPlayState = 'running';
        }, index * 500);
      });
    }, 4000);
  }