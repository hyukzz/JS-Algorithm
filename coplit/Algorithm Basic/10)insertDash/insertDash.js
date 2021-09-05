function insertDash(str) {
    let result = str[0];
    for (let i = 1; i < str.length; i++) {
      if (Number(str[i - 1]) % 2 && Number(str[i]) % 2) {
        result = result + '-';
      }
      result = result + str[i];
    }
  return result;
  }