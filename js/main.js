const preguntas = document.querySelectorAll(".pregunta_encabezado");

preguntas.forEach((pregunta) => {
	pregunta.addEventListener("click", () => {
		removerClaseActivo();
		pregunta.nextElementSibling.classList.add("activo");
	});
});

function removerClaseActivo() {
	preguntas.forEach((pregunta) => {
		pregunta.nextElementSibling.classList.remove("activo");
	});
}

const menuIcon = document.querySelector(".nav__item--6");
const menuList = document.querySelector(".nav__list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("nav__list--active");
});