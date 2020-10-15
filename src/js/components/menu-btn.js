const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".nav");
const menuItem = document.querySelectorAll(".nav__item");

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
