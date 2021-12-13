const navToggler = document.querySelector(".nav--menu__icon");


navToggler.addEventListener("click", () => {
  const togglerMenu = document.querySelector(".nav--menu");

  const navIcon = document.querySelectorAll(".nav-icon");

  togglerMenu.classList.toggle("show");

  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});
