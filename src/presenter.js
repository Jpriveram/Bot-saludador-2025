import { construirSaludo } from "./saludador";

const nombre_input = document.querySelector("#nombre");
const genero_input= document.querySelector("#genero");
const edad_input= document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = (nombre_input.value);
  const genero = (genero_input.value);
  const edad = (edad_input.value);
  const mensaje = construirSaludo(nombre,genero,edad);

  div.innerHTML = `<p>${mensaje}</p>`;
});
