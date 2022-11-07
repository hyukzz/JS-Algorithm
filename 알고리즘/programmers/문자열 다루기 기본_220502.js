/*
문제
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.

    1. 문제 정의
        - 입력 문자열 S(1 <= S의 길이 <= 8)의 길이가 4 혹은 6이 아니면 false를 반환한다.
        - 입력 문자열에 숫자가 아닌 값이 있다면 false를 반환한다.
    2. 풀이 방법
        - s.length() != 4 && ... !=6 false return.
        - parseInt(s) != false
*/

function solution(s) {
	console.log(Number(s));
	if ((s.length === 4 || s.length === 6) && Number(s)) {
		for (let i = 0; i < s.length; i++) {
			if (s[i] == "e") return false;
		}
		return true;
	}
	return false;
}
