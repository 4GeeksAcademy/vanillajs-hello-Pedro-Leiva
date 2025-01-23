/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
function obtenerAleatorio(lista) {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

function generarExcusa() {
  let quien = obtenerAleatorio(who);
  let accion = obtenerAleatorio(action);
  let que = obtenerAleatorio(what);
  let cuando = obtenerAleatorio(when);

  return `${quien} ${accion} ${que} ${cuando}.`;
}
document.querySelector("#excuse").innerHTML = generarExcusa();
window.onload = function() {}; //write your code here
