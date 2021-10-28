## 문제 정의

1. 부분적으로 오름차순 정렬된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴한다.
2. 부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬된다.

## 입력

인자 1 : rotated
1. number 타입을 요소로 갖는 배열
2. rotated[i]는 정수
인자 2 : target
1. number 타입의 정수

## 출력

1. number 타입을 리턴한다.

## 주의사항

1. rotated에 중복된 요소는 없다.
2. target이 없는 경우, -1을 리턴한다.

## 입출력 예시

```
let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1
```

## 소스코드

```
const rotatedArraySearch = function (rotated, target) {
  let left = 0
  let right = rotated.length - 1;

  while (left <= right) {
    let middle = parseInt((right + left) / 2);

    if (rotated[middle] === target) {
      return middle;
    }
    if (rotated[left] < rotated[middle]) {
      if (target < rotated[middle] && rotated[left] <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target <= rotated[right] && rotated[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};
```