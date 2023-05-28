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
	const asunto = encodeURIComponent("Contacto a Jasonquiar desde su pagina de Github");
	const destinatario = "jasonquiar@hotmail.com";
	window.location.href = `mailto:${destinatario}?subject=${asunto}`;
});
