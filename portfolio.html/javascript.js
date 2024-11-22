// JavaScript para menu hambúrguer
const nav = document.querySelector('.nav-list');
const toggleMenu = document.createElement('div');
toggleMenu.classList.add('menu-toggle');
toggleMenu.innerHTML = '☰';
document.querySelector('nav').appendChild(toggleMenu);

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});
