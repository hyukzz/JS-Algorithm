// 문제
// 점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.

// 입력
// 인자 1 : score
// number 타입의 정수
// 출력
// string 타입을 리턴해야 합니다.
// (100 - 90) --> 'A'
// (89 - 80) --> 'B'
// (79 - 70) --> 'C'
// (69 - 60) --> 'D'
// (59 - 0) --> 'F'
// 주의 사항
// 만약 주어진 점수가 100을 초과하거나 0 미만이라면 문자열 INVALID SCORE를 리턴해야 합니다.

function convertScoreToGrade(score) {
    if(score>100||score<0){
      return 'INVALID SCORE'
    }
    else if(score<=100&&score>=90){
      return 'A'
    }
    else if(score<=89&&score>=80){
      return 'B'
    }
    else if(score<=79&&score>=70){
      return 'C'
    }
    else if(score<=69&&score>=60){
      return 'D'
    }
    else {
      return 'F'
  }
  }
  