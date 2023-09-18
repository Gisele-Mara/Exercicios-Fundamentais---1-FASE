// Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, 
// realizar o cálculo (peso / altura * altura) e
//  mostrar o resultado na tela, com 3 casas depois da vírgula.

let pesoUser;
let alturaUser;
let IMC;

function calculo (){

pesoUser = document.getElementById("peso")
alturaUser = document.getElementById("altura")

pesoUser = Number(pesoUser.value)
alturaUser = Number(alturaUser.value)

IMC = ((pesoUser) / (alturaUser*alturaUser)).toFixed(2);

console.log("O IMC é "+ IMC);
let text = "O IMC é "
document.getElementById("resultado").innerHTML = text + IMC
}