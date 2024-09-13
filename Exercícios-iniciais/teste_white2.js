prompt = require("prompt-sync")();

let numero = prompt("Digite um número: ")

let contador = 1;

while(contador <= numero);{
    if(contador % 2 !== 0){
    console.log(contador)
    }   
contador++
}