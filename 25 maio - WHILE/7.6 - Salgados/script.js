let preco
let i = 1


while (i <=50){
preco = 2.00

preco = preco * i

document.getElementById("resultado").innerHTML += `${i} = R$${preco.toFixed(2)} <br>`

i++;

}