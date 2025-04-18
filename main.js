const navGetOfferBtn = document.querySelector(".nav_get_offer_btn");

function updateBtnVisibility() {
   if (window.orientation === 0) {
      if (window.scrollY > (window.innerHeight - 140)) { /* adjust the threshold value as needed */
        navGetOfferBtn.style.opacity = '1'; /* show the button */
        navGetOfferBtn.style.transition = 'transform 300ms ease-in-out, opacity 100ms ease-in-out';
        navGetOfferBtn.style.pointerEvents = 'auto'; /* make button interactable */
      } else {
        navGetOfferBtn.style.opacity = '0'; /* hide the button */
        navGetOfferBtn.style.pointerEvents = 'none'; /* make button non-interactable */
      }}
   else {
      navGetOfferBtn.style.opacity = '1';
      navGetOfferBtn.style.transition = 'none';
      navGetOfferBtn.style.pointerEvents = 'auto'; /* make button interactable */
      }
  }

// Scroll event listener
window.addEventListener('scroll', updateBtnVisibility);

// Orientation change event listener
window.addEventListener('orientationchange', () => {
  updateBtnVisibility();  // Call the function to immediately adjust visibility
});

// Initial call to ensure the button visibility is correct on page load or reload
updateBtnVisibility();

navGetOfferBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); /* smooth scrolling */
});


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


// Select necessary elements
const shareBtn = document.querySelector('.share-btn');
const socialIcons = document.querySelector('.social-icons');
const riIcons = document.querySelectorAll('.social-icons a i'); // Select all icons inside the .social-icons container
const shareIcon = document.querySelector('.share-icon');

// Set the transition properties for the .share-btn
shareBtn.style.transition = 'transform 100ms ease-in-out, width 100ms ease-in-out';

// Add click event to toggle the 'open' class
shareBtn.addEventListener('click', () => {
  // Toggle the 'open' class on the share button
  shareBtn.classList.toggle('open');

  // Apply transformations and styles based on the 'open' class
  if (shareBtn.classList.contains('open')) {
    // If the button is open, scale the icons to show them
    riIcons.forEach(icon => {
      icon.style.transform = 'scale(1)'; // Scale the icons to show them
      icon.style.opacity = '1'; // Make the icons visible
      icon.style.visibility = 'visible'; // Ensure the icons are visible
      icon.style.transition = 'transform 600ms ease-in-out, opacity 600ms ease-in-out'; // Smooth transition
    });
  } else {
    // If the button is not open, reset the transformations and styles for icons
    riIcons.forEach(icon => {
      icon.style.transform = 'scale(0)'; // Scale the icons to 0 to hide them
      icon.style.opacity = '0'; // Make the icons invisible
      icon.style.visibility = 'hidden'; // Hide the icons
      icon.style.transition = 'transform 50ms ease-in-out, opacity 50ms ease-in-out'; // Smooth transition
    });
  }
});


const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { /* adjust the threshold value as needed */
    backToTopBtn.style.opacity = '1'; /* show the button */
    backToTopBtn.style.transition = 'transform 300ms ease-in-out, opacity 300ms ease-in-out';
  } else {
    backToTopBtn.style.opacity = '0'; /* hide the button */
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); /* smooth scrolling */
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 400,
  easing: "ease-in",
};

ScrollReveal().reveal(".about_container .section_header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about_container .section_description", {
  ...scrollRevealOption,
  delay: 200,
  interval: 200,
});
ScrollReveal().reveal(".service_container .section_header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service_container .section_description", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".service_card", {
  duration: 400,
  delay: 400,
  interval: 200,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  effect:'slide',
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

ScrollReveal().reveal(".blog_content .section_header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog_content h4", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".blog_content p", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".blog_content .blog_btn", {
  ...scrollRevealOption,
  delay: 400,
});

const paint_brands = document.querySelector(".paint_brands_flex");

Array.from(paint_brands.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  paint_brands.appendChild(duplicateNode);
});
