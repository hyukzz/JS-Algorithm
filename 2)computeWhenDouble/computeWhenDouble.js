function computeWhenDouble(interestRate) {
  // 원금*이자율/100 > 2 될 때 까지 year를 카운트
  //( 원금 + (연이율 / 100) )^year(연수)
  let rate = 1 + interestRate / 100;
  let principal = 1;
  let year = 0;
  while (principal < 2) {
    principal = principal * rate;
    year++;
  }
  return year;
}