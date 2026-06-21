/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ===========================
   STICKY NAVBAR
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    } else {
        header.style.boxShadow = "none";
    }
});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        navLinks.classList.remove("active");
    });
});

/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ===========================
   SCROLL REVEAL
=========================== */

const reveals = document.querySelectorAll(
    ".skill-card,.project-card,.service-card,.info-card"
);

function revealOnScroll() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = ".7s";

});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===========================
   TYPING EFFECT
=========================== */

const typing = document.querySelector(".typing");

const words = [
    "Front-End Web Developer",
    "React Developer",
    "JavaScript Enthusiast",
    "UI Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();

/* ===========================
   SCROLL TO TOP
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

/* ===========================
   CONTACT FORM
=========================== */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            valid = false;

            input.style.border = "2px solid red";

        } else {

            input.style.border = "1px solid rgba(255,255,255,.15)";

        }

    });

    if (valid) {

        alert("Thank you! Your message has been sent.");

        form.reset();

    }

});

/* ===========================
   SKILL BAR ANIMATION
=========================== */

const bars = document.querySelectorAll(".progress span");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.width =
                entry.target.style.width;

        }

    });

});

bars.forEach(bar => observer.observe(bar));

console.log("Portfolio Loaded Successfully 🚀");
