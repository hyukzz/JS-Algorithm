function solution(num) {
    for (let i = 0; i < 500; i++) {
        if(num !== 1) {
            num = num % 2 === 0 ? num = num/2 : num = num*3+1
        } else {
            return i
        }
    }
    return -1;
}