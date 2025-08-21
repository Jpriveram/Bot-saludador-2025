import { construirSaludo } from "./saludador";

const nombre_input = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = (nombre_input.value || "").trim();
  const mensaje = construirSaludo(nombre);

  div.innerHTML = `<p>${mensaje}</p>`;
});
