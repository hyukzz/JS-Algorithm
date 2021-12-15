// 문제
// 수를 입력받아 0부터 해당 수까지의 합을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.

function sumTo(num) {
    let result = 0;
    for (let n = 0; n <= num; n++){  
      result = result + n;
  }
    //n=0부터 시작하고, n은 num 이하이고, n은 1씩 증가한다.
    //num=4, result = result+0 = result
    //result = result+1(n)
    //result = result+2(n)
    //result = result+3(n)
    //result = result+4(n)
    //0+1+2+3+4 = 10
    return result;
  }
  
  //sumTo(num)
  //= 0 + 1 + 2 + 3 + ... + num
  
  