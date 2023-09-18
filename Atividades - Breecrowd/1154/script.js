
let idade = 0
let i = 0


function add() {
    
let idadeUser = Number(document.getElementById("idadeUser").value)

if (idadeUser >= 0){
    i ++;
    idade = idade + idadeUser
    console.log(idade)
}else
{   
    
    media = (idade / i).toFixed(2)
    document.getElementById("resultado").innerHTML = `A média de idade é ${media}`
}

}