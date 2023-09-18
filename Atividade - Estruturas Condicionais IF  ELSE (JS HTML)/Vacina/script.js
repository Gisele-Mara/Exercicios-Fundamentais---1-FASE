// Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). 
// Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. 
// Caso contrário, mostrar mensagem "Não pode se vacinar!".



let nomePessoa, idadePessoa
let comorbidade
let valor


nomePessoa = document.getElementById("nome")
idadePessoa = document.getElementById("idade")



function vacinacao() {

    comorbidade = document.querySelector('input[name="comorbidade"]:checked')
    console.log(comorbidade.value)


    nomePessoa = nomePessoa.value
    idadePessoa = Number(idadePessoa.value)


    if (idadePessoa >= 60 || comorbidade.value == "Sim") {
        alert("Pode se vacinar")
        console.log("Pode se vacinar")

    } else {
        alert(`${nomePessoa} com ${idadePessoa} e sem comorbidade. Não pode se vacinar!`)
        console.log(`${nomePessoa} com ${idadePessoa} e sem comorbidade. Não pode se vacinar!`)
    }

}