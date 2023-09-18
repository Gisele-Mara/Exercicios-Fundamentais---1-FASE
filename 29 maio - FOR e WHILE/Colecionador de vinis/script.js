// Você é um colecionador de vinis e resolveu ir ao sebo para comprar alguns vinis raros. 
//   Porém, você tem apenas R$200 para gastar. Faça um programa que pergunte o nome do vinil e o valor, 
//   repetidamente. Caso o valor ultrapasse R$200, encerrar (desconsiderando o último vinil). 
//   Mostrar na tela:

// a) O total gasto em reais dos vinis.
// b) O valor que sobrou em dinheiro.
// c) Quantos vinis foram comprados.
// d) A média de preço dos vinis.
// e) O vinil mais caro e o mais barato


let nomeVinil = []
let valorVinil = []
let totalGasto = 0, qntVinis = 0
let i = 0
let resultado = document.getElementById('resultado')

function addInput() {

    const divInpts = document.getElementById('inpts')
    const inputName = document.createElement("input")
    inputName.type = 'text'
    inputName.name = 'vetorNome[]'
    divInpts.appendChild(inputName)

    const inputValue = document.createElement("input")
    inputValue.type = 'text'
    inputValue.name = 'vetorValor[]'
    divInpts.appendChild(inputValue)

    const br = document.createElement("br")
    divInpts.appendChild(br)


}

function calcs() {

    let inputNome = document.getElementsByName('vetorNome[]')
    let inputValor = document.getElementsByName('vetorValor[]')

    for(i=0; i < inputValor.length; i++) {

        nomeVinil[i] = inputNome[i].value
        valorVinil[i] = (Number(inputValor[i].value))
       
        totalGasto = totalGasto + valorVinil[i]
        console.log(totalGasto)
        qntVinis += 1


        if (totalGasto >= 200) {
          
            valorVinil.pop()
            console.log(valorVinil)
            qntVinis--;
            continue;
        }

        if (isNaN(inputValor[i].value)) {
            valorVinil.pop()
            console.log(valorVinil)
            qntVinis--;
        }
        
    }

    if (totalGasto < 200) {
        let sobrou = 200 - totalGasto
        resultado.innerHTML += `O valor que sobrou em dinheiro foi R$ ${sobrou}<br>`
    }



    
    resultado.innerHTML +=(`A quantidade de vinis comprados foi: ${qntVinis} <br>`)
    resultado.innerHTML+=(`A média de preços dos vinis comprados é R$ ${totalGasto / qntVinis}<br>`)
    resultado.innerHTML+=(`O maior preço é R$ ${Math.max(...valorVinil)}<br>`)
    resultado.innerHTML+=(`O menor preço é R$ ${Math.min(...valorVinil)}<br>`)


}
