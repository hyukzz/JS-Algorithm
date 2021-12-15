## 문제 정의

1. 정수를 요소로 갖는 배열을 입력받는다.
2. 3개의 요소를 곱해 나올 수 있는 최대값을 리턴한다.

## 입력

인자 1 : arr
number 타입을 요소로 갖는 임의의 배열

## 출력

number 타입을 리턴한다.

## 주의사항

1. 입력으로 주어진 배열은 중첩되지 않은 1차원 배열이다.
2. 배열의 요소는 음수와 0을 포함하는 정수다.
3. 배열의 길이는 3 이상이다.

## 입출력 예시

```
let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
```

## 문제 풀이

1. 배열 안에서 가장 큰 양수 값을 만들라고 했으니 3개의 수를 곱해서 무조건 양수가 나오기만 하면 된다.
2. 음수가 1개, 3개일 경우는 곱해도 음수가 되기 때문에 생각해줄 필요가 없다.
3. Array.prototype.sort()를 사용하면 음수값이 가장 작은 게 배열의 맨 앞으로 온다.
4. 음수가 두개일 때 그 2개를 곱하고 배열의 맨 끝 요소(정렬했을 때 가장 큰 수)를 곱해주면 된다.
5. 혹시 모르니 맨 뒤에서 부터 3개 요소를 빼서 곱한 수와 Math.max()를 이용해서 비교해준다.
6. Math.max()에 인자를 넣으면 넣은 인자끼리 최대 크기를 비교해서 값을 도출한다.

## 소스코드

```
const largestProductOfThree = function (arr) {
 
  let arrSort = arr.slice().sort((a,b) => a - b)
  let len = arr.length
 
  // 모든 수가 양수일 때
  let el = arrSort[len - 1] * arrSort[len - 2] * arrSort[len - 3]
  // 앞의 두 요소가 음수일 때
  let ele = arrSort[0] * arrSort[1] * arrSort[len-1]
 
  return Math.max(el, ele)
};
```

## 후기

기존에 아는 방식의 메서드들을 사용해 푸는 문제였다.
하지만 경우의 수가 많아 이를 다 충족시키는 코드를 구성하는 것이 쉽지 않았다.
같은 메서드들을 사용하더라도 이를 조합하면 무궁무진한 방법의 경우를 만들 수 있다는 점을 다시 한 번 느꼈다.