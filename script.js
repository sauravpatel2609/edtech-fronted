document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const sidebarToggle = document.querySelector('#menu-toggle');

    // Navbar toggle for mobile screens
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('.card, .btn, .navbar, .footer')
            .forEach(el => el.classList.toggle('dark-mode'));
    });

    // Sidebar toggle function
    sidebarToggle.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("wrapper").classList.toggle("toggled");
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});
