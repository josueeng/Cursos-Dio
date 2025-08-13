
// const fs = require('fs');
// const path = require('path');

// const filePath = path.resolve(__dirname, 'arquivo.csv');

// const promessadeLeitura = fs.promises.readFile(filePath);

// promessadeLeitura
//     .then((data) => data.toString('utf-8'))
//     .then((texto) => texto.split('\n').slice(1))
//     .then((linhas) => linhas.map(linha => {
//         const [nome, feito] = linha.split(';');
//         return {
//             nome,
//             feito: feito === 'true'
//         };
//     }))
//     .then((listadetarefas) => console.log(listadetarefas))
//     .catch((error) => console.log("deu ruim", error));

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'arquivo.csv');

async function leituraDoArquivo() {
    try {
        const data = await fs.promises.readFile(filePath);
        const texto = data.toString('utf-8');
        console.log(texto);
    }
    catch (error) {
        console.log("deu ruim", error);
    }}
    leituraDoArquivo();
