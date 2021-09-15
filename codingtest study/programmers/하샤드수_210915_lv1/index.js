function solution(x) {
    var answer = true;
    let arr = String(x).split('');
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + Number(arr[i])
    }
    answer = x % Number(sum) === 0 ? true : false
    return answer;
}