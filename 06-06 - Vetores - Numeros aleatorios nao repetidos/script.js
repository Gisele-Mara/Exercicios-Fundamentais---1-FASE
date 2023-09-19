// Criar um programa que gere um vetor com 10 números inteiros aleatórios entre 0 e 20. O vetor não pode conter números repetidos.

// let numero = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 3]
let numero = [], numeroVerificador, numeroRandom

//Gerando numeros aleatórios
for (let i=0; i < 10; i++){
    numero[i] = Math.floor(Math.random()*21)
}

//Arrumando o vetor (excluindo e adicionado números)
for (let i = 0; i <= numero.length; i++) {
    numeroVerificador = numero[i]

    for (let j = numero.length; j != i; j--) {
   
        if (numeroVerificador == numero[j] ) {
            console.log(`numeroRandom: ${numeroVerificador} = ${numero[j]}`)
            console.log(`J: ${j}; i: ${i}`)
            numero.splice(j,1) //Excluindo número repetido

            do{
                numeroRandom = Math.floor(Math.random()*21) //Gerando número aleatório
            }
            while(numero.indexOf(numeroRandom) != -1)
            //Introduzindo número ao vetor, quando diferente de qualquer número no vetor.
            numero.push(numeroRandom)
        }
    }
}
console.log(`Vetor com números não repetidos: ${numero.sort()}`)
