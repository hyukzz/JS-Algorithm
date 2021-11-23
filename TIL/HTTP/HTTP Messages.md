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
