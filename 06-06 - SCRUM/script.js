// SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada na área da tecnologia. Dentro do SCRUM, o planejamento é realizado através de 'sprints' que normalmente variam de 15 a 30 dias. Criar um programa onde o usuário deve digitar o tempo total do projeto em dias e o período das sprints. Após calculado o número de sprints (média), arredondando o número para baixo, cadastrar para cada sprint um título e um objetivo.


let sprints, tempoTotal, tr, td
tabela = document.getElementById("tabela")

function calcular() {
    sprints = 15
    tempoTotal = 90
    // sprints = document.getElementById('sprints')
    // tempoTotal = document.getElementById('tempoDias')
    let mediaSprints = Math.floor(tempoTotal / sprints)


    tabela.innerHTML = `<tr> <th> Título </th> <th> Objetivo </th> </th>`

    for (let i = 0; i < mediaSprints; i++) {

        tr = document.createElement("tr")
        tabela.appendChild(tr)

        td = document.createElement("td")
        tr.appendChild(td)

        let inputTitulo = document.createElement("input")
        inputTitulo.type = 'text';
        td.appendChild(inputTitulo)

        td = document.createElement("td")
        tr.appendChild(td)

        let inputObjetivo = document.createElement("input")
        td.appendChild(inputObjetivo)

    }
}










