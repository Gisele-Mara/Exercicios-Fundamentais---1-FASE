// Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes.
//  Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim).
//   Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). 
// O programa será encerrado quando o código informado for o número 4.



let codigoCombustivel
let gasolina = 0
let alcool = 0
let diesel = 0


function calculo(){
   
    codigoCombustivel = Number(document.getElementById("combustivel").value)

    switch (codigoCombustivel) {

        case 1:
            
            alcool = alcool + 1
            document.getElementById("text").innerHTML = `Compra de álcool feita. Muito Obrigado!`
            break;
        case 2:
            gasolina = gasolina + 1
            document.getElementById("text").innerHTML = `Compra de gasolina feita. Muito Obrigado!`
            break;
        case 3:
            diesel = diesel + 1;
            document.getElementById("text").innerHTML = `Compra de diesel feita. Muito Obrigado!`
             break;
        case 4:
            document.getElementById("text").innerHTML = `FIM.`
            limpar()
            return;

        default:
            document.getElementById("combustivel").value = ""
            document.getElementById("combustivel").style.border = "3px solid red" 
            setTimeout(() => {
                document.getElementById("combustivel").style.border = "1px solid black"    
             }, 4000);
             document.getElementById("combustivel").placeholder = "Opção inválida! Digite novamente."
        
    }

document.getElementById("resultado").innerHTML = (`Álcool: ${alcool} 
                Gasolina: ${gasolina}
                Diesel: ${diesel}`)
}

function limpar(){

    alcool = 0
    gasolina = 0
    diesel = 0
}

