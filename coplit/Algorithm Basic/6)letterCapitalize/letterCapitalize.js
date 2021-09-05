function letterCapitalize(str) {
  // 문자열을 입력 받는다.
  // 첫글자를 따온다.
  // 첫글자를 대문자로 바꾼다.
  // 나머지 글자를 첫글자에 붙인다.
  // 리턴한다.
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }

  str = words.join(' ');
  return str;
}