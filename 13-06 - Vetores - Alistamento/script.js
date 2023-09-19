// Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. Criar um programa no qual pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos”

let alistamento = []


for (let ano = 2000; ano <= 2009; ano++){

    alistamento[ano] = (prompt(`Houve alistamento em ${ano}? Digite "S" para sim ou "N" para não.`)).toUpperCase()

}

if(alistamento.lastIndexOf("S") == -1){
    console.log(`Não houve alistamento nos últimos 10 anos`)
}else {
    let anoAlistamento = alistamento.lastIndexOf("S")
    console.log(`O último ano que houve alistamento foi ${anoAlistamento}`)
  
}