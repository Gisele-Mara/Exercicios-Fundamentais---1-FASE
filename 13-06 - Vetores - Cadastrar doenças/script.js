// Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas por ambos, lista com todas doenças.


let numeroDoenca = Number(prompt("Digite o o número de doenças a cadastrar: "))
let nomeDoenca = []
let tipoTransmissao, virus = [], bacteria = [], ambos = [];


function cadastro() {
    
    for (let i = 1; i <= numeroDoenca; i++) {

        nomeDoenca[i] = prompt(`Digite o nome da ${i}ª doença: `)
        tipoTransmissao = (prompt(`Indique como a ${i}ª doença é transmitida: Vírus, bactéria ou ambos `)).toLowerCase()

        switch (tipoTransmissao) {
            case "virus":
                virus.push(nomeDoenca[i])
                console.log(`Virus: ${virus}`)
                break;
            case "bacteria":
                console.log(i)
                bacteria.push(nomeDoenca[i])
                console.log(`Bacteria: ${bacteria}`)
                break;
            case "ambos":
                ambos.push(nomeDoenca[i]);
                console.log(`Ambos: ${ambos}`)
                break;
        }


    }
}

cadastro()

console.log(`Doenças transmitidas por vírus: ${virus}`)
console.log(`Doenças transmitidas por bactérias: ${bacteria}`)
console.log(`Doenças transmitidas por ambos: ${ambos}`)
console.log(`Todas as doenças cadastradas: ${virus} \n ${bacteria} \n ${ambos} \n `)

