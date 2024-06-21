import React, { useState } from "react";

function UserGreeting(props) {
    return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting(props) {
    return <h1>회원가입을 해주세요.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            로그인
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            로그아웃
        </button>
    );
}

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    /*
    let button; //컴포넌트로부터 생성된 리액트 엘리멘탈
    if (isLoggedIn) {
        button = <LogoutButton onClick = {handleLogoutClick} />;
    } else {
        button = <LoginButton onClick = {handleLoginClick} />;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div> 
    );
    */

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn 
            ? <LogoutButton onClick={handleLogoutClick} />
            : <LoginButton onClick={handleLoginClick} />
            }
        </div>
    )
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>안녕하세요!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
                </h2>
            }
        </div>
    );
}

function UserStatus(props) {
    return (
        <div>
            이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
        </div>
    )
}

function WarningBanner(props) {
    if (!props.warning) {
        return null;
    }

    return (
        <div>경고!</div>
    )
}

function MailPage(props) {
    const [showWarning, setShowWarning] = useState(false);

    const handletoggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return (
        <div>
            <WarningBanner warning={showWarning} />
            <button onClick={handletoggleClick}>
                {showWarning ? "감추기" : "보이기"}
            </button>
        </div>
    )
}

export default MailPage;