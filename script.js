
// async function fetchVercelProjects() {
//   const url = 'https://api.vercel.com/v8/projects';
//   const token = 'mAfgFtMWWjTaGrQlwuKqixs0';  // Remplacez par votre token d'accès réel

//   const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//           'Authorization': `Bearer ${token}`
//       }
//   });

//   if (!response.ok) {
//       console.error('Failed to fetch data:', response.status);
//       return;
//   }

//   const data = await response.json();
//   const projects = data.projects.map(project => {
//       if (project.latestDeployments.length > 0) {
//           let deployment = project.latestDeployments[0];
//           console.log(deployment);
//           let split = deployment.url.split('-');
//           if (split[2].length > 9) {
//               split.splice(2, 1);
//           } else {
//               split.splice(3, 1);
//           }
//           let modifiedURL = split.join('-');
//           return {
//               name: project.name,
//               description: project.description || "No description provided.",
//               imageUrl: './img/program.jpg',
//               projectUrl: `https://${modifiedURL}`,
//               githubUrl: `https://github.com/Y-Can/${deployment.meta.githubRepo}`,
//               techIcons: [
//                   { src: "img/media/php.png", alt: "php" },
//                   { src: "img/media/vuejs.png", alt: "vuejs" },
//                   { src: "img/media/js.png", alt: "js" }
//               ]
//           };
//       }
//   });

//   displayProjects(projects.filter(Boolean));  // Filtre pour éliminer les valeurs undefined
// }
// function displayProjects(projects) {
//   const container = document.getElementById('projects-container');

//   projects.forEach(project => {
//       const projectDiv = document.createElement('div');
//       projectDiv.className = 'projet';

//       const cadreDiv = document.createElement('div');
//       cadreDiv.className = 'cadre';
//       projectDiv.appendChild(cadreDiv);

//       const imgContainer = document.createElement('div');
//       imgContainer.className = 'img-container';
//       cadreDiv.appendChild(imgContainer);

//       const aImg = document.createElement('a');
//       aImg.href = project.projectUrl;
//       aImg.target = '_blank';
//       imgContainer.appendChild(aImg);

//       const img = document.createElement('img');
//       img.src = project.imageUrl;
//       img.alt = 'project image'; // dynamic alt text if needed
//       aImg.appendChild(img);

//       const legendeDiv = document.createElement('div');
//       legendeDiv.className = 'legende';
//       projectDiv.appendChild(legendeDiv);

//       const h4 = document.createElement('h4');
//       project.techIcons.forEach(icon => {
//           const imgIcon = document.createElement('img');
//           imgIcon.src = icon.src;
//           imgIcon.alt = icon.alt;
//           h4.appendChild(imgIcon);
//       });
//       h4.append(project.name);
//       legendeDiv.appendChild(h4);

//       const p = document.createElement('p');
//       p.textContent = project.description;
//       legendeDiv.appendChild(p);

//       const aGithub = document.createElement('a');
//       aGithub.href = project.githubUrl;
//       aGithub.target = '_blank';
//       legendeDiv.appendChild(aGithub);

//       const h5 = document.createElement('h5');
//       const i = document.createElement('i');
//       i.className = 'fa fa-github';
//       h5.appendChild(i);
//       h5.append(' > code source du projet');
//       aGithub.appendChild(h5);

//       container.appendChild(projectDiv);
//   });
// }



// document.addEventListener('DOMContentLoaded', fetchVercelProjects);





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


var dateNaissance = new Date('1998-10-04')
var dateActuelle = new Date();
var age = dateActuelle.getFullYear() - dateNaissance.getFullYear();
if (dateActuelle.getMonth() < dateNaissance.getMonth() || (dateActuelle.getMonth() === dateNaissance.getMonth() && dateActuelle.getDate() < dateNaissance.getDate())) {
    age--;
}
document.getElementById("age").innerText =  age+" ans";
