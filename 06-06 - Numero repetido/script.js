// let grupoNumeros = [1, 1, 2, 2, 4, 5, 6, 6, 7, 8, 8]
let grupoNumeros = []
let numero
let j = 0, k = 0
let novoNumero

function numeroRandom (){
    for (let i = 0; i < 10; i++) {
        grupoNumeros[i] = Math.floor(Math.random() * 20)
    }
    console.log(`Vetor com numeros aleatorios ${grupoNumeros}`)
}

numeroRandom();

for (let i = 0; i < 10; i++) {
    console.log(`Vetor: ${grupoNumeros}\n`)
    numero = grupoNumeros[i]
    console.log(`Numero ver: ${grupoNumeros[i]}, Posição index: ${i}`)

    for (j = 0; j < grupoNumeros.length; j++) {
        //    Condição para pegar o numero na mesma posição
       
        if (numero === grupoNumeros[j] && (j != i)) {
            console.log(`Numero = ${numero} na posição (index) j= ${j}; Numero = ${grupoNumeros} na posição (index) j= ${i}`)
          
            //    Excluindo o que é igual o anterior
            grupoNumeros.splice(j, 1)

            // Gerando um novo numero e 
            do { novoNumero = Math.floor(Math.random() * 20) }

            // Se o ultimo introduzido for igual a um dos numeros vetor
            while (grupoNumeros.includes(novoNumero)) 
            //  Colocando no fim do vetor
            console.log(`Adicionando numero ${novoNumero} ao vetor`)
            grupoNumeros.push(novoNumero)

        }
    }
}

console.log(`Vetor sem números repetidos: ${grupoNumeros}`)