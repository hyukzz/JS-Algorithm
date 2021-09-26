## 문제

문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.

## 입력

인자 1 : str
string 타입의 공백이 없는 알파벳 문자열

## 출력

boolean 타입을 리턴해야 합니다.
주의 사항
빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
대소문자는 구별하지 않습니다.

## 입출력 예시

```
let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false
```

## 소스코드

```
// 1번 풀이
function isIsogram(str) {
  let lowerStr = str.toLowerCase();
    for(let i = 0; i < lowerStr.length; i++) {
      for(let j = i+1; j < lowerStr.length; j++) {
        if(lowerStr[i] === lowerStr[j]) return false
      }
    }
    return true;
}

// 2번 풀이
function isIsogram(str) {
   return !str.match(/([a-z]).*\1/i);
}
```

## 풀이

1. 변수에 str을 소문자로 변환한 값을 할당한다.
2. 반복문을 통해 소문자로 변환한 값의 길이 만큼 반복한다.
3. 이중반복문을 통해 소문자로 변환한 값들을 조건문을 통해 비교한다.
4. i와j의 값이 같은 경우 중복이 있다는 것의 방증임으로 false 값을 리턴한다.
5. 그 이외의 경우엔 중복이 없다는 것이기 때문에 true 값을 리턴한다.

