// Realizar as atividades e enviar os arquivos JS.

// 1) Fazer um programa onde o usuário pode acessar as seguintes opções:

// A) Falar com a atendente B) Falar com o RH
// C) Falar com o gerente D) Sair

// Mostrar mensagens para cada opção!
// (DESAFIO: Fazer voltar para o menu)
var opcaoEscolhida
var text
function opcao(escolha) {


    switch (escolha) {

        case "a":
            text = "Você escolheu falar com o atendente. Aguarde..."
            console.log("Você escolheu falar com o atendente. Aguarde")
            break;

        case "b":
            text = "Você escolheu falar com o RH. Aguarde..."
            console.log("Você escolheu falar com o RH. Aguarde")
            break;

        case "c":
            text = "Você escolheu falar com o gerente. Aguarde..."
            console.log("Você escolheu falar com o gerente. Aguarde")
            break;

        case "d":
            text = "Você escolheu sair. Adeus."
            console.log("Você escolheu sair. Adeus")
            break;

    }

}

function confirma() {
    document.getElementById("antes").style.display = "none"
    document.getElementById("depois").style.display = "block"
    document.getElementById("resultado").innerHTML = text;
   
}

function voltar(){
    document.getElementById("antes").style.display = "block"
    document.getElementById("depois").style.display = "none"

}
