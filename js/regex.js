/**
 * Pesquisa no MDN: três formas de usar
 * o método .exec() de RegExp.
 */
// const myRe1 = /d(b+)d/g;
// const myArray1 = myRe1.exec('cdbbdbsbz');

/* 
    const myArray2 = /d(b+)d/g.exec('cdbbdbsbz');
    const myRe3 = new RegExp('d(b+)d', 'g');
    const myArray3 = myRe3.exec('cdbbdbsbz');
    
    console.log(myArray1);
    console.log(myArray2);
    console.log(myArray3); 
    */

// console.log('O último índice é ' + myRe1.lastIndex);
//Resp: O último índice é 5

// let myArray = /d(b+)d/g.exec('cdbbdbsbz');
// console.log('O último índice é ' + /d(b+)d/g.lastIndex);
//Resp: O último índice é 0

//Usando as Substrings entre Parênteses na ER:
// const re = /(\w+)\s(\w+)/;
// const str = 'Marcelino Costa';
// const novaStr = str.replace(re, '$2, $1');
// console.log(novaStr);

// const re4 = /\w+\s/g;
// const re4 = new RegExp('\\w+\\s', 'g');
// const str4 = 'fee fi fo fum';
// const myArray4 = str4.match(re4);
// console.log(myArray4);

//Alterando o pedido em uma string de entrada:
const nomes =
  'Zoe Silva; Paula Costa; Maria Leticia; Angelica Rocha; Bruna Alba';

const saida = ['---------- String original\n', nomes + '\n'];

let padrao = /\s*;\s*/;

const listaNomes = nomes.split(padrao);

padrao = /(\w+)\s+(\w+)/;

const bySurnameList = []; //porLista de Sobrenomes

saida.push('---------- Após Separar pela Expressão Regular');

let i, len;
for (i = 0, len = listaNomes.length; i < len; i++) {
  saida.push(listaNomes[i]);
  bySurnameList[i] = listaNomes[i].replace(padrao, '$2, $1');
}

//Exibe a nova matriz.
saida.push('---------- Nomes Invertidos');
for (i = 0, len = bySurnameList.length; i < len; i++) {
  saida.push(bySurnameList[i]);
}

// Classifica pelo sobrenome e exibe a matriz classificada.
bySurnameList.sort();
saida.push('---------- Ordenado');
for (i = 0, len = bySurnameList.length; i < len; i++) {
  saida.push(bySurnameList[i]);
}

saida.push('---------- Fim');

console.log(saida.join('\n'));
