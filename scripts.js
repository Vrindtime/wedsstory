let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');
const initialNav = document.querySelector('.initial-nav');
const stickyNav = document.querySelector('.sticky-nav');
const carouselContainer = document.querySelector('.carousel-container');
const heroText = document.querySelector('.hero-text');

const titles = ["FOR CELEBRATIONS", "FOR LOVE", "FOR JOY"];
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
    const carouselBottom = carouselContainer.getBoundingClientRect().bottom +500;
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

document.addEventListener('DOMContentLoaded', () => {
    // Get the current page URL
    const path = window.location.pathname.split('/').pop(); // Get the current file name

    // If the file name is empty, it means we're on the home page (index.html)
    const isHomePage = path === '' || path === 'index.html';

    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Set the active class based on the current page URL
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop(); // Get the link's file name
        if (isHomePage && href === 'home.html' || path === href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Add event listener to handle click events and update the active link
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', function() {
        document.querySelectorAll('nav a').forEach((el) => el.classList.remove('active'));
        this.classList.add('active');
    });
});

// review
let currentReviewIndex = 0;
const reviews = document.querySelectorAll('.review');
const counter = document.querySelector('.review-counter');

function updateCounter() {
    counter.textContent = `${(currentReviewIndex + 1).toString().padStart(2, '0')} / ${reviews.length.toString().padStart(2, '0')}`;
}

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.remove('active');
        if (i === index) {
            review.classList.add('active');
        }
    });
    updateCounter();
}

function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    showReview(currentReviewIndex);
}

function prevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    showReview(currentReviewIndex);
}

// Initialize the first review as active and update the counter
showReview(currentReviewIndex);
setInterval(nextReview, 4000);


