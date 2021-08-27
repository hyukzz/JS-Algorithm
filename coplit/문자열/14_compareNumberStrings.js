// 문제
// 두 개의 숫자 문자열을 입력받아 더 큰 수를 나타내는 문자열을 구하고, 해당 문자열이 나타내는 수에 5를 더한 수를 나타내는 숫자 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : numStr1
// string 타입의 숫자(정수) 문자열
// 인자 2 : numStr2
// string 타입의 숫자(정수) 문자열
// 출력
// string 타입을 리턴해야 합니다.

function compareNumberStrings(numStr1, numStr2) {
    let num1=parseInt(numStr1);
    let num2=parseInt(numStr2);
    
    if(num1>num2){
      return String(num1+5)
    }
      return String(num2+5);
    }
  