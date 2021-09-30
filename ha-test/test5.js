// 5번문제
//사람들의 정보를 담은 배열을 입력받아 조건에 맞게 각 개인의 전체 이름을 요소로 갖는 배열을 리턴한다.

function findIndex(arr) {
    // 3중 배열을 객체 요소가 담긴 배열로 만든다.
    let newArr = []
    arr.map(el => {
      let obj = {}
      el.reduce((acc, cur) => {
        obj[cur[0]] = cur[1]
      },0)
      newArr.push(obj)
    })
   
    // 객체의 key값 중 age를 이용해서 오름차순으로 정렬한다.
    let sortArr = newArr.sort((a, b) => {
      if(a.age > b.age){
        return 1
      }
      if(a.age < b.age){
        return -1
      }
    })
   
    // 객체의 key값 중 firstName, lastName을 이용해서 이름을 뽑는다.
    let result = []
    for(let i = 0; i < sortArr.length; i++){
      if(sortArr[i].firstName && sortArr[i].lastName){
        result.push(`${sortArr[i].firstName} ${sortArr[i].lastName}`)
      }
      if(!sortArr[i].firstName){
        result.push(`${sortArr[i].lastName}`)
      }
      if(!sortArr[i].lastName){
        result.push(`${sortArr[i].firstName}`)
      }
    }
   
    return result;
  }

  function test5(arr) {
    // for of문을 통해 객체로 값을 저장
    let arr1 = [];
    for(el of arr){ 
        obj = {};
        for(let i = 0; i < el.length; i++){
          obj[el[i][0]] = el[i][1]
        }
        arr1.push(obj)
    }
    //.map(raw => raw.reduce((obj, [k, v]) => Object.assign(obj, {[k]: v}) , {}))

    // 객체를 오름차순으로 정렬
    let arr2 = arr1.sort((a, b) => a.age - b.age);
    // firstName, lastName을 filter(Boolean) 메서드로 필요없는 값을 걸러내고 join 메서드를 통해 띄어쓰기로 리턴
    return arr2.map(({firstName, lastName}) => [firstName, lastName].filter(Boolean).join(' '))
    }
    