// Faça um programa que leia as notas referentes às duas avaliações de um aluno. Calcule e imprima a média semestral. 
// Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). 
// Cada nota deve ser validada separadamente.


let notaA = 0, notaB = 0
let media


notaA = Number(prompt("Digite a nota da 1ª avaliação: "))
while (notaA < 0 || notaA > 10) {
    console.log("Nota invalida")
    notaA = Number(prompt("Uma nota válida deve pertencer ao intervalo [0,10]. Digite a nota da 1ª avaliação: "))
}

    notaB = Number(prompt("Digite a nota da 2ª avaliação: "))

    while (notaB < 0 || notaB > 10) {
        console.log("Nota invalida")
        notaB = Number(prompt("Uma nota válida deve pertencer ao intervalo [0,10]. Digite a nota da 2ª avaliação: "))
    }

    media = (notaA + notaB) / 2;
    console.log (`A média semestral é ${media}.`)