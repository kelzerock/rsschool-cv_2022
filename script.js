"use strict";

//menu burger
const iconMenu = document.querySelector('.menu_icon')
const menuBody = document.querySelector('.menu')
if(iconMenu){
  iconMenu.addEventListener('click', function(e){
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
}

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

        if(iconMenu.classList.contains('_active')){
          document.body.classList.remove('_lock')
          iconMenu.classList.remove('_active')
          menuBody.classList.remove('_active')
        }

        window.scrollTo({
          top: gotoLinkValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    });
  });
}