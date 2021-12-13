const navToggler = document.querySelector(".nav--menu__icon");

navToggler.addEventListener("click", () => {
  const togglerMenu = document.querySelector(".nav--menu");

  const navIcon = document.querySelectorAll(".nav-icon");

  togglerMenu.classList.toggle("show");

  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});

// NAVBAR FIXED WITH SCROLL BAR

function navbarFixed(params) {
  const headerDom = document.querySelector(".header");
  const nav_ofset_top = headerDom.clientHeight + 35;
  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll >= nav_ofset_top) {
      headerDom.classList.add("nav-fixed");
    } else {
      headerDom.classList.remove("nav-fixed");
    }
  });
}
navbarFixed();
