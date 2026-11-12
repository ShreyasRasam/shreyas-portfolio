// Mobile Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Hide navbar on scroll down, show on scroll up
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        // Only hide if scrolled past the header
        if (currentScrollPos > 80) {
            document.getElementById("navbar").style.top = "-80px";
        }
    }
    prevScrollpos = currentScrollPos;
}

// Automatically update footer year
document.getElementById("year").textContent = new Date().getFullYear();