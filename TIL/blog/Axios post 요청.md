## Axios란?

---

- Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다.
- Backend와 Frontend와의 통신을 쉽게하기 위해 Ajax와 같이 사용합니다.
- Axios는 운영환경에 따라서 브라우저간 XMLHttpRequest 객체 또는 Node.js의 HTTP API를 사용합니다.
- 자바스크립트에는 fetch api가 있지만, 프레임워크에서 ajax를 구현할 땐 axios를 쓰는 편입니다.
- Promise(ES6) API를 사용합니다.
- 요청(Request) 응답 (reply)을 JSON 형태로 자동 변경합니다.

### Axios 설치

---

```
npm install axios
```

### Axios post

---

Axios의 post 메서드에는 일반적으로 데이터를 body에 포함시켜 보냅니다.

```
axios.post("http://localhost:4000/user/login",
	{
		userid,
		password,
	},
    { "Content-Type": "application/json", withCredentials: true },)
	.then((res) => {
		console.log(res);
		console.log(res.data.data.accessToken);
		localStorage.setItem("accessToken", res.data.data.accessToken);
		console.log("성공");
		if(res.data.data.accessToken) {
		localStorage.setItem("accessToken", res.data.data.accessToken);
		setIsLogin(true);
		}
		// 작업 완료 되면 페이지 이동(새로고침)
			return window.location.replace("/");
		})
        .catch((error) => {
        	console.log(error);
            alert("아이디와 비밀번호를 확인해 주세요.");
            });

```

- "http://localhost:4000/user/login"이라는 URL과 통신하며, body에 userid와 password를 `post`합니다.
- json형식 텍스트는 json값을 “ContentType”:`application/json` 헤더와 함께 전송해줍니다.
- 요청이 정상적으로 통신된다면 accessToken의 값을 local에서 확인하고 "accessToken"이라는 key에 res.data.data에 담긴 accessToken의 value를 담아줍니다.
- 이 value는 `localStorage.getItem`로 나중에 조회하여 사용할 수 있습니다.
- 그 이후 로그인 상태를 true값으로 바꿔줍니다.

---

이처럼 axios post를 로그인에서 사용해봤는데 Backend로부터 생성된 token을 local에 담아 로그인을 구현해볼 수 있었습니다.
다양한 요청을 사용하여 데이터를 통신한다면 다양한 정보를 Front에 가져올 수 있고, 수정된 데이터를 Back으로 보낼 수 있을 것입니다.
