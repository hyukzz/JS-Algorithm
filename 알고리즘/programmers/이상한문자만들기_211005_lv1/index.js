function solution(s) {
    return s.split(' ').map(word => {
      var answer = '';
      for(let i = 0; i < word.length; i++) {
          if(i%2) {
              answer = answer + word[i].toLowerCase();
          } else {
              answer = answer + word[i].toUpperCase();
          }
      } return answer;
    }).join(' ')
}