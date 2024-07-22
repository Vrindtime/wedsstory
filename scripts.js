let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');
const initialNav = document.querySelector('.initial-nav');
const stickyNav = document.querySelector('.sticky-nav');
const carouselContainer = document.querySelector('.carousel-container');
const heroText = document.querySelector('.hero-text');

const titles = ["FOR CELEBRATIONS", "FOR YOUR SPECIAL DAY", "FOR EVERY MEMORY"];
const subtitles = ["For your moments, narrates your story.", "Cherish every special moment.", "Capture every beautiful memory."];

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'inactive');
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.add('inactive');
        }
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    heroText.innerHTML = `<h1>${titles[index]}</h1><p>${subtitles[index]}</p>`;
    heroText.style.opacity = '1'; // Reset the opacity for the new text
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
    if (window.innerWidth >= 768) {
        if (carouselBottom <= 0) {
            stickyNav.style.display = 'flex';
        } else {
            stickyNav.style.display = 'none';
        }
    } else {
        stickyNav.style.display = 'none';
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
