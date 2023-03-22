/**
 * Pesquisa no MDN: três formas de usar
 * o método .exec() de RegExp.
 */
const myRe1 = /d(b+)d/g;
const myArray1 = myRe1.exec('cdbbdbsbz');

/* 
const myArray2 = /d(b+)d/g.exec('cdbbdbsbz');
const myRe3 = new RegExp('d(b+)d', 'g');
const myArray3 = myRe3.exec('cdbbdbsbz');

console.log(myArray1);
console.log(myArray2);
console.log(myArray3); 
*/

console.log('O último índice é ' + myRe1.lastIndex);
//Resp: O último índice é 5

let myArray = /d(b+)d/g.exec('cdbbdbsbz');
console.log('O último índice é ' + /d(b+)d/g.lastIndex);
//Resp: O último índice é 0
