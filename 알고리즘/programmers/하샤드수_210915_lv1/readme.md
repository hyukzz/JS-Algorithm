## 문제 정의 

1. 양의 정수 x가 하샤드 수이면, x의 자릿수의 합으로 x가 나누어져야 한다.
2. 양의 정수 x가 하샤드 수이면 true를 리턴하고, 아니면 false를 리턴한다.

## 문제 풀이

1. 먼저 x의 값을 split 메서드를 통해 나눈다.
2. sum이라는 변수에 0을 할당한다.
3. 반복문을 통해 split으로 나눈 값의 길이만큼 돌린다.
4. sum이라는 변수에 반복문을 돌릴 때마다 arr[i]를 넘버 값으로 바꾼 값을 더해준다.
5. answer 값에 x값에 sum값을 나눴을 때 나눠지면 하샤드 값이기 때문에 true를 아닐 땐 false를 리턴한다.

## 소스코드

```
function solution(x) {
    var answer = true;
    let arr = String(x).split('');
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + Number(arr[i])
    }
    answer = x % Number(sum) === 0 ? true : false
    return answer;
}
```

## 후기

넘버 값을 스트링 값으로 변환시킨 뒤 분리해서 반복문을 통해 값을 구하고 그 값을 다시 나눈 뒤 결과 값을 구했다.
문자의 타입을 변환해서 내가 원하는 방향으로 값을 도출하는 법을 배웠고, 삼항연사자를 사용하면서 코드를 간결하게 쓰려고 했다.