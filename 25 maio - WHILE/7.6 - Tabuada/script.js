let i = 0
let numero
let multiplicacao

function calculo() {

    numero = Number(document.getElementById("numero").value)
    while (i <= 10) {

        multiplicacao = i * numero;
        i++;
        document.getElementById("resultado").innerHTML += `${i} x ${numero} = ${multiplicacao} <br><br>`
    }

}