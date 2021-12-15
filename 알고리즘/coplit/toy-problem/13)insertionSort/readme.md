## 문제 정의

1. 정수를 요소로 갖는 배열을 입력받는다.
2. 오름차순으로 정렬하여 리턴한다.

## 입력

인자 1 : arr
1. number 타입을 요소로 갖는 배열
2. arr[i]는 정수
3. arr.length는 1,000 이하

## 출력

1. number 타입을 요소로 갖는 배열을 리턴한다.
2. 배열의 요소는 오름차순으로 정렬한다.
3. arr[i] <= arr[j] (i < j)

## 주의사항

1. 삽입 정렬을 구현한다.
2. arr.sort 사용은 금지된다.
3. 입력으로 주어진 배열은 중첩되지 않은 1차원 배열이다.

## 입출력 예시

```
let output = insertionSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
```

## 소스코드

```
const insertionSort = function (arr, callback = (num) => num) {
  for(let i = 1; i < arr.length; i++){ // 반복문으로 arr를 돌려준다.
    let num = arr[i]; // arr의 인덱스 값을 num이라는 변수에 할당한다.
    let index = i - 1; // i -1 값을 index라는 변수에 할당한다.
    while(index >= 0 && callback(arr[index]) > callback(num)){ 
    // index값이 0보다 크거나 같고 callback 함수의 arr의 인덱스 값이 callback 함수의 arr[index]값이 작을 동안 작동한다
      arr[index+1] = arr[index]; 
      index--; // index값을 1씩 차감시킨다.
    }
    arr[index + 1] = num;
  }
  return arr;
};
```