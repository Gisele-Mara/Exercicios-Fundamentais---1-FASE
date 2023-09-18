let numero, divisores = 0
let primo = ""

for (let j = 0; j <= 42; j++ ){
  numero = j

for (let i = 0; i <= numero; i++) {
  if (numero % i == 0) {
    //  console.log(`O número é ${numero} divisível por ${i} \n`)
    divisores++
    // console.log(`Número de divisores: ${divisores} \n`)
  }
}
if (divisores == 2) {
  // console.log(` O número ${numero} é primo. \n`)
 primo = primo + numero + " "
 console.log(`${primo}`)
  divisores = 0;
 }
 else {
//   console.log(`O número ${numero} não é primo \n`)
   divisores = 0;
 }
}
