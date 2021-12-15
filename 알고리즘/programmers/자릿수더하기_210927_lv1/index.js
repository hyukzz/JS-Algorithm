function solution(n) {
	let arr = n
		.toString()
		.split('')
		.map(x => parseInt(x))
	return arr.reduce((a, b) => a + b, 0)
}
