const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".nav");
const menuItem = document.querySelectorAll(".nav__item");
const menuLinks = document.querySelectorAll(".nav__link");

// Add active class for navigation links
menuLinks.forEach(item =>{
  item.addEventListener('click', function () {
    menuLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});

// Menu butto open and close functionality
menuBtn.addEventListener("click", () => {
  toggle();
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}
