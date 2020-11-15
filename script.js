let mainMenu = document.querySelector('.header__list');
let mainHamburger = document.querySelector('.hamburger');

mainHamburger.addEventListener('click', () => {
  mainMenu.classList.toggle('header__list--active');
  mainHamburger.classList.toggle('hamburger--active');
})

let footerBtn = document.querySelector('.footer__btn');
let footerModal = document.querySelector('.modal');
let footerModalClose = document.querySelector('.modal__close-btn');

footerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  footerModal.classList.add('modal--active');
})

footerModal.addEventListener('click', (e) => {
  if (e.target == footerModal) {
    footerModal.classList.remove('modal--active');
  }
})

footerModalClose.addEventListener('click', () => {
  footerModal.classList.remove('modal--active');
})