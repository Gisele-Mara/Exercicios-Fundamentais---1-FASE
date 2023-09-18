// // // Criar um programa que verifique se um cor digitada é primária(vermelho, amarelo, azul), 
// com mensagem "Cor primária!" ou secundária (verde, laranja, roxo), com mensagem "Cor secundária!".
// //  Caso não seja nenhuma das duas categorias, mostrar mensagem "Cor não primária ou secundária!".



function verificar() {
    let cor = document.getElementById("cor").value
    cor = cor.toLowerCase();
    console.log(cor)

    switch (cor) {

        case "vermelho":
        case "amarelo":
        case "azul":
            text = `A cor ${cor} é primária.`
            console.log("Cor primária")
            break;


        case "verde":
        case "laranja":
        case "roxo":
            text = `A cor ${cor} é secundária.`
            console.log("Cor secundária")
            break;

        default:
            text = `A cor ${cor} não primária ou secundária.`
            console.log(`A cor ${cor} não primária ou secundária.`)
            break;
    }

    document.getElementById("resultado").innerHTML = text
}