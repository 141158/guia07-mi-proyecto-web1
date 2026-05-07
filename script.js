const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const mensajeInput = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");
const mensajeCorreo = document.getElementById("mensajeCorreo");
const saludarBtn = document.getElementById("saludarBtn");
const validarBtn = document.getElementById("validarBtn");
const temaBtn = document.getElementById("temaBtn");

function mostrarMensaje(elemento, texto, tipo) {
  elemento.textContent = texto;
  elemento.classList.remove("error", "success");
  elemento.classList.add(tipo);
}

function saludar() {
  const nombre = nombreInput.value.trim();

  if (nombre === "") {
    mostrarMensaje(resultado, "Por favor, ingresa tu nombre.", "error");
  } else {
    mostrarMensaje(resultado, `¡Hola ${nombre}! Gracias por visitar el sitio.`, "success");
  }
}

function esCorreoValido(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

function validarFormulario() {
  const correo = correoInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  if (correo === "" || mensaje === "") {
    mostrarMensaje(mensajeCorreo, "Completa todos los campos para continuar.", "error");
    return;
  }

  if (!esCorreoValido(correo)) {
    mostrarMensaje(mensajeCorreo, "El correo no tiene un formato válido.", "error");
    return;
  }

  mostrarMensaje(mensajeCorreo, "Formulario válido. ¡Gracias por contactarnos!", "success");
}

function toggleTema() {
  document.documentElement.classList.toggle("dark-mode");
  const modo = document.documentElement.classList.contains("dark-mode") ? "Claro" : "Oscuro";
  temaBtn.textContent = `Cambiar a tema ${modo}`;
}

saludarBtn.addEventListener("click", saludar);
validarBtn.addEventListener("click", validarFormulario);
temaBtn.addEventListener("click", toggleTema);
