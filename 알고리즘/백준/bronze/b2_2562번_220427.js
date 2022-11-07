const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./ex.txt";
let input = fs
	.readFileSync(file)
	.toString()
	.split("\n")
	.map(x => Number(x));

let max = input[0];
let maxIdx = 0;

for (let i = 0; i < 9; i++) {
	if (max < input[i]) {
		max = input[i];
		maxIdx = i;
	}
}

console.log(max);
console.log(maxIdx + 1);
