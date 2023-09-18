// Supondo que a população de um país A seja da ordem de 80.000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.


let habPaisA = 80000
let habPaisB = 200000
let taxaAnualA = (0.03)
let taxaAnualB = (0.015)
let anos = 0

let valorNaoPercA = 0
let valorNaoPercB = 0

//valorNaoPercA = habPaisA * taxaAnualA
//valorNaoPercB = habPaisB * taxaAnualB
console.log(valorNaoPercA)


while (habPaisB >= habPaisA) {
    habPaisA = habPaisA + (habPaisA * taxaAnualA)
    console.log("A" + habPaisA)
    habPaisB = habPaisB + (habPaisB * taxaAnualB)
    console.log("B" + habPaisB)
    anos = anos + 1
    console.log("Anos: "+ anos)

}
