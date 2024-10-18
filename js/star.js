export function createStars() {
    const header = document.querySelector('header');
    const headerHeight = header.clientHeight;
  
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * headerHeight + 'px';
      star.style.animationDuration = Math.random() * 2 + 1 + 's';
      header.appendChild(star);
    }
  }