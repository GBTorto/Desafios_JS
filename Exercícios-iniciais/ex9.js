prompt = require("prompt-sync")(); 

let produto = prompt("Digite o nome de um produto: ");
let quantidade = parseFloat(prompt("Digite a quantidade que você deseja comprar: ")) 
let valor = parseFloat(prompt("Digite o valor unitário deste produto: "));
let parcela = parseInt(prompt("Você deseja parcelar em quantas vezes?: "))
let juros = 15
let resultado = quantidade * valor;
let taxa_juros = resultado * (juros/100) * parcela;
let valor_parcelas = taxa_juros / parcela
let valor_total = taxa_juros + resultado; 

console.log("O valor de sua compra é de R$" + resultado + ", mas como sua compra será parcelada em " + parcela + " vezes, um juros de " + juros + "% ao mês será aplicado. Cada parcela valerá R$" + valor_parcelas + ", tendo um valor final de R$" + valor_total + ".")