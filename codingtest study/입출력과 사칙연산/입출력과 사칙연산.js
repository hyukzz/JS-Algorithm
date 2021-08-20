// 1번 문제

console.log('Hello World!');

// 2번 문제

console.log('강한친구 대한육군')
console.log('강한친구 대한육군');

// 3번 문제

console.log(`\\    /\\`);
console.log(` )  ( ')` );
console.log(`(  /  )`);
console.log(` \\(__)|`);

// 4번 문제

console.log('|\\_/|');
console.log('|q p|   /}');
console.log('( 0 )"""\\')
console.log('|"^"`    |');
console.log('||_/=\\\\__|');

// 5번 문제

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);