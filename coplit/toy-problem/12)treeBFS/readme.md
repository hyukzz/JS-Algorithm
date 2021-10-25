## 문제 정의

1. 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받는다.
2. 해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search)을 한다.
3. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴한다.

## 입력

인자 1 : node
1. 'value', 'children' 속성을 갖는 객체 (Node)
2. 'node.value'는 number 타입
3. 'node.children'은 Node를 요소로 갖는 배열

## 출력

1. 배열을 리턴한다.

## 주의사항

1. 생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 한다.

## 입출력 예시

```
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]
```

## 소스코드

```
let bfs = function (node) {
  let result = []
  let qu = [node] //순차적으로 노드를 조회

while(qu.length > 0){ // 조회할 노드가 모두 빠져나가면 그만한다.
  let target = qu.shift(); // 노드를 하나 지정해 설정한다.
  result.push(target.value) // 대상 노드의 값을 결과에 저장해 준다.
  for(let i = 0; i < target.children.length; i++){
    qu.push(target.children[i])
  }// 자식의 노드들을 순차적으로 qu에 쌓아준다.
}
  return result; // 결과값을 리턴한다.
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
```