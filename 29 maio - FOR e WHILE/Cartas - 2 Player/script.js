let i = 0

let somaP1 = 0, cartaP1
let somaP2 = 0, cartaP2


function calcs() {

    jogo()
    i++

    if (i == 5) {
        console.log(i)
        document.getElementById("playOne").style.display = "none"
        document.getElementById("playTwo").style.display = "none"
        document.getElementById("resultado").innerHTML =`Pontos Player One: ${somaP1} <br> Pontos Player Two: ${somaP2}`

    }
}

function jogo() {


    let playerOne = document.getElementById("nomePlayerOne").value
    let playerTwo = document.getElementById("nomePlayerTwo").value
    

    cartaP1 = Number(document.getElementById("playOne").value)
    cartaP2 = Number(document.getElementById("playTwo").value)

    
    
    somaP1 = somaP1 + cartaP1
    somaP2 = somaP2 + cartaP2


    console.log(somaP1)



}
// function tela(){

//     if (inptPOne.style.display == "block")




// }