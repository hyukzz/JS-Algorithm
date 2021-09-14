function solution(num) {
    // var answer = '';
    // for (let i = 0; i < num.length; i++) {
    //     if(i < num.length - 4) {
    //         answer = answer + '*'
    //     }else {
    //      answer = answer + num[i]        
    //     }
    // }
    // return answer;
    var answer = '';
    const len = num.length - 4;
    return '*'.repeat(len) + num.slice(len)
}