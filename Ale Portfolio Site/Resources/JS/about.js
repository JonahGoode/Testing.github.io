// filepath: /d:/Random Projects/Coding/Website Design/Visual Studio Code/Projects/Ale Portfolio Site/Resources/JS/about.js
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var bannerLogo = document.getElementById('banner-logo');
    var bannerLogoBottom = bannerLogo.getBoundingClientRect().bottom;
    var navbarHeight = navbar.offsetHeight;

    if (bannerLogoBottom <= 1.5) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
});