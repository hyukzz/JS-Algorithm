## 문제 정의

1. 두 개의 배열(base, sample)을 입력받는다.
2. sample이 base의 부분집합인지 여부를 리턴해야 한다.
3. base는 number 타입을 요소로 갖는 임의의 배열이고, base.length는 100 이하이다.
4. sample은 number 타입을 요소로 갖는 임의의 배열이고, sample.length는 100 이하이다.
5. boolean타입을 리턴한다.

## 주의 사항

1. base, sample 내에 중복되는 요소는 없다고 가정한다.

## 문제 풀이


## 소스코드

```
const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    return -1;
  };
  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    if (baseIdx === -1) return false;
  }
  return true;
};
```

## 후기
