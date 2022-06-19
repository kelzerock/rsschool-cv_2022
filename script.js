"use strict";

const menuLinks = document.querySelectorAll(".menu__item");
if (menuLinks.length > 0) {
  menuLinks.forEach((item) => {
    item.addEventListener("click", function (e) {
      const menuLink = e.target.closest(".menu__item");
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoLink = document.querySelector(menuLink.dataset.goto);
        const gotoLinkValue =
          gotoLink.getBoundingClientRect().top - 10 +
          pageYOffset -
          document.querySelector("header").offsetHeight;
        document.querySelector('.menu__item-active').classList.remove('menu__item-active');
        menuLink.classList.add('menu__item-active');

        window.scrollTo({
          top: gotoLinkValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    });
  });
}
