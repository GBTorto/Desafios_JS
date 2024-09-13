const PromptSync = require("prompt-sync");

prompt = require("prompt-sync")();

let numero = prompt("Digite um número entre 1 e 100: ")

let aleatorio = Math.floor(Math.random() * 100) + 1;

while (numero !== aleatorio){
    if(numero > aleatorio){
        console.log("O numero é menor.")
    }
    else if (numero < aleatorio){
        console.log("O número é maior")
    }

    else{
        console.log("Parabéns!")
        break
    }

    numero = prompt("Tente novamente: ")
}