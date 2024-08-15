prompt = require("prompt-sync")(); 

let idade = parseInt(prompt("Digite sua idade: "));

if(idade < 16){
    console.log("Você não pode votar")
}
else if(idade >= 16 && idade < 18 || idade > 70){
    console.log("Você escolhe se quer ou não votar.")
}
else{
    console.log("Você tem que votar.")
}