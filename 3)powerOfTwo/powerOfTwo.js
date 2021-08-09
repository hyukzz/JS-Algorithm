function powerOfTwo(num) {
    //수를 입력받는다
    //입력 받은 수가 2의 거듭제곱인지 확인한다
    //맞을 시 true로 리턴, 틀릴 시 false로 리턴
    if (num === 1) {
        return true;
    }
    if (num % 2) {
        return false;
    }
    let result = 2;
    while (result < num) {
        result = result * 2;
    }
    return result === num;
}
