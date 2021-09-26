// 1번 풀이
function isIsogram(str) {
    let lowerStr = str.toLowerCase();
    for(let i = 0; i < lowerStr.length; i++) {
        for(let j = i+1; j < lowerStr.length; j++) {
        if(lowerStr[i] === lowerStr[j]) return false
        }
    }
    return true;
}

// 2번 풀이
function isIsogram(str) {
    return !str.match(/([a-z]).*\1/i);
} 

/* 
match(): 문자열에서 정규식과 일치하는 문자를 검색하고, 배열로 반환한다.

.: 개행 문자를 제외한 모든 문자와 대응

`*`: 0회 이상 연속으로 반복되는 부분과 대응

i: 대소문자 구분 없는 검색 
*/

