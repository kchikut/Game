document.addEventListener('DOMContentLoaded', () => {
    const menuBurger = document.getElementById('menu__burger');
    const menuLinks = document.getElementById('menu__links');

    menuBurger.addEventListener('click', () => {
        menuLinks.classList.toggle('active');
        menuBurger.classList.toggle('active');
    });
});


