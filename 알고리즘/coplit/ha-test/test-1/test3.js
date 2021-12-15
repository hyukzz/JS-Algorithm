//3번 문제
// 수를 입력받아 각 자리의 수를 곱한 결과물들이 한자리 수가 될 때까지 반복적으로 곱한 후, 최후의 한 자릿수를 리턴한다.
// num의 범위 (0 <= num && num <= Number.MAX_SAFE_INTEGER)

function multy(num) {
  
    let arr = num.toString().split('')
   
    while(arr.length > 1){
    
    // 나온 결과값을 계속 arr에 담아준다.
      arr = arr.reduce(function(acc, curr){
           return acc * curr;          
      });
      
      // 나온 값을 split해서 배열의 요소로 만든다.
      arr = arr.toString().split('');  
    }
    
    return Number(arr)
  }

  function test3(num) {
    /*
    1. 변수에 인자 값을 문자열로 나눈 값을 할당
    2. 변수의 길이가 1일 경우 숫자가 하나이기 때문에 그 값을 정수의 값으로 리턴
    3. reduce 메서드를 통해 result변수의 값끼리 곱한 것을 multiply변수에 할당
    4. 함수문 test3의 multiply 값을 리턴
    */
    
      let result = num.toString().split('');
    
      if(result.length === 1) {
        return parseInt(result)
      }
    
      let multiply = result.reduce((a, b) => parseInt(a) * parseInt(b))
      return test3(multiply);
    }
    