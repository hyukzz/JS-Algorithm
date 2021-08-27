// 문제
// 세 개의 단어를 입력받아 그 중 가장 짧은 단어의 길이를 리턴해야 합니다.

// 입력
// 인자 1 : word1
// string 타입의 문자열
// word1.length는 20 이하
// 인자 2 : word2
// string 타입의 문자열
// word2.length는 20 이하
// 인자 3 : word3
// string 타입의 문자열
// word3.length는 20 이하
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 단어들의 길이가 모두 같은 경우, 그 길이를 리턴해야 합니다.

function findMinLengthOfThreeWords(word1, word2, word3) {
    let shortest = word1.length;
  
    // 첫 번 째 글자가 2번째 글자보다 길 때
    if (word1.length > word2.length) {
      shortest = word2.length;
      // word 2 랑 word 3을 비교
      if (word2.length > word3.length) {
        shortest = word3.length;
      }
    } else {
      // word1 과 word3 을 비교
      if (word1.length > word3.length) {
        shortest = word3.length;
      }
    }
    return shortest;
  }
  