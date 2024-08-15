prompt = require("prompt-sync")(); 

let produto = prompt("Digite o nome de um produto: ");
let quantidade = parseFloat(prompt("Digite a quantidade que você deseja comprar: ")) 
let valor = parseFloat(prompt("Digite o valor unitário deste produto: "));
let desconto = parseFloat(prompt("Digite o desconto que você quer: "))
let resultado = quantidade * valor;
let imposto = resultado - resultado * (desconto/100);

console.log("Você comprou " + quantidade + " " + produto + ", sendo o valor unitário de " + valor + ". O valor total que você deve pagar é de " + resultado + " reais, porém com o desconto aplicado, o valor será de " + imposto + " reais");