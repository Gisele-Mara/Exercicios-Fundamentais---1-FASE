// Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:

// Sem Geração (até 1945)
// Baby Boomers (nascidos entre 1946 e 1964)
// Geração X (1965-1980)
// Geração Y ou Millennials (1981-1996)
// Geração Z (1997-2010)
// Geração Alfa (a partir de 2011)

let text
let geracao
function verificar() {

    let geracao = document.getElementById("geracao").value
    
    
    switch (true) {

        case (geracao <= 1945):
            text = "Sem Geração"
            console.log("Sem Geração")
            break;
        case (geracao>= 1946 && geracao <= 1964):
            text = "Baby Boomers"
            console.log("Baby Boomers")
            break;
        case (geracao >= 1965 && geracao <= 1980):
            text = "Geração X"
            console.log("Geração X")
            break;
        case (geracao >= 1981 && geracao <= 1996):
            text = "Geração Y ou Millenial"
            console.log("Geração Y ou Millenial")
            break;
        case (geracao >= 1997 && geracao <= 2010):
            text = "Geração Z"
            console.log("Geração Z")
            break;

        case (geracao >= 2011):
            console.log("Geração Alfa")
            break;
    }


    document.getElementById("resultado").innerHTML = text
}