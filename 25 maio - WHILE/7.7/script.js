let i

function letraA() {
    
for (i = 0; i <= 250; i++) {

    document.getElementById("resultado").innerHTML +=`${i} <br>`

    if (i == 250) {

        document.getElementById("resultado").innerHTML += (`MANHÊ, ACABEI O PRIMEIRO <br> <br>`)
    }
}
}

function letraC(){
 i= 250;
while (i >= 100) {

    document.getElementById("resultado").innerHTML +=(`${i} <br>`)
    i--;

    if (i == 100) {
        document.getElementById("resultado").innerHTML +=(`MANHÊ, ACABEI O SEGUNDO! <br> <br>`)
    }
}
}

function letraE(){
 i=100;
while (i >= 0) {

    document.getElementById("resultado").innerHTML +=`${i} <br>`
    i = i - 5;


    if (i == 0) {
        document.getElementById("resultado").innerHTML +=`MANHÊ, ACABEI O TERCEIRO! <br> <br>`
    }
}
}


function letraG(){
i=0;
while (i <= 9500) {

    document.getElementById("resultado").innerHTML +=(`${i} <br>`)
   

    if (i == 9500) {
        document.getElementById("resultado").innerHTML +=(`MANHÊ, ACABEI O QUARTO! <br> <br>`)
    }
    i = i + 3;
}
}


function letraI(){
    i=9500;
for (i = 9500; i <= 9600; i++) {
    if (i % 2 == 0) {

        document.getElementById("resultado").innerHTML +=`${i} <br>`
    }

    if (i == 9600) {
        document.getElementById("resultado").innerHTML +=`MANHÊ, ACABEI O MAIS UM! <br> <br>`
    }
}
}


function letraK (){
    i=9500;
 while (i <= 10285){
    if( i % 2 == 1){
        document.getElementById("resultado").innerHTML +=(`${i} <br>`)

    }
    if (i == 10285) {
        document.getElementById("resultado").innerHTML +=(`MANHÊ, ACABEI TUDO. POSSO JOGAR BOLA?! <br> <br>`)
    }

    i++;
 }

}

