function convertListToObject(arr) {
    // 배열을 요소로 갖는 배열을 입력
    // 각 배열을  이용함
    // 객체를 리턴
    let result = {};
  
    for (let i = 0; i < arr.length; i++) {
  
     if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
      result[arr[i][0]] = arr[i][1];
    }
    }
    return result;
  }
  