/*
A partir de uma string fornecida, escreva á de trás para frente
e informe se é uma palavra palíndromo ou não.
*/
const input = require("readline-sync");

let palavra = input.question("Palavra: ").toUpperCase();
let palavraInvertida = "";
let ehPalindromo = "";

for (let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida += palavra[i];
}
ehPalindromo = (palavra === palavraInvertida) ? "SIM" : "NÃO";

console.log("Palavra invertida: " + palavraInvertida);
console.log("É palíndromo: " + ehPalindromo);