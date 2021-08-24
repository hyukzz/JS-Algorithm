// 함수의 호출(invoke; call)
// 변수에 함수가 담겨있다면, 다른 변수와는 다르게 () 괄호를 붙여서 함수를 호출할 수 있습니다. 
// 또한 입력값을 설정할 수도 있는데요, 이를 전달인자(argument), 줄여서 인자라고 부릅니다.

// 문자열을 인자로 받아서 느낌표를 붙여서 리턴 해주는 함수 returnWordWithJoy가 있습니다.
// 함수 returnWordWithJoy의 첫 번째 인자로 문자열 "I love coding"을 넣어서 호출하고, 그 결과값을 변수 word에 할당하세요.
let word = returnWordWithJoy('I love coding');

function returnWordWithJoy(word) {
  if (typeof word === 'string') {
    return word + '!';
  } else {
    return 'wrong type';
  }
}
