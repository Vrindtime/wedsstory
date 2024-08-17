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