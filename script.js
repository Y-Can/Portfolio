

// document.addEventListener('DOMContentLoaded', fetchVercelProjects);




async function jsPage() {

// TYPED
var typed = new Typed('.typed', {
    strings: ["Après avoir consolidé mes compétences en développement web au cours de ces dernières années, je suis à la recherche d'un nouveau défi professionnel en tant que développeur. Ma passion pour la création de solutions innovantes et mon désir constant de progression me poussent à explorer de nouvelles opportunités dans le domaine du développement logiciel. Je suis prêt à m'engager pleinement dans des projets stimulants où je pourrai mettre à profit mon expertise technique et contribuer au succès de l'équipe."],
    typeSpeed: 20,
    smartBackspace: true,
    loop: false
  });
    
// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});
}
jsPage()


var dateNaissance = new Date('1998-10-04')
var dateActuelle = new Date();
var age = dateActuelle.getFullYear() - dateNaissance.getFullYear();
if (dateActuelle.getMonth() < dateNaissance.getMonth() || (dateActuelle.getMonth() === dateNaissance.getMonth() && dateActuelle.getDate() < dateNaissance.getDate())) {
    age--;
}
document.getElementById("age").innerText =  age+" ans";
