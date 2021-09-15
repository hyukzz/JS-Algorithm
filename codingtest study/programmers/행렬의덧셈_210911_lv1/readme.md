## 문제 정의 

1. 행렬 arr1과 arr2 두 개를 입력받는다.
2. 안에 있는 배열의 값끼리 더해서 리턴한다.

## 문제 풀이

1. 반복문을 통해 첫 번째 행렬의 길이만큼 돌려주고 변수 answer의 인덱스 값을 빈배열로 할당한다.
2. 이중 반복문을 통해 빈배열로 만든 arr[i]의 길이 만큼 돌려준 뒤, 이중 반복문 배열 안에 arr1과 arr2를 더한 값을 넣어준다.
3. 이중 반복문을 돌린 값을 반복문 밖에서 리턴해준다.

## 소스코드

```
// 1번 풀이
function solution(arr1, arr2) {
    var answer = [[]];
    
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = [];
        for (let j = 0; j < arr1[i].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return answer;
}

// 2번 풀이
function solution(arr1, arr2) {
    return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}
```

## 후기

이중 반복문을 통해 값을 넣어주고 리턴하는 방식을 통해 배열문제를 해결했다.
하지만 다른 풀이 방식을 연구해보니 map 메서드를 사용해서 문제 해결을 할 수 있다는 사실을 알게 돼었다.
배열 관련 문제를 풀 때 map 메서드를 사용하면 반복문보다 좀 더 코드를 간결하게 해결할 수 있을 것이다.