// 문제
// 수를 입력받아 약수(factor)의 합을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 수
// 출력
// number 타입을 리턴해야 합니다.
// 입출력 예시
// let output = getSumOfFactors(8);
// console.log(output); // --> 15 (1 + 2 + 4 + 8)

// output = getSumOfFactors(12);
// console.log(output); // --> 28 (1 + 2 + 3 + 4 + 6 + 12)

function getSumOfFactors(num) {
    let result = 0;
  
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        result = result + i;
      }
    }
  
    return result;
  }