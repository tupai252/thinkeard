const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

// Agregar un evento de clic al icono de la hamburguesa
menuIcon.addEventListener('click', () => {
    // Alternar la clase "show" para mostrar u ocultar el menú
    menuList.classList.toggle('show');
});