let numero, divisores = 0
let i, primos = "", naoPrimo = ""


 for (i = 0; i < 5; i++) {
   numero = Math.floor(Math.random() * 100)
   primoOuNao();
 }

function primoOuNao() {
  for (let j = 0; j <= numero; j++) {
    if (numero % j == 0) {
      //  console.log(`O número é ${numero} divisível por ${j} \n`)
      divisores++
      // console.log(`Número de divisores: ${divisores} \n`)
    }
  }
  if (divisores == 2) {
    //console.log(`O número ${numero} é primo.`)
    primos = primos + numero + " "
    console.log(`Números primos: ${primos}`)
    divisores = 0;
  }
  else {
   // console.log(`O número ${numero} não é primo.`)
    naoPrimo = naoPrimo + numero + " "
    console.log(`Números não primos: ${naoPrimo}`)
    divisores = 0;
  }
}

