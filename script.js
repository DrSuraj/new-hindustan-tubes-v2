// Mobile Menu Toggle
// const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// const navLinks = document.querySelector('.nav-links');

// mobileMenuBtn.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });


// Hero Slider
const slides = document.querySelectorAll('.slide');
const sliderBtns = document.querySelectorAll('.slider-btn');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    sliderBtns.forEach(btn => btn.classList.remove('active'));
    
    slides[index].classList.add('active');
    sliderBtns[index].classList.add('active');
    currentSlide = index;
}

sliderBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide change
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Products Slider
// const sliderContainer = document.querySelector('.slider-container');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// nextBtn.addEventListener('click', () => {
//     sliderContainer.scrollBy({ left: 300, behavior: 'smooth' });
// });

// prevBtn.addEventListener('click', () => {
//     sliderContainer.scrollBy({ left: -300, behavior: 'smooth' });
// });

// Products Slider - Updated for new navbar
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if (sliderContainer && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        sliderContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        sliderContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
}

// Mobile Menu Toggle - New navbar
const nhtToggle = document.getElementById('nht-toggle');
const nhtMobileMenu = document.getElementById('nht-mobile-menu');
const nhtDropdownBtn = document.getElementById('nht-dropdown-btn');
const nhtDropdown = document.getElementById('nht-dropdown');

if (nhtToggle && nhtMobileMenu) {
    nhtToggle.addEventListener('click', () => {
        nhtMobileMenu.classList.toggle('active');
    });
}

if (nhtDropdownBtn && nhtDropdown) {
    nhtDropdownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nhtDropdown.classList.toggle('active');
    });
}

// Window resize handler
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        if (nhtMobileMenu) nhtMobileMenu.classList.remove('active');
        if (nhtDropdown) nhtDropdown.classList.remove('active');
    }
});

// Scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.animation = 'fadeInUp 1s ease forwards';
            }
        });
    };
    
    // Initial check
    fadeInOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', fadeInOnScroll);
});
