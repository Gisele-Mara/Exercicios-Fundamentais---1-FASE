// Elaborar um programa no qual sejam digitadas 4 notas. Deve ser calculada uma média e mostrada na tela. 
// Se a média for maior ou igual a 7, mostrar uma mensagem "Aprovado", se for menor que 7, mostrar uma mensagem "Reprovado". 
// (DESAFIO: Criar uma terceira condição para recuperação. 
//     Exemplo: Menor que 5 reprovado, entre 5 e 7 recuperação, maior ou igual aprovado).


let notaA, notaB, notaC, notaD;

let media, soma

notaA = document.getElementById("notaA")
notaB = document.getElementById("notaB")
notaC = document.getElementById("notaC")
notaD = document.getElementById("notaD")







function calculo() {


    soma = Number(notaA.value) + Number(notaB.value) + Number(notaC.value) + Number(notaD.value);

    media = soma / 4;
    if (media >= 7) {

        console.log(`Aprovado com ${media}`)
        let text = "Aprovado com "
        document.getElementById("media").innerHTML = text + media;
    }
    else if (media < 5) {
        text = "Reprovado com "
        console.log(`Reprovado com ${media}`)
        document.getElementById("media").innerHTML = text + media;
    }
    else {
        text = "Em recuperação com "
        console.log(`Em recuperação com ${media}`)
        document.getElementById("media").innerHTML = text + media;
    }


}