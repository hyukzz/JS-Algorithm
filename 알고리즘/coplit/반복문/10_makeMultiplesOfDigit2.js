// 문제
// 두 개의 수를 입력받아 두 수를 포함해 두 수 사이의 수 중 2의 배수의 개수를 리턴해야 합니다.

// 입력
// 인자 1 : num1
// number 타입의 정수 (num1 >= 0)
// 인자 2 : num2
// number 타입의 정수 (num2 >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// num1이 num2보다 작지 않을 수도 있습니다.
// 0은 2의 배수가 아니라고 가정합니다.

function makeMultiplesOfDigit2(num1, num2) {
    let count = 0;
    let start = num1;
    let end = num2;
  
    if (num1 > num2) {
      start = num2;
      end = num1;
    }
  
    if (start === 0) {
      start = 1;
    }
  
    for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
        count += 1;
      }
    }
  
    return count;
  }
  