/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiper = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/

const accoridons = document.querySelectorAll(".value__accordion-item");

accoridons.forEach((items) => {
  const accordionHead = items.querySelector(".value__accordion-header");

  accordionHead.addEventListener("click", () => {
    const openitem = document.querySelector(".accordion-open");
    console.log(openitem);
    toggleAccordion(items);
    if (openitem && openitem !== items) {
      toggleAccordion(openitem);
    }
  });
});

function toggleAccordion(item) {
  const accordion = item.querySelector(".value__accordion-content");
  if (item.classList.contains("accordion-open")) {
    accordion.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordion.style.height = accordion.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
