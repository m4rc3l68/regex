/**
 * Pesquisa no MDN: três formas de usar
 * o método .exec() de RegExp.
 */
const myRe1 = /d(b+)d/g;
const myRe3 = new RegExp('d(b+)d', 'g');

const myArray1 = myRe1.exec('cdbbdbsbz');
const myArray2 = /d(b+)/g.exec('cdbbdbsbz');
const myArray3 = myRe3.exec('cdbbdbsbz');

console.log(myArray1);
console.log(myArray2);
console.log(myArray3);
