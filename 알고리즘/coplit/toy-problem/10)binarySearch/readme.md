## 문제 정의

1. 오름차순 정렬된 정수의 배열(arr)과 정수(target)를 입력받는다.
2. target의 인덱스를 리턴한다.

## 입력

인자 1 : arr
1. number 타입을 요소로 갖는 배열
2. arr[i]는 정수

인자 2 : target
1. number 타입의 정수

## 출력

1. number 타입을 리턴한다.

## 주의사항

1. 이진탐색 알고리즘(O(logN))을 사용한다.
2. 단순한 배열 순회(O(N))로는 통과할 수 없는 테스트 케이스가 존재한다
3. target이 없는 경우, -1을 리턴한다



## 입출력 예시

```
let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

output = binarySearch([4, 5, 6, 9], 100);
console.log(output); // --> -1
```

## 문제 풀이

1. target은 arr를 탐색하는 수이다.
2. 각각 left와 right라는 변수에 0번 째 마지막 인덱스로 초기화한다.
3. while 문을 사용해 left가 right보다 작거나 같을 동안 탐색한다.
4. 같을 경우: 탐색을 원하는 값을 반환하고 탐색을 종료한다.
5. middle 인덱스의 요소 > 탐색하는 값: right의 값을 미드보다 1작은 값으로 설정(right = mid - 1)한다.
6. mid 인덱스의 요소 < 탐색하는 값: left의 값을 미드보다 1 큰 값으로 설정(left = mid + 1)한다.
7. 모든 조건문이 영향이 없을 때 -1을 리턴한다.

## 소스코드

```
const binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};
```

## 후기

이진 탐색 알고리즘 사용하여 순차적으로 있는 수를 탐색해 내는 문제였다.
배열의 수를 계속해서 나누어 target과 비교해보며 탐색하는 식으로 로직을 구성했다.
