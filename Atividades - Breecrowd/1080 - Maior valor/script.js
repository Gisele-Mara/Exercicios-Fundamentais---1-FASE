// Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.

let valor = []
let maiorValor = 0
let posicao


for (let i = 1; i <=100; i++){
    valor[i]= Math.floor(Math.random() * 100);
    console.log(valor[i])
    if(valor [i] > maiorValor){
    maiorValor = valor [i]
    posicao = i
    }
}

console.log(`O maior valor lido ${maiorValor} na ${posicao}º posição.`)