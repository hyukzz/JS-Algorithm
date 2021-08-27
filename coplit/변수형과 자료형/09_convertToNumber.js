// 우리가 웹 브라우저에 적혀있는 정보를 가져오면 보통 string의 형태로 받아오게 됩니다. 
// 즉, 숫자로 세고 싶은 정보도 string으로 인식하기 때문에, 
// 정상적인 숫자를 위한 연산을 수행할 수 없습니다.
// 이를 해결하기 위해서 number로 변경하기 위해서는 Number() 함수를 사용해서 변경할 수 있습니다.

function convertToNumber(anything) {
    return Number(anything)   
  }
  
  
