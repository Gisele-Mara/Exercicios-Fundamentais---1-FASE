let numero
let i = 0

function faca() {
    let a = document.getElementById("numero").value
    numero = Number(a)


    while (i <= numero) {
        document.getElementById("resultado").innerHTML += `${i} <br>`
        i++;

    }


}