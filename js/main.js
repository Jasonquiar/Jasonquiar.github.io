

// const preguntas = document.querySelectorAll(".pregunta_encabezado");

// preguntas.forEach((pregunta) => {
// 	pregunta.addEventListener("click", () => {
// 		removerClaseActivo();
// 		pregunta.nextElementSibling.classList.add("activo");
// 	});
// });

// function removerClaseActivo() {
// 	preguntas.forEach((pregunta) => {
// 		pregunta.nextElementSibling.classList.remove("activo");
// 	});
// }




const preguntas = document.querySelectorAll(".pregunta_encabezado");

preguntas.forEach((pregunta) => {
  pregunta.addEventListener("click", () => {
    const respuesta = pregunta.nextElementSibling;
    const arrowIcon = pregunta.querySelector(".arrow-icon");

    if (respuesta.classList.contains("activo")) {
      respuesta.classList.remove("activo");
      arrowIcon.classList.remove("rotate");
    } else {
      removerClaseActivo();
      respuesta.classList.add("activo");
      arrowIcon.classList.add("rotate");
    }
  });
});

function removerClaseActivo() {
  preguntas.forEach((pregunta) => {
    const respuesta = pregunta.nextElementSibling;
    const arrowIcon = pregunta.querySelector(".arrow-icon");

    respuesta.classList.remove("activo");
    arrowIcon.classList.remove("rotate");
  });
}




const enviarCorreoBtn = document.getElementById("enviarCorreo");
enviarCorreoBtn.addEventListener("click", function() {
	const asunto = encodeURIComponent("Contacto a Jasonquiar con el fin de...");
	const destinatario = "jasonquiar@hotmail.com";
	window.location.href = `mailto:${destinatario}?subject=${asunto}`;
});
