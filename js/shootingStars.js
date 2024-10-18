export function createShootingStar() {
    const header = document.querySelector('header');
    const star = document.createElement('div');
    star.classList.add('star');
  
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 50 + 'vh';
    star.style.width = '3px';
    star.style.height = '3px';
    star.style.animation = 'shootingStar 1s linear';
  
    header.appendChild(star);
  
    setTimeout(() => {
      star.remove();
    }, 1000);
  }
  
  export function startShootingStars() {
    setInterval(() => {
      createShootingStar();
    }, Math.random() * 5000 + 2000);
  }