const iconBurgerMenu = document.getElementsByClassName(
    'header__icon-burgerMenu',
)[0];
const iconClose = document.getElementsByClassName('menu-modal__icon-cross')[0];
const menuModal = document.getElementsByClassName('menu-modal')[0];

iconBurgerMenu.addEventListener('click', () => {
    menuModal.setAttribute('data-open', '');
});

iconClose.addEventListener('click', () => {
    menuModal.removeAttribute('data-open', '');
});
