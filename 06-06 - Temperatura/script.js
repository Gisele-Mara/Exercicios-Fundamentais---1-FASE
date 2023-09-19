// Santa Catarina é conhecida por suas quatro estações bem definidas, o que o torna um estado com alta amplitude térmica (diferença entre a maior e a menor temperatura, registrada em um período). O INMET, Instituto Nacional de Meteorologia, pretende ter os dados de amplitude térmica de uma cidade ou estado. Desenvolva um programa que calcule e mostre os dados diários (segunda à sexta) e a média de amplitude térmica semanal, mostrando os resultados ao final. Exemplo: Digitar o nome da cidade ou estado, perguntar para os cinco dias da semana a maior temperatura do dia e a menor. Mostrar as amplitudes de cada dia e a média.

let amplitude = 0, media = 0, soma = 0

let cidade = ['Águas Mornas', 'Antônio Carlos', 'Biguaçu', 'Florianópolis', 'Palhoça', 'Santo Amaro da Imperatriz', 'São José', 'São Pedro de Alcântara', 'Governador Celso Ramos']

let diaSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']


 console.log(cidadeAleatoria(cidade));
 
for (let i = 0; i < diaSemana.length; i++) {
    let k = Math.floor(Math.random() * 50)
    let j = Math.floor(Math.random() * 50)
    let temperatura = [j, k]

    console.log(temperatura)
    console.log(`A maior temperatura de ${diaSemana[i]} é ${Math.max(...temperatura)}° C`)
    console.log(`A menor temperatura de ${diaSemana[i]} é ${Math.min(...temperatura)}° C`)
    amplitude = Math.max(...temperatura) - Math.min(...temperatura)
    console.log(`A amplitude térmica de ${diaSemana[i]} é ${amplitude}° C`)
    soma = soma + amplitude

    if (i == diaSemana.length) {
        media = soma / diaSemana.length
        console.log(`A amplitude térmica média é ${media}° C`)
    }
}


function cidadeAleatoria(item) {

    return item[Math.floor(Math.random() * item.length)]
}



