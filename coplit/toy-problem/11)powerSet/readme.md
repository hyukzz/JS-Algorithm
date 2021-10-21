## 문제 정의

1. 하나의 집합을 의미하는 문자열을 입력받는다.
2. 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴한다.

## 입력

인자 1 : str
1. string 타입의 공백이 없는 알파벳 소문자 문자열

## 출력

1. 배열(arr)을 리턴한다.
2. arr[i]는 각 부분집합의 원소로 구성된 문자열이다.

## 주의사항

1. arr[i]는 각 부분집합을 구성하는 원소를 연결한 문자열이다.
2. arr[i]는 알파벳 순서로 정렬한다.
3. 집합은 중복된 원소를 허용하지 않는다.
4. 부분집합은 빈 문자열을 포함한다.
5. arr은 사전식 순서(lexical order)로 정렬한다.

## 입출력 예시

```
let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
```

## 문제 풀이

1. 문자열을 분리해서 배열로 만들어주고 정렬한다.
2. 결과가 담길 배열을 result라는 변수에 할당한다.
3. result에서 target을 추가한 인자들을 result에 추가해주는 함수를 만든다.
4. 그 안에서 반복문을 통해 인덱스 값들을 result 안에 넣어준다.
5. 다시 arr의 값들을 전부 넣어서 aux함수를 반복문으로 실행한다.
6. 중복값이 아닌 경우에만 실시하게 만든다.
7. result값을 정렬해서 리턴한다.

## 소스코드

```
const powerSet = function (str) {
  let arr = str.split('').sort(); 
  let result = [''] 
  
  let aux = (target, result) => { 
    let copy = result.slice();
    for(let i = 0; i < copy.length; i++){
      copy[i] += target;
      result.push(copy[i])
    }
    return result
  }

  for(let i = 0; i < arr.length; i++){ 
    if(!result.includes(arr[i])){ 
      aux(arr[i], result)
    }
  }
  return result.sort(); 
};
```

## 후기

간단히 생각해보자면 문자열 자체를 요소하나 하나로 나누어 이로부터 조합할 수 있는 모든 것들을 배열로 만들어 주는 것이다.
하지만 이를 코드로 만드는 것에 어려움이 있었는데, 일단 중복이 없어야 할 뿐더러 이를 리턴하는데 있어서 문제에 맞는 정렬을 해야 했기 때문이다.