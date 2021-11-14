## 문제 정의

1. 정수 num이 짝수인 경우 'Even'을 반환한다.
2. 정수 num이 홀수인 경우 'Odd'를 반환한다.

## 문제 풀이

1. 조건문을 통해 짝수인 경우와 홀수인 경우를 나눈다.
2. 각각의 경우의 리턴 값을 다르게 한다.

## 소스코드

```
// 1번 풀이
function solution(num) {
    if(num % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

// 2번 풀이
function solution(num) {
    return num % 2 ? 'Odd' : 'Even'
}
```

## 후기 

일반 if문과 삼항연산자 두 가지 방법을 통해 풀어 보았다.
기초적인 문제인 만큼 쉽게 풀었지만 이를 응용하는 문제도 풀어보며 조건문에 대해 깊게 공부를 하려고 한다.