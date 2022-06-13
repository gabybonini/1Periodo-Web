/*  Ler um vetor x de 10 elementos. Copiar todos os valores negativos
do vetor x e passar para um vetor R, sem deixar elementos vazios entre os valores copiados.
 */
console.log('______QUESTÃO 06______');
let vetorX = [];
let vetorR = [];

const input = require("readline-sync");
 for (let i = 0; i <10; i++) {
   let valor = input.question("Digite 10 valores incluindo os negativos: ");
   vetorX.push(valor);
}
console.log("Os valores no vetor X sao: ");
console.log(vetorX)

for (let i = 0; i <vetorX.length; i++){
    if (vetorX[i]<0){
        vetorR[i]=vetorX[i];
    }
}
console.log("Os valores no vetor R sao: ");
console.log(vetorR)

console.log('')
console.log('______QUESTÃO 07______');
/*
Ler 2 vetores: K de 5 elementos e L de 10 elementos. Gerar um vetor S de 15 elementos
cujas primeiras 5 posições contenham os elementos K e as outras 10 os elementos L.
 */
let vetorK = [];
let vetorL = [];
let vetorS = [];

for (let i = 0; i < 5; i++){
   vetorK.push(input.question("Digite os valores de K: "));
}
console.log(vetorK)
console.log('')
for (let i = 0; i < 10; i++){
    vetorL.push(input.question("Digite os valores de L: "));
}
console.log(vetorL)
console.log('')

for (let i = 0; i < 5; i++){
    vetorS[i] = vetorK[i];
}
for (let i = 5; i < 15; i++){
    vetorS[i] = vetorL[i-5];
}
console.log("Valores do vetor S: ");
for (let i = 0; i < vetorS.length; i++) {
    console.log(vetorS[i] + "");
}













