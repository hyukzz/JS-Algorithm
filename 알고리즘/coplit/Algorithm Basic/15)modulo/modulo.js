// 1번 풀이
function modulo(num1, num2) {
    let first = num1;
    let second = num2;
    if (num2 === 0) return 'Error: cannot divide by zero';
    for (let i = second; i <= first; i += second){
        num1 = num1 - num2;
    }
    return num1;
}

// 2번 풀이
function modulo(num1, num2) {
    if (num2 === 0) {
        return 'Error: cannot divide by zero';
    }

    while (num1 >= num2) {
        num1 = num1 - num2;
    }

    return num1;
}