// Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. (Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações).


let numeros = []
let soma = 0
for (let i = 0; i < 5; i++) {
    numeros[i] = Math.floor(Math.random()* 20)
        
 }
console.log(`Vetor: ${numeros}`)

let maiorNumero = (Math.max(...numeros))

console.log(`Maior número: ${maiorNumero}`)

numeros.sort(function(a, b){return a - b})

for (let i = 0; i < numeros.length - 1; i++) {
     let multiplicacao = maiorNumero * numeros[i]
    console.log (`${maiorNumero} * ${numeros[i]} = ${multiplicacao}`)
    soma = soma + multiplicacao
    console.log(`Soma das multiplicações: ${soma}`)
}