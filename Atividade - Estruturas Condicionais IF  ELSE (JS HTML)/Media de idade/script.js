// Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. 
// Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.


let nomePessoa = []
let idadePessoa = []
let maiorIdade = 0
let media
let somaIdades = 0
let nomeMaiorIdade
var idade = [] 

nomePessoa = document.querySelectorAll(".nome")
 
idadePessoa = document.querySelectorAll(".idade")

function calculo(){

 
for (let i=0; i < nomePessoa.length; i++){
    
    idade[i] = Number(idadePessoa[i].value)
     console.log(idade[i]) 

    if (idade[i] > maiorIdade ){
    maiorIdade = idade[i]
    nomeMaiorIdade = nomePessoa[i].value 
}

somaIdades = somaIdades + idade[i]
}

media = (somaIdades / 5).toFixed(2)
var text = (`A média de idades é ${media}. ${nomeMaiorIdade} é o mais velho tendo ${maiorIdade} anos.`)

document.getElementById("resultado").innerHTML = text
}