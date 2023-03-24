/**
 * Pesquisa no MDN: três formas de usar
 * o método .exec() de RegExp.
 */
// var myRe1 = /d(b+)d/g;
// var myArray1 = myRe1.exec('cdbbdbsbz');

/* 
    var myArray2 = /d(b+)d/g.exec('cdbbdbsbz');
    var myRe3 = new RegExp('d(b+)d', 'g');
    var myArray3 = myRe3.exec('cdbbdbsbz');
    
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
// var re = /(\w+)\s(\w+)/;
// var str = 'Marcelino Costa';
// var novaStr = str.replace(re, '$2, $1');
// console.log(novaStr);

// var re4 = /\w+\s/g;
// var re4 = new RegExp('\\w+\\s', 'g');
// var str4 = 'fee fi fo fum';
// var myArray4 = str4.match(re4);
// console.log(myArray4);

//Alterando o pedido em uma string de entrada:
var nomes = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ';

var output = ['---------- String original\n', nomes + '\n'];

let pattern = /\s*;\s*/;

var nomeLista = nomes.split(pattern);

pattern = /(\w+)\s+(\w+)/;

var bySurnameList = []; //porLista de Sobrenomes

output.push('---------- Após Separar pela Expressão Regular');

let i, len;
for (i = 0, len = nomeLista.length; i < len; i++) {
  output.push(nomeLista[i]);
  bySurnameList[i] = nomeLista[i].replace(pattern, '$2, $1');
}

//Exibe a nova matriz.
output.push('---------- Nomes Invertidos');
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

// Classifica pelo sobrenome e exibe a matriz classificada.
bySurnameList.sort();
output.push('---------- Ordenado');
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

output.push('---------- Fim');
console.log(output.join('\n'));
