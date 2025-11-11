/*Show menu*/

function initNavbar() {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  // Mostrar menu
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  // Esconder menu
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(n =>
    n.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  );
}


/*Efeito no titulo*/

var typed = new Typed(".text", {
    strings:["Bem vindo!"],
    typedSpeed:100,
    backSpeed:300,
    backDelay:100,
    loop:true
});






