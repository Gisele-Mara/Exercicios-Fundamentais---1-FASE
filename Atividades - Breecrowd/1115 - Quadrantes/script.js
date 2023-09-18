// Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. 
// Para cada ponto escrever o quadrante a que ele pertence. 
// O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).

let x;
let y;
let text

function quadrante() {

    x = Number(document.getElementById("eixoX").value)
    y = Number(document.getElementById("eixoY").value)

    switch (true){

    
    case (Math.sign(x) == 1 && Math.sign(y) == 1): 
        text = `O par ordenado (${x}, ${y}) está no 1º Quadrante`
        document.getElementById("1Q").style.fontSize = "xx-large"
        document.getElementById("1Q").style.alignItems = "flex-start"
        document.getElementById("1Q").innerHTML = `+ + `
    break;

    case (Math.sign(x) == -1 && Math.sign(y) == 1):
        text = `O par ordenado (${x}, ${y}) está no 2º Quadrante`
        document.getElementById("2Q").innerHTML = `- + `
        break;

    case (Math.sign(x) == -1 && Math.sign(y) == -1):
        text = `O par ordenado (${x}, ${y}) está no 3º Quadrante`
        document.getElementById("3Q").innerHTML = `- - `
    break;

    case(Math.sign(x) == 1 && Math.sign(y) == -1):
        text = `O par ordenado (${x}, ${y}) está no 4º Quadrante`
        document.getElementById("4Q").innerHTML = `- + `
    break;

    case (Math.sign(x) == 0 ||Math.sign(y) == 0):
        return;

}
document.getElementById("resultado").innerHTML = text

}
