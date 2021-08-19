//1번 문제
//문자열을 입력받아 문자열에 존재하는 각 단어의 개수 정보를 담은 객체를 리턴한다.
// 공백은 제외한 객체를 리턴한다.
// 빈 문자열이면 빈 객체를 리턴한다.
// 대소문자 구분이 없다.
// str.trim은 사용 금지된다.

function test1(str) {
    // 문자열을 입력받는다. 
    // 각 단어의 개수 정보를 모은다.
    // 테스트코드에서 입력받은 문자는 모두 소문자로 toLowerCase() 
    // 개수정보를 담은 객체를 리턴한다.
    let obj = {};
    // 배열로 만든다.
    let word = str.toLowerCase().split(' ');
    // 반복문을 통해 배열을 돌려준다.
    for(let i=0; i<word.length; i++){
      // 배열을 돌면서 할당된 변수의 값이 다르면 다음 문자열을 체크한다.
      if(word[i] !== ''){
        obj[word[i]] === undefined ? obj[word[i]] = 1 : obj[word[i]]++
      }
    }
    return obj;
  }