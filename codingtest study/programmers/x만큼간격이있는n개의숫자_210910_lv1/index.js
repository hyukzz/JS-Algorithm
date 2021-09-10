function solution(x, n) {
    let answer = [];
    let value = x;

    for (let i = 0; i < n; i++) {
        answer[i] = value;
        value = value + x
    }
    return answer;
}