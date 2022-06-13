const path = require('path');
const arquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
    {nome: "Anna"},
    {nome: "Clara"},
    {nome: "Julia"},
    {nome: "Eduardo"},
    {nome: "Thiago"},
    {nome: "Patrick"},
    {nome: "Douglas"},
    {nome: "Ster"},
    {nome: "Catarine"},
];

const json = JSON.stringify(pessoas, '', 2);
escreve(arquivo, json);

async function lerArquivo(caminho){
    const dados = await ler(caminho);
    renderizarDados(dados);
}

function renderizarDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}

lerArquivo(arquivo).then(r => {});