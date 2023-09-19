let numeros = []
let primeiroSomatorio = [], segundoSomatorio = []

for(let i = 1; i <=10;i++){
    numeros[i]= Number(prompt(`Digite ${i}º numero: `))

    if(i <= 5){
        primeiroSomatorio[i] = numeros[i]
    }else (
        segundoSomatorio[i] = numeros[i]
        )

}