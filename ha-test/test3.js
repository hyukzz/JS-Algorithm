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