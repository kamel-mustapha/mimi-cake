//preloader  
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('hide');
});

//Animate on scroll initialize
AOS.init();

//navbar menu visibility on small devices

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

menu.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    menu.classList.toggle("hidden");
  }
});

//navbar sticky on scroll

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navbarOffsetTop = navbar.offsetTop;
  
    if (window.scrollY  > navbarOffsetTop) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
});

//scroll to top btn

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


