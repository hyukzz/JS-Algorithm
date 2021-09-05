function convertDoubleSpaceToSingle(str) {
    // 문자열을 입력 받음
    // 해당 문자열의 두 칸 공백을 한 칸으로 바꿈
    // 바꾼 문자열을 리턴
    let result = '';
    let x = '';
    for (let i = 0; i < str.length; i++) {
      if (x !== ' ' || str[i] !== ' ') {
        result = result + str[i];
      }
      x = str[i];
    }
    return result;
  }
  