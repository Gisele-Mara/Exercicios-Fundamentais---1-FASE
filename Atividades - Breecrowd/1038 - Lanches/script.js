
let codigoItem
let preco;
let qntItem
let valorTotal = 0




function Calcular() {


    // do {
        codigoItem = Number(prompt("Digite o código do item: "))
        qntItem = Number(prompt("Digite a quantidade deste item: "))
    // } while (codigoItem > 0 && codigoItem <= 5) {
      

        switch (codigoItem) {

            case 1:
                console.log("Cachorro quente")
                preco = 4.00;
                valorTotal = valorTotal + (qntItem * preco);
                alert(`Total: R$ ${valorTotal}`);
                break;

            case 2:
                console.log("X-Salada")
                preco = 4.50;
                valorTotal = valorTotal + (qntItem * preco);
                alert(`Total: R$ ${valorTotal}`);
                break;

            case 3:
                console.log("X-Bacon")
                preco = 5.00;
                valorTotal = valorTotal + (qntItem * preco);
                alert(`Total: R$ ${valorTotal}`);
                break;

            case 4:
                console.log("Torrida simples");
                preco = 2.00
                valorTotal = valorTotal + (qntItem * preco);
                alert(`Total: R$ ${valorTotal}`);
                break;

            case 5:
                console.log("Refrigerante")
                preco = 1.50
                valorTotal = valorTotal + (qntItem * preco);
                alert(`Total: R$ ${valorTotal}`);
                break;

            default:
                // codigoItem = Number(prompt("Aperte 0 para finalizar a compra "))
                alert(`Total: R$ ${valorTotal}`)
                break;


        }
    }

// }
