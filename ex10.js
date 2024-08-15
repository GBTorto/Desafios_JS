prompt = require("prompt-sync")(); 

let número = parseInt(prompt("Digite um número: "));

if (número % 2 == 0)
    console.log("O número " + número + " é par.")
else
    console.log("O número " + número + " é ímpar.")