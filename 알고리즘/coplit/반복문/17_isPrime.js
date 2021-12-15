// 문제
// 1 이상의 자연수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 수
// 출력
// boolean 타입을 리턴해야 합니다.
// 입출력 예시
// let output = isPrime(2);
// console.log(output); // --> true

// output = isPrime(6);
// console.log(output); // --> false

// output = isPrime(17);
// console.log(output); // --> true

function isPrime(num) {
    let sqrt = parseInt(Math.sqrt(num));
  
    if (num === 1) {
      return false;
    }
  
    if (num === 2) {
      return true;
    }
  
    if (num % 2 === 0) {
      return false;
    }
  
    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }