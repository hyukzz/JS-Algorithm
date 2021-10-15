## 문제 정의

1. 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받는다.
2. 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 한다. 
3. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴한다.

## 입력

인자 1 : node
1. 'value', 'children' 속성을 갖는 객체 (Node)
2. 'node.value'는 number 타입
3. 'node.children'은 Node를 요소로 갖는 배열

## 출력

배열을 리턴한다.

## 입출력 예시

```
입출력 예시
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = dfs(root);
console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]
```

## 소스코드

```
let dfs = function (node) {
  let values = [node.value];

  node.children.forEach((n) => {
    values = values.concat(dfs(n));
  });

  return values;
};

let Node = function (value) {
  this.value = value;
  this.children = [];
};

Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
```
