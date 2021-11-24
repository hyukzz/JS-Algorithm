HTTP는 HyperText Transfer Protocol의 줄임말로, HTML과 같은 문서를 전송하기 위한 Application Layer 프로토콜이다. HTTP는 웹 브라우저와 웹 서버의 소통을 위해 디자인되었다. 전통적인 클라이언트-서버 모델에서 클라이언트가 HTTP messages 양식에 맞춰 요청을 보내면, 서버도 HTTP messages 양식에 맞춰 응답한다. HTTP는 특정 상태를 유지하지 않는 특징이 있다.

- HTTP의 특징: Stateless(무상태성)

## HTTP messages

HTTP messages 는 클라이언트와 서버 사이에서 데이터가 교환되는 방식이다. HTTP messages에는 다음과 같은 두 가지 유형이 있다.

- 요청(Requests)
- 응답(Responses)

  HTTP messages는 몇 줄의 텍스트 정보로 구성된다. 그러나 개발자는 이런 메시지를 직접 작성할 필요가 거의 없다. 구성 파일, API, 기타 인터페이스에서 HTTP messages를 자동으로 완성한다.

요청(Requests)과 응답(Responses)은 다음과 같은 유사한 구조를 가진다.

1. start line :
   start line에는 요청이나 응답의 상태를 나타낸다.
   항상 첫 번째 줄에 위치한다.
   응답에서는 status line이라고 부른다.

2. HTTP headers :
   요청을 지정하거나, 메시지에 포함된 본문을 설명하는 헤더의 집합이다.

3. empty line :
   헤더와 본문을 구분하는 빈 줄이 있다.

4. body :
   요청과 관련된 데이터나 응답과 관련된 데이터 또는 문서를 포함한다.
   요청과 응답의 유형에 따라 선택적으로 사용한다.

이 중 start line과 HTTP headers를 묶어 요청이나 응답의 헤드(head)라고 하고, payload는 body라고 한다.

## 요청(Requests)

### Start line

HTTP 요청은 클라이언트가 서버에 보내는 메시지다. Start line에는 세 가지 요소가 있다.

1. 수행할 작업(GET, PUT, POST 등)이나 방식(HEAD or OPTIONS)을 설명하는 HTTP method를 나타낸다. 예를 들어 GET method는 리소스를 받아야 하고, POST method는 데이터를 서버로 전송한다.

2. 요청 대상(일반적으로 URL이나 URI) 또는 프로토콜, 포트, 도메인의 절대 경로는 요청 컨텍스트에 작성된다. 이 요청 형식은 HTTP method 마다 다르다.

- origin 형식 : `?`와 쿼리 문자열이 붙는 절대 경로다. POST, GET, HEAD, OPTIONS 등의 method와 함께 사용한다.
  `POST / HTTP 1.1`
  `GET /background.png HTTP/1.0`
  `HEAD /test.html?query=alibaba HTTP/1.1`
  `OPTIONS /anypage.html HTTP/1.0`
- absolute 형식 : 완전한 URL 형식으로, 프록시에 연결하는 경우 대부분 GET method와 함께 사용한다.
  `GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1`
- authority 형식 : 도메인 이름과 포트 번호로 이루어진 URL의 authority component 이다. HTTP 터널을 구축하는 경우, CONNECT와 함께 사용할 수 있다.
  `CONNECT developer.mozilla.org:80 HTTP/1.1`
- asterisk 형식 : OPTIONS 와 함께 별표(_) 하나로 서버 전체를 표현합니다.
  `OPTIONS _ HTTP/1.1`

3. HTTP 버전에 따라 HTTP message의 구조가 달라진다. 따라서 start line에 HTTP 버전을 함께 입력한다.

### Headers

요청의 Headers는 기본 구조를 따른다. 헤더 이름(대소문자 구분이 없는 문자열), 콜론( : ), 값을 입력합니다. 값은 헤더에 따라 다르다. 여러 종류의 헤더가 있고, 다음과 같이 그룹을 나눌 수 있다.

- General headers : 메시지 전체에 적용되는 헤더로, body를 통해 전송되는 데이터와는 관련이 없는 헤더이다.
- Request headers : fetch를 통해 가져올 리소스나 클라이언트 자체에 대한 자세한 정보를 포함하는 헤더를 의미한다. User-Agent, Accept-Type, Accept-Language과 같은 헤더는 요청을 보다 구체화한다. Referer처럼 컨텍스트를 제공하거나 If-None과 같이 조건에 따라 제약을 추가할 수 있다.
- Representation headers : 이전에는 Entity headers로 불렀으며, body에 담긴 리소스의 정보(컨텐츠 길이, MIME 타입 등)를 포함하는 헤더이다.

### Body

요청의 본문은 HTTP messages 구조의 마지막에 위치한다. 모든 요청에 body가 필요하지는 않다. GET, HEAD, DELETE, OPTIONS처럼 서버에 리소스를 요청하는 경우에는 본문이 필요하지 않다. POST나 PUT과 같은 일부 요청은 데이터를 업데이트하기 위해 사용한다. body는 다음과 같이 두 종류로 나눌 수 있다.

- Single-resource bodies(단일-리소스 본문) : 헤더 두 개(Content-Type과 Content-Length)로 정의된 단일 파일로 구성된다.
- Multiple-resource bodies(다중-리소스 본문) : 여러 파트로 구성된 본문에서는 각 파트마다 다른 정보를 지닌다. 보통 HTML form과 관련이 있다.
