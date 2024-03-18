//? Navbar Mobile script 
document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector(".icon");
    const ankers = document.querySelector(".ankers");

    icon.addEventListener("click", function () {
        ankers.classList.toggle("show");
    });

    const navItems = document.querySelectorAll(".ankers a");

    navItems.forEach(function (item) {
        item.addEventListener("click", function () {
            // Close the navigation bar when a navigation item is clicked
            ankers.classList.remove("show");
        });
    });

    // Close the navigation bar when clicking outside of it
    document.body.addEventListener("click", function (event) {
        if (!ankers.contains(event.target) && !icon.contains(event.target)) {
            ankers.classList.remove("show");
        }
    });
});


//? Carousel Script  
document.addEventListener("DOMContentLoaded", function () {
    const gap = 1;

    // Function to initialize carousel for a specific wrapper
    function initializeCarousel(wrapper) {
        const carousel = wrapper.querySelector(".carousel");
        const content = wrapper.querySelector(".content");
        const next = wrapper.querySelector(".next");
        const prev = wrapper.querySelector(".prev");

        let width = carousel.offsetWidth;
        let scrollDistance = width + gap; // Distance to scroll for one set of images

        next.addEventListener("click", e => {
            carousel.scrollBy(scrollDistance, 0); // Scroll by one set of images
            if (carousel.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "none";
            }
            prev.style.display = "flex"; // Always display prev button after clicking next
        });

        prev.addEventListener("click", e => {
            carousel.scrollBy(-scrollDistance, 0); // Scroll back by one set of images
            if (carousel.scrollLeft - scrollDistance <= 0) {
                prev.style.display = "none";
            }
            next.style.display = "flex"; // Always display next button after clicking prev
        });

        window.addEventListener("resize", e => {
            width = carousel.offsetWidth;
            scrollDistance = width + gap; // Update scroll distance on window resize
        });
    }

    // Initialize each carousel independently
    const wrappers = document.querySelectorAll(".wrapper");
    wrappers.forEach(wrapper => {
        initializeCarousel(wrapper);
    });
});


//? Script 3
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

