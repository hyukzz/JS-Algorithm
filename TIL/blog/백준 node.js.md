```
1. 하나의 값을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

3. 여러 줄의 값들을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);

5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

2~6에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(v => +v)를 추가
```

---

&nbsp; 백준 문제를 풀려고 할 때 node.js를 사용하면서 입력을 받는 방법 2가지 중 주로 사용하고 있는 fs모듈이다.

&nbsp;최근에 언어 공부에 대한 중요성을 많이 느껴 알고리즘 문제를 풀고 있는데 프로그래머스와는 다르게 직접 백준에서 node.js로 입력을 받게 해야되는데 나중에 보기 편하게 정리해놓은 자료를 가져왔다.
차근차근 알고리즘 문제를 해결하며 언어와 조금 더 친해지는 내가 될 수 있도록 해야겠다.

&nbsp; 사실 내가 귀찮아하고 하기 싫은 일을 해야 발전할 수 있다고 생각하기 때문에 처음 적응하는 과정이 힘들어도 열심히 노력해야겠다.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
출처: https://tesseractjh.tistory.com/39
