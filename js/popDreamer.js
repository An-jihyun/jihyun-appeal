let currentIndex = 0;

function moveSlide(direction) {
    const container = document.querySelector(".container_pop");
    const items = document.querySelectorAll(".popitem");
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    container.style.transform = `translateX(-${currentIndex * 100}%)`;
}



