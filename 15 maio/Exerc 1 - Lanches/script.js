// 1) O cardápio de uma casa de lanches é dado pela tabela abaixo:

// Código Produto Preço Unitário (R$)

// 100 Cachorro Quente R$1,70
// 101 Bauru Simples R$2,30
// 102 Bauru com Ovos R$2,60
// 103 Hamburguer R$2,40
// 104 Cheeseburguer R$2,50
// 105 Refrigerante R$1,00

// Escreva um programa que leia o código do item escolhido pelo consumidor e a quantidade calculando e mostrando o valor a pagar. 
// Não será necessário exibir o produto e o valor, somente o valor final.

let qnt = 0
let valor = 0
let codigoItem
let qntA = 0
let qntB = 0
let qntC = 0
let qntD = 0
let qntE = 0
let qntF = 0



function comprar(codigoItem) {

    //  codigoItem = document.getElementById("codigos").value
    console.log(codigoItem)
    switch (codigoItem) {

        case "100":
            valor = valor + 1.70
            qntA = qntA + 1
            document.getElementById("qntA").innerHTML = qntA
            break;

        case "101":
            valor = valor + 2.30
            qntB = qntB + 1
            document.getElementById("qntB").innerHTML = qntB
            break;
        case "102":
            valor = valor + 2.60
            qntC = qntC + 1
            document.getElementById("qntC").innerHTML = qntC
            break;
        case "103":
            valor = valor + 2.40
            qntD = qntD + 1
            document.getElementById("qntD").innerHTML = qntD
            break;
        case "104":
            valor = valor + 2.50
            qntE = qntE + 1
            document.getElementById("qntE").innerHTML = qntE
            break;
        case "105":
            valor = valor + 1.00
            qntF = qntF + 1
            document.getElementById("qntF").innerHTML = qntF
            break;

    }
    document.getElementById("resultado").innerHTML = valor;
}


function diminuir(codigoItem) {

    switch (codigoItem) {

        case "100":
            valor = valor - 1.70
            qntA = qntA - 1
            document.getElementById("qntA").innerHTML = qntA
            break;
        case "101":
            valor = valor - 2.30
            qntB = qntB - 1
            document.getElementById("qntB").innerHTML = qntB
            break;
        case "102":
            valor = valor -  2.60
            qntC = qntC - 1
            document.getElementById("qntC").innerHTML = qntC
            break;
        case "103":
            valor = valor - 2.40
            qntD = qntD - 1
            document.getElementById("qntD").innerHTML = qntD
            break;
        case "104":
            valor = valor - 2.50
            qntE = qntE - 1
            document.getElementById("qntE").innerHTML = qntE
            break;
        case "105":
            valor = valor - 1.00
            qntF = qntF - 1
            document.getElementById("qntF").innerHTML = qntF
            break;

    }

    document.getElementById("resultado").innerHTML = valor;

}
function finalizar() {

    document.getElementById("resultado").innerHTML = `O valor final da compra é R$${valor}`;

}

