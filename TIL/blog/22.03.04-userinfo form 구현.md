## userinfo form

---

![](https://images.velog.io/images/richard/post/8ae33fdb-8ed4-41d3-9caf-c26f17d4569c/image.png)

위와 같은 큰 틀 안에서 react로 구현하려고합니다. 일단 백엔드로부터 아직 데이터를 받기전에 더미데이터를 이용해 원하는 모양대로 나오는지 만들어봤습니다. 개인정보수정 칸, 개인기록, 최근 경기기록, header, footer 이렇게 5개의 컴포넌트로 구성했습니다.

컴포넌트는 소프트웨어의 재사용성을 높이고, 유지보수를 용이하게 하기 위해 나온 기술입니다. 하나의 페이지에서 여러 개의 컴포넌트들이 다양한 기능들을 작동하게 됩니다. 그때 모든 것이 이어져있다면 관리하기 어려울 것입니다.

컴포넌트는 두 가지 인스턴스 속성으로 props와 state를 가지고 있습니다.

1. props는 부모 컴포넌트가 자식 컴포넌트에게 주는 값이고, 어떠한 값을 컴포넌트에 전달해 줘야 할때 사용하며 할당된 후 컴포넌트 내부에서 값을 변경할 수 없다.
2. state는 컴포넌트 내부에서 선언하고 내부에서 값을 변경할 수 있습니다. 동적인 데이터를 다룰 땐 state를 사용합니다.

이러한 속성을 통해 컴포넌트는 props를 통해 데이터를 전달 받을 수 있고, state를 확인하여 변경되는 값을 확인할 수 있습니다.

### 개인기록 간단코드

```
import React from "react";

function UserinfoRecord({ game, goal, assist, penalty }) {
    return (
        <table className="userinfo">
            <tr>
                <td>총 경기: {game}</td>
                <td>총 득점: {goal}</td>
                <td>총 어시스트: {assist}</td>
                <td>패널티: {penalty}</td>
            </tr>
        </table>
    );
}
export default UserinfoRecord;
```

game,goal,assist,penalty 4가지 props를 통해 데이터를 전달 받았을 때 값으로 나오게 구성했습니다. 테이블 형식으로 구성될 수 있도록 `<table>,<tr>,<td>` 를 사용했습니다.

```import React from "react";
import UserinfoRecord from "./UserinfoRecord";

function UserinfoRecordList() {
    const dummyData = [
        {
            game: 4,
            goal: 10,
            assist: 4,
            penalty: 0,
        },
    ];
    return (
        <div id="UserinfoRecordList">
            <div>
                <h4>개인 기록</h4>
                {dummyData.map((persnal, i) => {
                    return (
                        <UserinfoRecord
                            key={i}
                            game={persnal.game}
                            goal={persnal.goal}
                            assist={persnal.assist}
                            penalty={persnal.penalty}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default UserinfoRecordList;
```

간단한 더미데이터를 만든 뒤 `userinfoRecord.js` 파일을 가져와 `map` 메서드를 통해 데이터들을 나열해줍니다.

### 결과

![](https://images.velog.io/images/richard/post/fd8313b4-8838-42b3-8638-a43b5ac62216/image.png)

이처럼 간단히 테이블 형태로 데이터들을 받아오게되는데 추후에 사용자 각각의 정보를 서버로부터 받아오는 컴포넌트를 구성할 것 입니다.
