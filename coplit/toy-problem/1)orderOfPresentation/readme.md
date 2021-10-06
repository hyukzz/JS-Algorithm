## 문제 정의

1. 총 조의 수 N과 발표 순서 k가 주어질 때, 발표 순서가 몇 번째 경우의 수인지 구하는 함수를 만든다. (인덱스가 아님)
2. 모든 경우의 수가 담긴 배열은 번호가 작을수록 앞에 위치한다고 가정한다.

## 문제 풀이

1. factorial 값을 구하는 함수를 재귀나 반복문을 이용하여 만든다.
2. order 변수를 선언하고 0으로 초기화한다. order변수를 최종적으로 출력할 것이다.
3. N개의 조 중에, 어떠한 조가 이미 포함되었는지 확인하기 위해 isUsed 배열을 생성하고 모든 값을 False로 초기화한다.
4. K의 개수만큼 배열을 반복시킨다.
    1.num 변수를 선언하고 K의 i번째 인덱스의 값으로 준다.
    2.isUsed의 num번째 인덱스의 값을 true로 바꾼다.
    3.isUsed 배열을 1번째 인덱스부터 num번째 인덱스 전까지 복사한 다음, 배열의 길이를 구한다.
    4.그리고 4-3값에 (N-i-1)!을 곱한다.
    5.4-3구한 값과 order에서 구한 값을 더한다.
5. order 값을 리턴한다.

## 소스코드

```
function orderOfPresentation (N, K) {
    const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };
  let order = 0;
  const isUsed = Array(N + 1).fill(false);
  for (let i = 0; i < K.length; i++) {
    const num = K[i];
    isUsed[num] = true;
    const candidates = isUsed.slice(1, num);
    const validCnt = candidates.filter((el) => el === false).length;
    const formerCnt = validCnt * factorial(N - i - 1);
    order = order + formerCnt;
  }
  return order;
}

```

## 후기

아직 이 문제의 난이도에 대해 적응이 안되긴하지만 현재 배우고 있는 재귀나 기존에 사용하던 반복문등을 통해 로직을 짜서 만들 수 있도록 코드를 하나하나 다시 뜯어서 확인해봐야 할 것 같다.