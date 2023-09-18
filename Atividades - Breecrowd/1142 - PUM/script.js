let k = 0;
let carac = "";

for (let i = 0; i < 7; i++) {
    for (let j = 1; j <= 4; j++) {
        k = k + 1;
        if (k % 4 == 0) {
            console.log(carac, "PUM") 
            console.log("\n");
        } else {
        carac = carac + " " + k.toString() }   
    }
    
    carac = "";
}