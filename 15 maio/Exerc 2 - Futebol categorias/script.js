// Um determinado clube de futebol pretende classificar seus atletas em categorias e para isto ele contratou um programador para 
// criar um programa que executasse esta tarefa. 
// Para isso o clube criou uma tabela que continha a faixa etária do atleta e sua categoria. A tabela está demonstrada abaixo:

// IDADE CATEGORIA

// De 05 a 10 Infantil
// De 11 a 15 Juvenil
// De 16 a 20 Junior
// De 21 a 25 Profissional

// Criar um programa que pergunte o nome e a idade do atleta, e que mostre qual a categoria que ele pertence.
let idade;
let nomeUser;
let categoria = ""


function verificacao() {
    nomeUser = document.getElementById("nomeUser").value
    idade = document.getElementById("idadeUser").value 
   
    console.log(idade)
    switch (true) {
        case (idade >= 5 && idade <= 10):
            categoria = "Infantil"
            break;
        case (idade >= 11 && idade <= 15):
            categoria = "Juvenil"
            break;
        case (idade >= 16 && idade <= 20):
            categoria = "Junior"
            break;
        case (idade >= 21 && idade <= 25):
            categoria = "Profissional"
            break;

        default:
             }

    document.getElementById("resultado").innerHTML = `O atleta ${nomeUser} de ${idade} anos pertence a categoria ${categoria} `





}