import React, { useState, useEffect } from "react";

function UserStatus(props) {
    //isOnline이라는 state에 따라서 사용자의 상태가 온라인인지 확인
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status){
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);

        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        }
    });

    if(isOnline === null){
        return '대기중...';
    }

    return isOnline? '온라인' : '오프라인';
}

function UserListItem(props) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);

        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    return (
        <li style={{color : isOnline ? 'green' : 'black'}}>
            {props.user.name}
        </li>
    );
}

const userList = [
    {id : 1, name: 'Inje'},
    {id : 2, name: 'Mike'},
    {id : 3, name: 'Steve'},
];

function ChatUserSelector(props) {
    const [userId, setUserId] = useState(1);
    const isUserOnline = useUserStatus(userId); //새로 선택된 유저의 온라인 여부를 구독

    //select 태그를 통해 목록에서 사용자라를 선택할 수 있게 해줌
    //사용자를 선택할 경우 해당 사용자가 온라인인지 아닌지 보여줌
    return (
        <>
            <circle color={isUserOnline ? 'green' : 'red' } />
            <select 
                value={userId}
                onChange={event => setUserId(Number(event.target.value))}>

                    {userList.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
        </>
    )
}