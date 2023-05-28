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

const enviarCorreoBtn = document.getElementById("enviarCorreo");
enviarCorreoBtn.addEventListener("click", function() {
  window.location.href = "mailto:ejemplo1@mail.com";
});
