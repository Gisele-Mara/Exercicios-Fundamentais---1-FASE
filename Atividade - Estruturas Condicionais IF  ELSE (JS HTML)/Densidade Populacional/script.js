// Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. 
// Sendo, densidade igual a população (total de habitantes) dividida pela área (metros quadrados).
//  Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).


let totalHabitantes, areaRegiao, densidadeDemografica


totalHabitantes = Number(prompt("Digite o total de habitantes da região: "))
areaRegiao = Number(prompt("Digite a área da região: "))


densidadeDemografica = (totalHabitantes / areaRegiao).toFixed(2)

if (densidadeDemografica >= 100) {
    console.log("A densidade demográfica da região é alta")
} else if (densidadeDemografica < 25) {
    console.log("A densidade demográfica da região é baixa")
}
else {
    console.log("A densidade demográfica da região é média")
}