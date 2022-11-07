var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split(' ')

let sum = 0

for (let i = 0; i < 5; i++) {
	sum = sum + input[i] * input[i]
}
let result = sum % 10

console.log(result)
