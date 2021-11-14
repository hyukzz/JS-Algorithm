## 문제 정의

1. 배열 안에 있는 값들을 더해 더한 값의 평균을 구한다.

## 문제 풀이

1. reduce 메서드를 통해 배열의 값을 더한 뒤 배열의 length를 나눠준다.
2. 결과 값이 리턴된다.

## 소스코드

```
function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}
```

## 후기

반복문을 사용하지 않고 reduce 메서드를 적극 이용하며 코드를 간결하고 빠르게 해결할 수 있었다.