// Um determinado restaurante trabalha com limite de lotação de 50 pessoas. Porém, mesmo com esse limite, o restaurante pode encerrar seu atendimento antes do horário por falta de insumos para produção das refeições. Criar um programa que receba os dados da quantidade de pessoas que chegam ao restaurante (repetidamente) e se os insumos estão "ok" ou "insuficientes". Caso alguma das duas possibilidades aconteça, encerrar o programa e mostrar ao final o motivo do encerramento (atingiu limite de pessoa ou faltaram insumos)


let limiteLotacao = 50;
let insumos = 50;
let pessoas = 0, totalPessoas = 0

while ((totalPessoas <= limiteLotacao) && (insumos > 0)) {

    pessoas = Math.floor(Math.random() * 4)
    console.log(`Entrada de pessoas: ${pessoas}`)
    
    consumo = Math.round(Math.random() * 2)
    console.log(`Consumo: ${consumo}`)
    
    insumos = insumos - (pessoas * consumo)
    
    console.log(`Insumos = ${insumos}`)
    totalPessoas += pessoas
    console.log(`Total pessoas: ${totalPessoas}`)
}

if (totalPessoas >= 50) {
    console.log(`Atingiu limite de pessoas.`)
}
if (insumos <= 0 ) {
    console.log(`Restaurante fechado por falta de insumos.`)
}