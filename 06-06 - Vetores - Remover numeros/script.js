// Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. Desenvolver um programa que remova os números a mais para corrigi-la. Mostrar a lista corrigida na tela.



let numeros = []
k = 15
for (let i = 0; i < 15; i++) {
    numeros[i] = i


}

while (k > 5) {

    numeros.pop()
    console.log(numeros)
    k--

}
