prompt = require("prompt-sync")();

let neg = -1
let numberone = parseFloat(prompt("Digite um número: "));
let numbertwo = parseFloat(prompt("Digite outro número: "))
let resultado = numberone - numbertwo;

if (resultado < 0) {
    resultado = (numberone - numbertwo) * neg;
}

console.log("A diferença é de " + resultado)