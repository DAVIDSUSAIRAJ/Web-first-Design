

// NAV TOGGLE, OPEN AND CLOSE BUTTON WITH DEYNAMIC MENU IN MOBILE; 
function navToggleButton(params) {
  const navToggler = document.querySelector(".nav--menu__icon");
  navToggler.addEventListener("click", () => {
    const togglerMenu = document.querySelector(".nav--menu");

    const navIcon = document.querySelectorAll(".nav-icon");

    togglerMenu.classList.toggle("show");

    navIcon.forEach((icon) => {
      icon.classList.toggle("hidden");
    });
  });
}

navToggleButton();
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
// navbarFixed();

function setMenuActive(params) {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav--menu__list>a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionsTop = section.offsetTop;
      const sectionsHeight = section.clientHeight;
      if (pageYOffset >= sectionsTop - sectionsHeight / 8) {
        current = section.getAttribute("id");
      }
    });
    // end sections foreach;
    // console.log(current);
    // start navLinks foreach
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (current == link.getAttribute("href").split("#")[1]) {
        link.classList.add("active");
      }
    });
  });
}
setMenuActive();

// ON MENU CLICK IN MOBILE VIEW

function onMenuClick(params) {
  const navLinks = document.querySelectorAll(".nav--menu__list>a");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
      const togglerMenu = document.querySelector(".nav--menu");

      const navIcon = document.querySelectorAll(".nav-icon");

      togglerMenu.classList.toggle("show");

      navIcon.forEach((icon) => {
        icon.classList.toggle("hidden");
      });
    });
  }
}
onMenuClick();
