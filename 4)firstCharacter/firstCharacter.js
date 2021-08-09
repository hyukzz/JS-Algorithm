function firstCharacter(str) {
    // 단어는 공백 한 칸으로 구분한다.
    // 각 단어의 첫 글자를 string타입으로 리턴한다.
    if (str === '') {
        return '';
    }

    let words = str.split(' ');
    let result = '';
    for (let i=0; i<words.length; i++) {
        result = result + words[i][0]
    }
    return result;
}