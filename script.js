let mainMenu = document.querySelector('.header__list');
let mainHamburger = document.querySelector('.hamburger');

mainHamburger.addEventListener('click', () => {
  mainMenu.classList.toggle('header__list--active');
  mainHamburger.classList.toggle('hamburger--active');
})