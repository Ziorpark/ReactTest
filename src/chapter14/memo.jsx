import React from "react";
import Toolbar from "../chapter09/toolbar";

//기존의 방식 : 각 컴포넌트에 props를 통해 데이터 전달

function App(props) {
    return <Toolbar theme="dark" />;
}

function Toolbar(props) {
    //이 Toolbar 컴포넌트는 ThemedButton에 theme를 넘겨주기 위해서 ' theme' prop을 가져야만 합니다.
    //현재 테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는 것은 굉장히 비효율적입니다.

    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    );
}

function ThemedButton(props) {
    return <Button theme={props.theme} />
}