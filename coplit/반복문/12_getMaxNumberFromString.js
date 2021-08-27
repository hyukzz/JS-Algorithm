// 문제
// 숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중 가장 큰 수를 나타내는 숫자를 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 숫자 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// str.split 사용은 금지됩니다.
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.

function getMaxNumberFromString(str) {
    let maxNum = 0;
  
    for(let i=0; i<str.length; i++){
      if(parseInt(str[i])>maxNum){
        maxNum = parseInt(str[i])
      }
    }
        return String(maxNum);
  }