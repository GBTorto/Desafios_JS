prompt = require("prompt-sync")(); 

let horas = parseInt(prompt("Digite quantas horas você deseja trabalhar por semana: "));
let valor_h = parseFloat(prompt("Quanto você deseja receber por hora?: "));
let sal_semana = horas * valor_h;
let sal_mes = sal_semana * 4;

console.log("Você receberá " + sal_semana + " reais por semana e no mês " + sal_mes + " reais.");