import { construirSaludo } from "./saludador";

const nombre_input = document.querySelector("#nombre");
const genero_input= document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = (nombre_input.value);
  const genero = (genero_input.value);
  const mensaje = construirSaludo(nombre,genero);

  div.innerHTML = `<p>${mensaje}</p>`;
});
