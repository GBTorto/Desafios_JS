prompt = require("prompt-sync")();

let fnumber = parseFloat(prompt("Digite um número"));
let snumber = parseFloat(prompt("Digite outro número"));

let soma = fnumber + snumber;

console.log("A soma é igual a " + soma);