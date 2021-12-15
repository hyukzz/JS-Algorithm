// 문제
// 문자열과 두 개의 문자(from, to)를 입력받아, 문자열에 등장하는 특정 문자(from)가 다른 문자(to)로 바뀐 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 인자 2 : from
// string 타입의 문자
// from.length는 1
// 인자 3 : to
// string 타입의 문자
// to.length는 1
// 출력
// string 타입을 리턴해야 합니다.

function replaceAll(str, from, to) {
    let result = '';
for (let i = 0; i < str.length; i++) {
    if (str[i] === from) {
        result = result + to;
    } else {
        result = result + str[i];
}
    }
    return result;
}
/*
문제 정의
1. 문자열 str과 문자 from, to를 입력받습니다.
2. str 내에 모든 from 문자를 to 바꾸어 출력합니다.

문제 풀이
1. str의 모든 문자를 탐색합니다
2. 탐색하고 있는 문자가 from 과 같다면 to로 바꾸어 저장합니다.
3. 모든 탐색을 마친 문자열 str을 반환합니다.
 */
