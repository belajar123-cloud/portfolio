// ==========================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// ==========================================


// Menampilkan pesan di console
console.log("Portfolio website loaded successfully!");


// ==========================================
// NAVBAR - ACTIVE LINK
// ==========================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ==========================================
// BUTTON HOVER EFFECT
// ==========================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });

});


// ==========================================
// CURRENT YEAR
// ==========================================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${year} Widya Utami. All rights reserved.`;

}


// ==========================================
// SIMPLE SCROLL ANIMATION
// ==========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (section) {
    observer.observe(section);
});