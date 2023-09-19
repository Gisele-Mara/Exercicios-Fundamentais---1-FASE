// Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e com palavras).

let vetorNumeros = [9,8, 7, 6, 5, 5, 6, 7, 8, 9]
// Transformando em numero
let numeros = Number(vetorNumeros.join(""))

// Todo número palíndromo com uma quantidade par de algarismo é divisível por 11.

 if (numeros % 11 == 0) {
    for (let i = 0; i < vetorNumeros.length; i++) {
        numerosEsquerda = i
        numeroDireita = vetorNumeros.length - (i+1);
        
        console.log(`Posição à esquerda: ${i}; Posição à direita: ${numeroDireita}`)
        if (vetorNumeros[numerosEsquerda] === vetorNumeros[numeroDireita]) {
            console.log(`${vetorNumeros[i]} = ${vetorNumeros[numeroDireita]}`)
        } else{
            console.log(`Não é palindromo`)
            break;
        }
    }
    console.log(`É palindromo`)
 } else{
    console.log(`Não é palindromo`)
 }
