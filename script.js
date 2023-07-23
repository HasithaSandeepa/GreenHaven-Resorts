// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scroll({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Responsive Navigation
const menuIcon = document.getElementById('menuIcon');
const navLinksContainer = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    navLinksContainer.classList.toggle('show');
});
