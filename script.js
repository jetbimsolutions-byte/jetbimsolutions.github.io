/*Menu*/
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const links = nav.querySelectorAll("a");

// Abrir / cerrar al pulsar el icono
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});

// Cerrar al pulsar un enlace (solo si está en modo mobile)
links.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 762) { 
            burger.classList.remove("active");
            nav.classList.remove("active");
        }
    });
});


/*pestañas*/

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;

    // Quita la clase "active" de todos
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Añade la clase "active" al botón y contenido seleccionados
    button.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});
