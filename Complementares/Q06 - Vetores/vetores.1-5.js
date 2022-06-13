console.log('________QUESTÃO 01________')
/*
Exercício 01 - Considerando o array, crie um loop que percorra cada item do vetor de frutas.
* */
const fruits = ["Maça", "Banana", "Laranja", "Caju", "Pera"];
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
console.log('')
console.log('________QUESTÃO 02________')
/* Exercício 02 - Localizar e mostrar no console o maior valor, junto a sua posição.
* */
let posicao = 0

const num = [100, 130, 90, 40, 112, 43, 300, 321, 500, 844, 2, 32, 74, 233, 455];
let maior = num[0]
for(let i = 1; i < num.length; i++) {
    if (maior < num[i]) {
        maior = num[i];
        posicao = i;
    }
}
console.log(`O maior número é o ${maior}, na posição ${posicao}`);
console.log('')
console.log('________QUESTÃO 03________')
/*Iniciando com este array de preços, altere o preço da posição 1, 3, 7.
* */
const prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.00]

console.log(`Elemento original da posição 1: ${prices[1]}`);
prices[1] = 37.90
console.log(`Elemento modificado da posição 1: ${prices[1]}`);

console.log('')

console.log(`Elemento original da posição 3: ${prices[3]}`);
prices[3] = 74.30
console.log(`Elemento modificado da posição 3: ${prices[3]}`);

console.log('')

console.log(`Elemento original da posição 7: ${prices[7]}`);
prices[7] = 100.0
console.log(`Elemento modificado da posição 7: ${prices[7]}`);

console.log('')
console.log('________QUESTÃO 04________')
/*Crie um script que pergunte 3 números ao usuário, coloque em um array em sequência o exiba.
 */
let myArray = [];

const input = require("readline-sync");

let numUm = input.question("Digite o primeiro numero; ").toUpperCase();
let numDois = input.question("Digite o segundo numero; ").toUpperCase();
let numTres = input.question("Digite o terceiro numero; ").toUpperCase();

myArray.push(numUm, numDois, numTres);
console.log(myArray);

console.log('')
console.log('________QUESTÃO 05________')
/* Refaça questão 4 e pergunte ao usuário quantos números ele deseja inserir.
 */
numInseridos = input.question("Quantos numeros deseja inserir? ");
let arrayTwo = [];
for (let i = 0; i < numInseridos; i++) {
    let numero = input.question("Digite o numero; ").toUpperCase();
        arrayTwo.push(numero);
}
console.log(arrayTwo);






