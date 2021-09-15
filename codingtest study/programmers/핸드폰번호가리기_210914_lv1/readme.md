## 문제 정의 

1. 전화번호 뒷자리 4개를 제외한 모든 수를 *표 처리해야한다.
2. 전화번호가 8자, 11자인 경우 두 가지가 있다.

## 문제 풀이

1. 반복문을 통해 전화번호 길이만큼 돌려준다.
2. 반복문 내에 전화번호 길이 중 뒤에 4자리가 i보다 작을 때 *표로 하나씩 추가되도록 한다.
3. 그 이외에 뒤 4자리 숫자는 num의 인덱스 값을 가져오도록 한다.
4. 추가된 결과를 리턴한다.

## 소스코드

```
// 1번 풀이
function solution(num) {
    var answer = '';
    for (let i = 0; i < num.length; i++) {
        if(i < num.length - 4) {
            answer = answer + '*'
        }else {
            answer = answer + num[i]        
        }
    }
    return answer;
}

// 2번 풀이
function solution(num) {
    var answer = '';
    const len = num.length - 4;
    return '*'.repeat(len) + num.slice(len)

}
```

## 후기

일반적인 반복문을 통해서 문제를 풀었는데 repeat라는 메서드를 통해 뒤 4자리 수를 제외한 나머지 값을 '*'처리하고, 
나머지 값을 slice 메서드를 통해 가져온 뒤, 이를 합치면 위에 사용했던 반복문과 동일하게 작동함을 알 수 있었다.