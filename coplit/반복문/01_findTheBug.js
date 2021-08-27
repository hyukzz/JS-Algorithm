// 문제
// 문자열을 입력받아 버그('#')의 인덱스를 리턴해야 합니다.

// 입력
// 인자 1 : word
// string 타입의 단어
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// '#' 기호가 없는 경우 undefined를 리턴해야 합니다.

function findTheBug(word) {
    for (let i = 0; i < word.length; i++) {
      // i는 0 부터 시작하고 i는 문자의 길이보다 작게 하여 ++ 1씩 증가하여 반복한다.
      if (word[i] === '#') {
        // i === #과 타입이 같으면, 그때 멈추고 i를 리턴해라. 
        return i;
      }
    }
  
    return undefined;
    //그렇지 않으면, undefined를 리턴해라.
  }