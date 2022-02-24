1. S3는 php, jsp 등의 동적 웹사이트를 호스팅할 수 있다. f
2. 프로세스는 특정 작업을 수행하는 일련의 명령어의 모음이다. f
3. .env 파일에 환경변수를 저장하면, js 파일에서 바로 사용할 수 있다. f
4. 컨테이너는 도커 이미지를 생성하는 데 사용되는 템플릿이다. f
5. 세션 기반 인증은 토큰 기반 인증보다 서버에 부하를 덜 준다. f
6. 하나의 프로세스는 하나의 스레드로만 작동할 수 있다. f
7. 프로세스 메니저 pm2로 여러개의 프로세스를 실행할 수 있다. t
8. 기능별로 복잡한 관계가 많이 설정되고 관계가 분명한 앱은 NoSQL을 사용하는게 바람직하다. f
9. 항상 일관된 데이터가 필요한 앱 (e.g. 주식거래)은 SQL을 사용하는게 바람직하다. t
10. IP 프로토콜의 한계는 비상태성과 비신뢰성이다. f

11. 다음 코드의 시간 복잡도를 올바르게 나타낸 것은?
    let i = 100;
    for (; i > 1;) {
    i /= k;
    }
    A. O(i)
    B. O(i \* k)
    C. O(log i k)
    D. O(log k i) V

12. 다음 코드의 시간 복잡도를 올바르게 나타낸 것은?
    let a = 0,
    let b = 0;

for (i = 1; i < n; i+=1) {
a = a + 1;
}

for (j = 2; j < n; j+=1) {
b = b + 1;
}
A. O(2n)
B. O(nlogn)
C. O(n) VVVV //정답 C
D. O(n^2)

13. HTTP 헤더와 그에 대한 설명이 틀린 것을 고르시오.
    A. Location : 페이지 리다이렉션
    B. Retry-After : 유저 에이전트가 다음 요청을 하기까지 기다려야 하는 시간
    C. Content-Language: 표현 데이터의 프로그래밍 언어 V
    D. Content-Type: 표현 데이터의 형식

14. 다음 중 채팅 프로그램에서 유저가 작성한 메시지를 서버로 보낼 때, TCP/IP 4계층 모델을 기반으로 네트워크의 상황을 순서대로 나열한 것을 찾으시오.

A. 애플리케이션 계층에서 HTTP 메시지에 해당 메시지(Hello, World)가 담겨 전송됩니다.
B. 생성된 IP 패킷은 물리적 계층을 지나기 위해서 이더넷 프레임 워크에 포함되어 서버로 전송됩니다.
C. 전송 계층에서 TCP 세그먼트를 생성하고, 인터넷 계층에서 IP 패킷으로 만들어집니다.
D. 유저가 채팅 프로그램에서 Hello, World 메시지를 작성합니다.

A. A-C-B-D
B. D-A-B-C
C. D-B-C-A
D. D-A-C-B V

15. 환경변수에 대해서 옳은 내용은?
    A. 환경변수를 지정하기 위해서는 setenv 명령어를 사용합니다.
    B. 환경변수 NVM_DIR 을 조회하기 위해서는 터미널에 echo NVM_DIR 을 입력해야 합니다.
    C. 로컬 환경에서 지정한 환경변수는 EC2와 같은 원격 인스턴스에서 사용할 수 없습니다. V
    D. React에서는 개발 환경에서 지정한 환경변수를 사용할 수 없습니다.

16. HTTP 메시지에 대한 내용으로 틀린 것을 고르시오.
    A. HTTP 바디는 HTTP 전송에 필요한 모든 부가정보를 담기 위해 사용합니다. V
    B. HTTP 메시지는 헤더와 바디로 구분할 수 있습니다.
    C. HTTP 바디에서 모든 표현(Representation) 데이터를 전달합니다.
    D. 메시지의 본문인 바디는 페이로드라고 합니다.

17. As-is 테이블이 아래와 같을 때, To-be 테이블을 조회하기 위한 쿼리는?

As-is

OrderDetailID OrderID ProductID Quantity
1 10248 11 12
2 10248 42 10
3 10248 72 5
4 10249 14 9
5 10249 51 40
6 10250 41 10
7 10250 51 35
To-be

OrderID Quantity QuantityText
10248 12 The quantity is under 30
10248 10 The quantity is under 30
10248 5 The quantity is under 30
10249 9 The quantity is under 30
10249 40 The quantity is greater than 30

A. V
SELECT OrderID, Quantity,
CASE
WHEN Quantity > 30 THEN 'The quantity is greater than 30'
WHEN Quantity = 30 THEN 'The quantity is 30'
ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;

B.
SELECT OrderID, Quantity,
IF
WHEN Quantity > 30 THEN 'The quantity is greater than 30'
WHEN Quantity = 30 THEN 'The quantity is 30'
ELSE 'The quantity is under 30'
END ON Quantity
FROM OrderDetails;

C.
SELECT OrderID, Quantity,
CASE
WHEN Quantity > 30 THEN 'The quantity is greater than 30'
WHEN Quantity = 30 THEN 'The quantity is 30'
ELSE 'The quantity is under 30'
AS Quantity
FROM OrderDetails;

D.
SELECT OrderID, Quantity,
IF
WHEN Quantity > 30 THEN 'The quantity is greater than 30'
WHEN Quantity = 30 THEN 'The quantity is 30'
ELSE 'The quantity is under 30'
AS QuantityText
FROM OrderDetails;

18. 캐싱에 대한 내용으로 옳지 않은 것은?

A. 캐싱은 브라우저 로딩속도가 빨라지고 비싼 네트워크 사용량을 줄일 수 있습니다.
B. 서버의 램의 일부를 사용하여 데이터 검색 성능을 높이는 것 또한 캐싱입니다.
C. 헤더 속성이 Cache-Control: max-age=60이면 케시 유효 시간은 60ms입니다. V
D. 확실히 캐시 무효화 응답을 하고 싶다면 Cache-Control, Pragma 헤더를 둘 다 사용해야 합니다.

19. kimcoding은 원하는 회사에 개발자로 취업하여 하나의 프로젝트를 관리하게 되었습니다. As-is와 같은 git log를 To-be로 변경하기 위해 필요한 명령어는?

As-is

- 49f0e86 (HEAD -> master) RELEASE version 0.1
  | _ 0afe85f (feat/kimcoding) feat: UPDATE 기능 구현
  | _ 08b1965 feat: DELETE 기능 구현
  | _ e66dd3d feat: READ 기능 구현
  | _ 7e308c0 feat: CREATE 기능 구현
  |/
- a3561a2 initial commit
  To-be

- 471ff3f (HEAD -> master) merge
- 49f0e86 RELEASE version 0.1
  | _ 0afe85f (feat/kimcoding) feat: UPDATE 기능 구현
  | _ 08b1965 feat: DELETE 기능 구현
  | _ e66dd3d feat: READ 기능 구현
  | _ 7e308c0 feat: CREATE 기능 구현
  |/
- a3561a2 initial commit

A.
$ git merge --continue "feat/kimcoding"
$ git commit

B.
$ git merge --squash "feat/kimcoding"
$ git commit

C. V
$ git merge --squash "feat/kimcoding" V
$ git commit -m "merge"

D.
$ git merge --continue "feat/kimcoding"
$ git commit -m "merge"

20. 콘텐츠 협상 헤더에 대한 설명으로 옳지 않은 것을 고르시오.

A.
Accept는 클라이언트가 선호하는 미디어 타입을 전달합니다.

B.
협상 헤더는 요청에서 사용 가능합니다.

C.
협상 헤더에서는 원하는 콘텐츠에 대한 우선순위를 지정할 수 있습니다.

D.
Accept-Language: ko-KR,ko;q=0.9, en-US;q=0.8 일 경우, 영어를 1순위로 지원합니다. VVV //정답 D
