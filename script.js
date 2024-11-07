let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    currentIndex += step;
    
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 3000);