/*
별 찍기 - 2

문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

예제 입력 1 
5
예제 출력 1 
    *
   **
  ***
 ****
*****
*/

// solution 1
const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './ex.txt'
let input = fs.readFileSync(file).toString().split(' ')
let a = parseInt(input[0])

let res = ''
for (let i = 0; i < a; i++) {
	for (let j = a - 1; j >= 0; j--) {
		if (i < j) {
			res += ' '
		} else {
			res += '*'
		}
	}
	res += '\n'
}
console.log(res)

// solution 2

const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './ex.txt'
let input = fs.readFileSync(file).toString().split(' ')
let a = parseInt(input[0])

let res = new Array(a).fill(' ')
// [ ' ', ' ', ' ', ' ', ' ' ]
// 배열 4번 째 idx부터 별 찍기
for (let i = a - 1; i >= 0; i--) {
	res[i] = '*'
	console.log(res.join(''))
}

// solution 3

const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './ex.txt'
let input = fs.readFileSync(file).toString().split(' ')
let a = parseInt(input[0])

for (let i = 1; i <= a; i++) {
	console.log(' '.repeat(a - i) + '*'.repeat(i))
}
