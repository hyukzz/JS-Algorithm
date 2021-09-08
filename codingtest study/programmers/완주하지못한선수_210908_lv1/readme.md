## 문제 정의

1. 한 명의 선수를 제회하고는 모든 선수가 마라톤을 완주했다.
2. 마라톤의 참여한 선수들의 이름이 담긴 배열은 `participant`이다.
3. 완주한 선수의 이름이 담긴 배열은 `completion`이다.
4. 두 배열을 비교해 완주하지 못한 선수의 이름을 return해야한다.

## 문제 풀이

1. 일단 두 배열을 정렬시켜서 나머지 return 값이 따로 나오게 한다.
2. 반복문을 통해 `participant`의 길이만큼 돌린다.
3. 조건문을 통해 각 배열의 인덱스 값을 가져와 나머지 남는 값을 return 시킨다.

## 소스코드

```
function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i]
        }
    }
}
```

## 후기

정렬 시키는 매서드인 sort();를 구글링을 통해 알아보았다. 처음에 정렬을 시키지 않고 코드를 돌렸더니, 확실한 결과가 나오지 않아서 각 배열을 정렬시킨 뒤 테스트를 하니 정상적으로 돌아갔다.