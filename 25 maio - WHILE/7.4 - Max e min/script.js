let valor = []


for (let i = 0; i <= 15; i++){
valor[i] = Math.floor(Math.random()*100)
console.log(valor[i])

}


console.log(`O maior valor é ${Math.max(...valor)}`)
console.log(`O menor valor é ${Math.min(...valor)}`)