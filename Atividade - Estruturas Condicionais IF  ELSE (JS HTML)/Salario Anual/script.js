// Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. 
// Mostrar o salário mensal do funcionário e dizer se está abaixo ou acima do piso salarial mensal.



let salarioAnual, pisoSalarialMensal
let salarioMensal

salarioAnual = document.getElementById("salarioAnual")
pisoSalarialMensal = document.getElementById("pisoSalarialMensal")


function salario(){

pisoSalarialMensal = Number(pisoSalarialMensal.value);
salarioAnual= Number(salarioAnual.value)

salarioMensal = salarioAnual / 12;

if (salarioMensal > pisoSalarialMensal) {
    console.log(`O salário mensal de ${salarioMensal} está acima do piso salarial mensal da sua categoria`)
    alert(`O salário mensal de ${salarioMensal} está acima do piso salarial mensal da sua categoria`)
} else if (salarioMensal == pisoSalarialMensal) {

    console.log(`O salário mensal de ${salarioMensal}  é igual ao piso salarial mensal da categoria`)
    alert(`O salário mensal de ${salarioMensal} é igual ao piso salarial mensal da categoria`)
} else {

    console.log(`O salário mensal de ${salarioMensal} está abaixo piso salarial mensal da sua categoria`)
    alert(`O salário mensal de ${salarioMensal} está abaixo piso salarial mensal da sua categoria`)
}
}