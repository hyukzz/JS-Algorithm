function transformFirstAndLast(arr) {
    let result = {};
    for (let i= 0; i < arr.length; i++) {
      result[arr[0]] = arr[arr.length - 1]
    }
    return result;
  }