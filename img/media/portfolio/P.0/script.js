navbar = document.getElementById('navbar');
navElements = document.getElementById('nav-elements');
  
window.addEventListener('scroll', function(){
  const scroll = this.document.documentElement.scrollTop;

  if (scroll > 200) {
    navbar.style.height = "7vh";
    navElements.style.height = "7vh";
    navbar.style.background = "rgba(0, 0, 0, 0.7)";
  } else {
    navbar.style.height = "15vh";
    navElements.style.height = "15vh";
    navbar.style.background = "#000000"
  }
});


/* **************** ANIMATION TITRE **************** */

