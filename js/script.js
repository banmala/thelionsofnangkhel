// Setup Navbar Scroll Effect
(function setupNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('mainNavbar');
        console.log("navbar: ", navbar)
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
})()

(function toggleMobileNav(){

})()