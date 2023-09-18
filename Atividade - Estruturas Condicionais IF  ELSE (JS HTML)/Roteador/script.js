// Criar um programa que simule o login de um roteador. 
// O nome de usuário (username) é "admin" e a senha (password) "123". Pedir ao usuário para digitar username e password. 
// Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". 
// (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).


let username
let password



function login() {

    username = document.getElementById("username").value
    password = document.getElementById("password").value
    console.log(password)
    if (username == "admin" && password == "123") {
        console.log("Login Efetuado")
        document.body.innerHTML = "Login Efetuado"
    }
    else if (username != "admin" && password != "123") {
        console.log("Username e passowrd incorretos. Login falhou!")
    }
    else if (username != "admin") {
        console.log("Username incorreto. Login falhou!")
    }
    else { console.log("Password incorreto. Login falhou!") }

}