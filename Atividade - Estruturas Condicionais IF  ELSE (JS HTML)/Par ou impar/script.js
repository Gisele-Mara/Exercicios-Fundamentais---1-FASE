// Programar para que o usuário digite um número. 
// Caso seja par, mostre "O número é par!", senão, mostre "O número é ímpar!"

let numero;
let elemento



numero = document.getElementById("numero")

numero.addEventListener("click", function(){
elemento = Number(numero.value)

if (elemento % 2 == 0){

    console.log(`O número ${elemento} é par.`)
    resultado = `O número ${elemento} é par.`
} else{

    console.log(`O número ${elemento} é ímpar.`)
    resultado = `O número ${elemento} é ímpar.`
}

document.getElementById("resultado").innerHTML = resultado

})