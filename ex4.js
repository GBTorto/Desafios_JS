prompt = require("prompt-sync")();

let C = parseFloat(prompt("Digite uma temperatura em Celsius:" ));
let F = C * 9/5 + 32;

console.log("F é igual a " + F);