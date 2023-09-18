// Os leões baios são animais territoriais. 
// Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais,
//  nesse caso o casal costuma dominar uma área de 400km², juntos. 
//  Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental.
//   Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo)
//    existem dentre esse total e mostrar na tela a soma geral de área dominada,
//  incluindo todos indivíduos.


let territorioIndividuo = 320;
let territorioCasal = 400;
let numeroCasais, numeroIndividuoFemeas, numeroIndividuoMachos;
let machos = 5;
let femeas = 9;


numeroCasais = Number(prompt("Digite o número de casais: "))

if (numeroCasais <=5){
numeroIndividuoMachos = machos - numeroCasais;
numeroIndividuoFemeas = femeas - numeroCasais ;

console.log(numeroIndividuoFemeas);
console.log(numeroIndividuoMachos);
console.log(numeroCasais);

territorioCasal = territorioCasal * (numeroCasais);
territorioIndividuo = territorioIndividuo * (numeroIndividuoFemeas + numeroIndividuoMachos);


alert(`A área dominada por casais é ${territorioCasal}.
A área dominada por indiviíduos é ${territorioIndividuo}.
A área total dominada é ${territorioIndividuo + territorioCasal}.`)

}
else {
    (alert("Numero de casais incompatível com a reserva ambiental"))
    (console.log("Numero de casais incompatível com a reserva ambiental"))
}





