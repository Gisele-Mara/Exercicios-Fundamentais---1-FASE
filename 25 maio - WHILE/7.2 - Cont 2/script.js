let numero
let i = 0


function faca(){

    a = document.getElementById("numero").value
    numero = Number(a)



    while (numero >= i){

        document.getElementById("resultado").innerHTML += `${numero} <br>`
        numero = numero - 1;



    }


}