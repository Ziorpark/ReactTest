import React, { useState } from "react";

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomDialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                어서오세요
            </h1>
            <p className="Dialog-message">
                우리 사이트에 방문하신 것을 환영합니다!
            </p>
        </FancyBorder>
    );
}

/*
React.createElement(
    type,
    props,
    children
)
*/

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App(props) {
    return (
        <SplitPane
            left={ <Contacts /> }
            right={ <Chat /> }
        />
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>

            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

function WelcomDialog(props) {
    return (
        <Dialog
            title="어서오세요"
            message="우리 사이트에 방문하신 것을 환영합니다!"
        />
    );
}

function SignUpDialog(props) {
    const [nickname, setNickname] = useState('');

    const handleChange = (event) => {
        setNickname(event.target.value);
    }

    const handleSignUp = () => {
        alert(`어서오세요, ${nickname}님!`);
    }

    return (
        
        <Dialog
            //Specialization
            title="화성 탐사 프로그램"
            message="닉네임을 입력해 주세요.">

            {/*Containment*/}
            <input
                value={nickname}
                onChange={handleChange} />
            <button onClick={handleSignUp} >
                가입하기
            </button>
        </Dialog>
    );
}