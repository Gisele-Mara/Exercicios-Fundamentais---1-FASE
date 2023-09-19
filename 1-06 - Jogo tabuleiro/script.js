// Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é o dado D20. Esse dado possui 20 faces ou "lados" com valores de 1 a 20. Criar um sistema simples de jogo, onde no início é solicitado o número de jogadores e para cada jogador deve-se armazenar valores de quatro jogadas de um D20. A pontuação do jogador é definida excluindo o primeiro e o último valor, somando então os valores da segunda e terceira jogadas. Ao final mostrar a soma de cada jogador e suas posições. (DESAFIO: validar os valores de 1 a 20, ou seja, caso um valor digitado não esteja entre dentro dos valores do dado, repetir a pergunta)


let qntJogadores = 5
let jogada = []
let pontuacao
let soma = 0
let somaJogador = []


for (let i = 1; i <= qntJogadores; i++) {

    for (let i = 1; i <= 4; i++) {
        jogada[i] = Math.floor(Math.random()* 20)
        console.log(jogada[i])
        if( i > 1 && i < 4){
            soma = soma + jogada[i]
        }
    }
somaJogador[i] = soma;
console.log(`Jogador nº${i}. Soma: ${somaJogador[i]} pontos`)

soma = 0;

}

