// 함수의 선언
// 자바스크립트에서 함수는 두가지 방식으로 선언될 수 있습니다. 
// 첫 번째 함수 multiplyBy2는 함수 선언식입니다.
//  두 번째 함수 divideBy2은 함수 표현식을 변수 divideBy2에 할당했습니다. 
//  미묘한 차이는 있지만 변수를 선언하고, 함수를 할당했다 라는 결론은 분명합니다.

function multiplyBy2(input) {
    input = input * 2;
    return input;
  }
  
  let divideBy2 = function (input) {
    input = input / 2;
    return input;
  };
