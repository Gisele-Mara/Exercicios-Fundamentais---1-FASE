let i = 10  


// for( i = 10; i <=1000; i++)
// {

// if( i <= 500){
// console.log(`${i}`)

// }

// if( i >= 900){
//     console.log(`${i}`)
// }
// i++
// }

while ( i <= 1000) {
   
    if( i <= 500){
        console.log(`${i}`)
        document.getElementById("resultado").innerHTML += `${i} <br>`
        
        }
       
    if( i == 500){

        document.getElementById("resultado").innerHTML += `<br> _______________________________________________________ <br>`

    }
        
        if( i >= 900){
            console.log(`${i}`)
            document.getElementById("resultado").innerHTML += `${i} <br>`
        }


    i++
}