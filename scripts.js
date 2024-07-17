// scripts.js

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');
const initialNav = document.querySelector('.initial-nav');
const stickyNav = document.querySelector('.sticky-nav');
const carouselContainer = document.querySelector('.carousel-container');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlide(currentSlide);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

window.addEventListener('scroll', () => {
    const carouselBottom = carouselContainer.getBoundingClientRect().bottom;
    if (carouselBottom <= 0) {
        stickyNav.style.display = 'flex';
    } else {
        stickyNav.style.display = 'none';
    }
});
