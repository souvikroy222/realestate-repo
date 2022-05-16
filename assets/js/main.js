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
  loop: true,  
  spaceBetween:32,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {    
    768: {
      slidesPerView: 3,
      
    },
    1024: {      
      spaceBetween: 20,
    },
  },
  
  
  
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
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  
}
window.addEventListener('scroll', scrollUp)

const scrollClick = document.getElementById('scroll-up')
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
scrollClick.addEventListener('click',topFunction)



/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bxs-moon' : 'bx bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal=ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,


})
scrollReveal.reveal(`.home__title`)
scrollReveal.reveal(`.home__description`,{delay:400})
scrollReveal.reveal(`.home__search`,{delay:400})
scrollReveal.reveal(`.home__images`,{delay:650,origin:'bottom'})
scrollReveal.reveal(`.home__value`,{delay:600})
scrollReveal.reveal(`.logos__container`,{delay:600})
scrollReveal.reveal(`.popular__container`,{delay:400})

scrollReveal.reveal(`.value__img`,{delay:650,origin:'bottom'})
scrollReveal.reveal(`.value__content`,{delay:400})

scrollReveal.reveal(`.contact__images`,{delay:650,origin:'bottom'})
scrollReveal.reveal(`.contact__content`,{delay:400})
scrollReveal.reveal(`.subscribe__container`,{delay:400})
scrollReveal.reveal(`.footer`,{delay:400,origin:'bottom'})







