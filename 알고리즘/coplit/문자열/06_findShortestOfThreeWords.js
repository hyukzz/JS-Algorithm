// 문제
// 차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : word1
// string 타입의 문자열
// word1.length는 10 이하
// 인자 2 : word2
// string 타입의 문자열
// word2.length는 10 이하
// 인자 3 : word3
// string 타입의 문자열
// word3.length는 10 이하
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 동일한 길이의 문자열 중에서는 처음 입력받은 문자열을 리턴해야 합니다.

function findShortestOfThreeWords(word1, word2, word3) {
    //word1의 길이가 word2, word3보다 작으면 word1 리턴한다.
    if ((word1.length < word2.length)&&(word1.length < word3.length)){
      return word1;
    }
    //word2의 길이가 word1, word3보다 작으면 word2 리턴한다.
    if ((word2.length < word1.length)&&(word2.length < word3.length)){
      return word2;
    }
    if ((word3.length < word1.length)&&(word3.length < word2.length)){
      return word3;
    }
    if ((word1.length===word2.length)||(word1.length===word2.length)){
      return word1;
    }
    if ((word2.length===word3.length)){
      return word2;
    }
    //word3의 길이가 word1, word2보다 작으면 word3 리턴한다.
  }