//  Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

// ======== MENU ========
// 1- Cadastrar nome
// 2- Excluir um nome
// 3- Editar um nome
// 4- Pesquisar se um nome está cadastrado
// 5- Listar todos os nomes cadastrados
// 0- Sair do programa


let menu
let nome = []
let nomeCadastro
while (menu !== 0) {
    menu = Number(prompt(`Digite o número da opção desejada: 
                    1- Cadastrar nome
                    2- Excluir um nome
                    3- Editar um nome
                    4- Pesquisar se um nome está cadastrado
                    5- Listar todos os nomes cadastrados
                    0- Sair do programa`))

    switch (menu) {
        case 1:

            console.log(`Cadastrar nome: `);
            nomeCadastro = prompt(`Digite um nome:`)
            nome.push(nomeCadastro)
            break;

        case 2:

            console.log(`Excluir um nome`);
            alert(`Nomes cadastrados: ${nome}`)
            let excluirNome = prompt(`Qual nome deseja excluir: `)
            if (nome.indexOf(excluirNome) == -1) {
                alert(`O nome ${editarNome} não está cadastrado`)
            } 
            else {
                nome.splice([nome.indexOf(excluirNome)], 1)
                alert(`Nomes cadastrados atualmente: ${nome}`)
            }
            break;

        case 3:


            console.log(`Editar um nome`);
            let editarNome = prompt(`Qual nome deseja editar: `)
            let posicaoNome = nome.indexOf(editarNome)

            if (posicaoNome == -1) {
                alert(`O nome ${editarNome} não está cadastrado`)
            } else {

                editarNome = prompt(`Digite o nome a editar: `)
                nome.splice(posicaoNome, 1, editarNome)
            }
            break;


        case 4:


            alert(`Pesquisar se um nome está cadastrado`);
            let pesquisarNome = prompt(`Digite o nome a ser pesquisado`)
            if (nome.indexOf(pesquisarNome) == -1) {
                alert(`O nome ${pesquisarNome} não está cadastrado`)
            } else {
                alert(`O nome ${pesquisarNome} está cadastrado`)
            }
            break;


        case 5:
            console.log(`Listar todos os nomes cadastrados`);
            alert(`Nomes cadastrados: ${nome}`)
            break;


        case 0:
            alert(`Sair do Programa`);
            break;
        default:
         console.log(`Opção inexistente.`)

    }
}