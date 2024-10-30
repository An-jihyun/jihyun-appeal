export function moveSeedling(event) {
    const sprout = document.querySelector('.sprout');
    const seedling = document.getElementById('seedling');
    const seedlingRect = seedling.getBoundingClientRect();
    const seedlingCenter = {
        x: seedlingRect.left + seedlingRect.width / 2,
        y: seedlingRect.top + seedlingRect.height / 2
    };
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const distanceX = mouseX - seedlingCenter.x;
    const distanceY = mouseY - seedlingCenter.y;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    // 마우스가 새싹 근처에 있을 때만 흔들림 효과 추가
    const maxDistance = 150;
    if (distance < maxDistance) {
        sprout.classList.add('hovered');
    } else {
        sprout.classList.remove('hovered');
    }
}