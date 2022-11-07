/*
시험성적

문제
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

출력
시험 성적을 출력한다.

예제 입력 1 
100
예제 출력 1 
A
*/

var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split(' ')
var a = parseInt(input[0])

if (a == 100 || a >= 90) {
	console.log('A')
} else if (a <= 89 && a >= 80) {
	console.log('B')
} else if (a <= 79 && a >= 70) {
	console.log('C')
} else if (a <= 69 && a >= 60) {
	console.log('D')
} else {
	console.log('F')
}
