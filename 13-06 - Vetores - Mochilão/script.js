// Você está fazendo um mochilão pela Europa e precisa saber qual a distância que vai percorrer em determinada viagem ou trecho da viagem, utilizando trem. De Bruxelas até Berlim são 764km e de Berlim até Praga são 350km. De Praga até Viena são mais 292km. De Viena até Budapeste, são outros 242km. Faça um sistema no qual o usuário digite a cidade de origem, em seguida a cidade de destino. Mostrar na tela a distância total (km) da viagem.

// Bruxelas <-> Berlim = 764km
// Berlim <-> Praga = 350km
// Praga <-> Viena = 292km
// Viena <-> Budapeste = 242km

let distancia, origem, destino;
let distanciaTotal = 0

let cidade = ["bruxelas", "berlim", "praga", "viena", "budapeste"]
distancia = [0, 764, 350, 292, 242]

origem = prompt("Digite a cidade de origem: ")
destino = (prompt("Digite o destino: "))


if (cidade.includes(origem)) {
 
    for (let i = 0; i < cidade.length; i++) {

        if (destino == cidade[i]) {
            let indiceOrigem = cidade.indexOf(origem)
            console.log(`Posição index da cidade origem: ${indiceOrigem}`)
            let indiceDestino = cidade.indexOf(destino)
            console.log(`Posição index cidade destino: ${indiceDestino}`)

        
            for (let j = indiceOrigem; j <= indiceDestino; j++) {
                distanciaTotal = distanciaTotal + distancia[j]
                console.log(`A distância total da viagem de ${origem} até ${destino} é ${distanciaTotal} km.`)

            }
        }



    }
} else { console.log("Cidade não correspondente") }