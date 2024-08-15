prompt = require("prompt-sync")();

let produto = prompt("Digite o nome de um produto: ");
let quantidade = parseFloat(prompt("Digite a quantidade que você deseja comprar: ")) 
let valor = parseFloat(prompt("Digite o valor unitário deste produto: "));
let resultado = quantidade * valor;
let imposto = resultado + resultado * 0.18;
let valor_imposto= resultado * 0.18;

console.log("Você comprou " + quantidade + " " + produto + ", sendo o valor unitário de " + valor + ", com um imposto de " + valor_imposto + "%" + ". O valor total é de " + imposto + " reais.");