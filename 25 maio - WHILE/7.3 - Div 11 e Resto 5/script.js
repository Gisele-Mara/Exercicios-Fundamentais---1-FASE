let numero

let divisor = 11
let resto = 5
let i = 1000;


while (i < 2000){

    if(i % divisor == resto){

       document.getElementById("resultado").innerHTML += `${i} <br>`
    }
i++;

}