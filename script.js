document.addEventListener("DOMContentLoaded", function() {
    let enlaces = document.querySelectorAll(".nav-link"); // Selecciona todos los enlaces del menú

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que el enlace recargue la página

            let targetClass = this.getAttribute("data-target"); // Obtiene la clase objetivo
            let targetElement = document.querySelector("." + targetClass); // Busca la sección con esa clase

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" }); // Hace scroll suave
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.getElementById('navbarNav');

    toggler.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    // Cierra el menú si haces clic fuera
    document.addEventListener('click', function (e) {
        if (!toggler.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.getElementById('navbarNav');
    const links = document.querySelectorAll('.nav-link');

    // Mostrar/Ocultar menú
    toggler.addEventListener('click', function (e) {
        e.preventDefault(); // evitar comportamiento por defecto
        menu.classList.toggle('show');
    });

    // Cerrar al hacer clic en un enlace del menú
    links.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('show');
        });
    });

    // Cerrar al hacer clic fuera del menú
    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target) && !toggler.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
});