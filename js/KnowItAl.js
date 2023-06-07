const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#Home-page');
  const aboutMenu = document.querySelector('#about-page');
  const classesMenu = document.querySelector('#classes-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    classesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    classesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

//scrollbar
let currentScrollPosition = 0;
    let scrollAmount = 640;

    const sCont = document.querySelectorAll(".storys-container")[1];
    console.log("sCont", sCont)
    const hScroll = document.querySelectorAll(".horizontal-scroll")[1];
    const btnScrollLeft = document.querySelectorAll("#btn-scroll-left")[1];
    const btnScrollRight = document.querySelectorAll("#btn-scroll-right")[1];

    btnScrollLeft.style.opacity = 0;

    let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

    function scrollHorizontally(val){
        currentScrollPosition += (val * scrollAmount);

        if(currentScrollPosition >= 0){
            currentScrollPosition = 0;
            btnScrollLeft.style.opacity = 0;
        }else{
            btnScrollLeft.style.opacity = 1;
        }

        if(currentScrollPosition <= maxScroll){
            currentScrollPosition = maxScroll;
            btnScrollRight.style.opacity = 0;
        }else{
            btnScrollRight.style.opacity = 1;
        }

        sCont.style.left = currentScrollPosition + "px";    
    }