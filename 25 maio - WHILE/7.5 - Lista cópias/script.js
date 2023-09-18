let i = 1



while( i <= 500){
let copia = 0.33;
copia = (copia * i).toFixed(2)

document.getElementById("resultado").innerHTML += `${i}    :   R$${copia} <br>`
i++;
}