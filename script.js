function saludar() {
  let nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    document.getElementById("resultado").innerText = "Por favor, ingresa tu nombre.";
  } else {
    document.getElementById("resultado").innerText = "Hola " + nombre + ", bienvenido al sistema.";
  }
}
