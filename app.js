let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMax = 10;

// el juego permite adivinar un numero del 1 al 10, sin repetirlo hasta que ya no 
// existan más números que adivinar
function generarNumeroAleatorio() {
  let numeroGenerado = Math.floor(Math.random() * numeroMax) + 1;
  if (listaNumeroSorteados.length == numeroMax) {
    asignarTextoElemento("p", "Ya no hay más números");
  } else {
    if (listaNumeroSorteados.includes(numeroGenerado)) {
      return generarNumeroAleatorio();
    } else {
      listaNumeroSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}

function verificarIntento() {
  intentos++;
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  //console.log(numeroSecreto);
  if (numeroSecreto === numeroUsuario) {
    asignarTextoElemento(
      "p",
      `Acertaste! en ${intentos} ${intentos > 1 ? "intentos" : "intento"}`
    );

    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroUsuario > numeroSecreto) {
    asignarTextoElemento("p", "el número secreto es menor");
    limpiarCaja();
  } else {
    limpiarCaja();
    asignarTextoElemento("p", "el número secreto es mayor");
  }
  console.log(intentos);
  return;
}

function condicionesInciales() {
  asignarTextoElemento("h1", "Juego de adivinanza");
  asignarTextoElemento("p", "Adivina un número del 1 al 10");
  numeroSecreto = generarNumeroAleatorio();
  intentos = 0;
  //console.log(numeroSecreto);
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesInciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesInciales();
console.log(listaNumeroSorteados);
