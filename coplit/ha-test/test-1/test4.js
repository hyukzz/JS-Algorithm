function printRole(user) {
    // Joe Blow를 클릭하면 clerk 이
    // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
    // 이 함수는 수정하지 마십시오.
    console.log(user.role);
  }
  
  function printRole(user) {
    console.log(user.role);
  }
   
  function test4(arr) {
    for (let i = 0; i < arr.length; i++) {
      // li 변수에 li 엘리먼트를 할당
      let li = document.createElement('li')
      // name 변수에 a 엘리먼트를 할당
      let name = document.createElement('a')
      // 변수 name에 setAttribute를 사용
      // a 엘리먼트에 class를 name 속성 값으로 설정
      name.setAttribute('class', 'name')
      // 출력되는 값을 arr인덱스의 ~Name 값으로 설정
      name.textContent = `${arr[i].firstName} ${arr[i].lastName}`
      // 이벤트리스너를 통해 클릭 시 printRole 함수가 실행
      name.addEventListener('click', function() {printRole(arr[i])})
      // append로 name요소 추가
      li.append(name)
      // div 엘리먼트를 변수 age에 할당
      let age = document.createElement('div')
      // 지정된 요소의 속성 값을 설정
      age.setAttribute('class', 'age')
      // 출력되는 값을 arr인덱스의 age 변수 값으로 설정
      age.textContent = `${arr[i].age}`
      // append로 age요소 추가
      li.append(age)
      // 'container'라는 것을 querySelector로 가져와서 append함
      document.querySelector('#container').append(li)
    }
  }