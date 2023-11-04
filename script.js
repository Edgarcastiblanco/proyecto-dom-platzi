// let hola = prompt("Digamos hola mundo");
// console.log(hola);

const title = document.querySelector("title");
const p = document.querySelectorAll("p");
const form = document.querySelectorAll("#form");
let input1 = document.querySelector("#calcular1");
let input2 = document.querySelector("#calcular2");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const resultado = document.querySelector("#resultado");

button.addEventListener("click", sumar);

//console.log(title);

//console.log(p);

//h1.innerHTML = "Cambiando el titulo desde JS";

function sumar(event) {
event.preventDefault();
    const sumainput =  Number(input1.value) + Number(input2.value);
resultado.innerText = "el resultado es: " + sumainput;

}