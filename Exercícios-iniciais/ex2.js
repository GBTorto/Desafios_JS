prompt = require("prompt-sync")();

let nascimento = parseInt(prompt("Digite sua data de nascimento"));
let anoatual = new Date().getFullYear();
let idade = anoatual - nascimento;

console.log("Você tem " + idade + " anos.");