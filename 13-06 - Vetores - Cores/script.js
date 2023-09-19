// Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco.



let corPrimaria = []
let corSecundaria = []
let cores 

for(let i = 0; i <3; i++){
    corPrimaria[i]= prompt(`Digite a ${i+1}ª cor primária: `)
}

for(let i = 0; i < 3; i++){
    corSecundaria[i]= prompt(`Digite a ${i+1}ª cor secundária: `)
}

cores = corPrimaria.concat(corSecundaria)
console.log(`Vetor: ${cores}`)

let addPreto = (prompt(`Adicionar no início da lista a cor preta? S ou N`)).toUpperCase()
if (addPreto == "S"){
    cores.unshift("preto")
}

let addBranco = (prompt(`Adicionar ao final da lista a cor branco? S ou N`)).toUpperCase()
if (addBranco == "S"){
    cores.push("branco")
}

console.log(`Sequência de cores: ${cores}`)