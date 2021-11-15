//2번 문제
// 수를 입력받아 각 자릿수를 모두 더한 값을 리턴한다.
// 음수를 입력받은 경우, 첫 번째 수는 음수로 계산한다.

  function test2(num) {
    //수를 입력받는다 
    // 각 자릿수를 모두 더한다
    // 더한 값을 리턴한다
    let strNumber = num.toString().split('')
    let result = 0;
    // 반복문으로 배열을 순서대로 더하게 만든다.
      if(strNumber[0] === '-'){
      // 0번 째 인덱스가 '-'일 때는 값을 다 더해준 뒤 -부분만 따로 계산한다. 
      for(let i=2; i<strNumber.length; i++){
      // 0, 1번 째 인덱스는 '-'와 나중에 빼야되는 값이기 때문에 지금은 덧셈부분만 따로 하기위해 i를 2부터 진행해야된다.
      result += Number(strNumber[i])
    }
    result = result - Number(strNumber[1])
    // 0번 째 인덱스는 '-'이기 때문에 -의 값은 1번 째 인덱스로 계산한다.
    }
    // -부분이 없으면 그대로 계산한다.
    if(strNumber[0] !== '-'){
      for(let i =0; i<strNumber.length; i++){
        result += Number(strNumber[i])
      }
    }
    return result;
  }
  // index 첫 번째 값이 '-'일 때 빼기를 적용해야되는데... 따로따로 분해해서 해서 성공

  function test2(num) {
    /*
    1. 변수에 각 문자열로 나눈 값을 할당
    2. 결과 값을 0부터 시작
    3. 문자열로 나눈 변수의 인덱스가 '-'일 때 값을 다 더해준 뒤 -부분만 따로 계산
    4. 0, 1번 째 인덱스는 '-'와 나중에 빼야되는 값이기 때문에 지금은 덧셈부분만 따로 하기위해 i를 2부터 진행
    5. 반복문을 통해 0, 1번 째 이후인 2번 째 인덱스부터 값을 반복시킴
    6. 0번 째 인덱스는 '-'이기 때문에 -의 값은 1번 째 인덱스의 값으로 추가
    7. -부분이 없는 값은 원래대로 계산
    8. 결과 값을 리턴
    */
      let result = 0;
      let strNum = num.toString().split('');
    
      if(strNum[0] === '-') {
        for(let i = 2; i < strNum.length; i++) {
          result = result + parseInt(strNum[i])
        }
        result = result - parseInt(strNum[1])
      }
    
      if(strNum[0] !== '-') {
        for(let i = 0; i < strNum.length; i++) {
          result = result + parseInt(strNum[i])
        }
      }
      return result;
    }