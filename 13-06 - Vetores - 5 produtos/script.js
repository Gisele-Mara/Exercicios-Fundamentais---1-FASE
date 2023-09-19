// Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

// a) A quantidade de produtos com preço inferior a R$50;
// b) O nome dos produtos com preço de R$50 a R$100;
// c) A média dos preços dos produtos com preço superior a R$100.

let nomeProduto = [], preco = []
let qntMenor50 = 0;
let produtosEntre50e100 = []
let soma = 0, media=0, qntMaior100 = 0;

for (let i = 1; i <= 5; i++) {
    nomeProduto[i] = prompt(`Digite o nome do ${i}º produto: `)
    preco[i] = Number(prompt(`Digite o preco do ${i}º produto: `))

    switch (true) {
        case (preco[i] < 50):
            qntMenor50 = qntMenor50 + 1;
            break;

        case (preco[i] >= 50 && preco[i] <= 100):
            produtosEntre50e100.push(nomeProduto[i])
            break;

        case (preco[i] > 100):
            soma = soma + preco[i]
            qntMaior100 = qntMaior100 + 1
            media = soma / qntMaior100;
            break;

    }
}

console.log(`A quantidade de produtos com preço inferior a R$50: ${qntMenor50}`)
console.log(` O nome dos produtos com preço de R$50 a R$100: ${produtosEntre50e100}`)
console.log(`  A média dos preços dos produtos com preço superior a R$100: ${ media}`)