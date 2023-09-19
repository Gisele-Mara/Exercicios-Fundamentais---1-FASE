// Na maioria das linguagens de programação, é possível contar caracteres de uma string (palavra, frase, etc). Criar um sistema no qual o usuário digite 5 palavras e ao final mostre o tamanho em número de caracteres, de cada uma delas. (Pesquisar sobre o comando length, para solução).

let inicioPalavra = 0
let posicaoEspaco = 0
let finalPalavra
let palavra

let frase = "mostre tamanho número caracteres strings"


while (posicaoEspaco > -1) { // -1, pois quando indexOf não encontra a palavra a função retorna -1 

    posicaoEspaco = frase.indexOf(" ", posicaoEspaco)
    console.log(`Espaço: ${posicaoEspaco}`)

    posicaoEspaco= posicaoEspaco + 1
    finalPalavra = posicaoEspaco - 1
    
    console.log(`Inicio da palavra ${inicioPalavra}; Final da Palavra ${finalPalavra}`)
    palavra = frase.slice(inicioPalavra, finalPalavra)
    inicioPalavra = posicaoEspaco 
    
    console.log(`Palavra: "${palavra}". Tamanho: ${palavra.length} letras. \n`)
    posicaoEspaco = frase.indexOf(" ", posicaoEspaco)
    
    if(posicaoEspaco == -1){
    palavra = frase.slice(finalPalavra + 1)
    console.log(`Palavra: "${palavra}". Tamanho: ${palavra.length} letras. \n`)
   
}

}

