let numero

function traduzir() {

    numero = document.getElementById("english").value

    switch (numero) {

        case "One":
            text = "Um"
            document.getElementById("item").value = text;
            document.getElementById("resultado").innerHTML = ""
            break;
        case "Two":
            text = "Dois"
            document.getElementById("item").value = text;
            document.getElementById("resultado").innerHTML = ""
            break;
        case "Three":
            text = "Três"
            document.getElementById("item").value = text;
            document.getElementById("resultado").innerHTML = ""
            break;
        case "Four":
            text = "Quatro"
            document.getElementById("item").value = text;
            document.getElementById("resultado").innerHTML = ""
            break;
        case "Five":
            text = "Cinco"
            document.getElementById("item").value = text;
            document.getElementById("resultado").innerHTML = ""
            break;

        default:
            text = "Nenhuma opção escolhida!"
            document.getElementById("resultado").innerHTML = text
            document.getElementById("item").value = ""
    }
}