prompt = require("prompt-sync")(); 

let produto = prompt("Digite o nome de um produto: ");
let quantidade = parseFloat(prompt("Digite a quantidade que você deseja comprar: ")) 
let valor = parseFloat(prompt("Digite o valor unitário deste produto: "));
let parcela = parseInt(prompt("Você deseja parcelar em quantas vezes?: "))
let resultado = quantidade * valor;
let parcelado = resultado / parcela;

console.log("Você parcelou esta compra em " + parcela + " sendo cada parcela " + parcelado + " reais. O valor total é de " + resultado + ".");