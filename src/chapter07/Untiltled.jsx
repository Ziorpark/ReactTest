import React, {useState, useEffect, useMemo, useCallback, useRef} from "react";

function Counter(props) {
    //var count = 0;
    //Hook
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>총 {count}번 클릭했습니다. </p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    )
}


function Counter2(props) {
    const [ count, setCount ] = useState(0); //초기값 설정

    // componentDidMount, componentDidUpdate와 비슷하게 작동
    useEffect(() => {
        //브라우저 API를 사용해서 document의 title을 업데이트 
        //의존성 배열없이 사용 => DOM이 변경된 이후 해당 이펙트 함수를 실행하라는 의미로 받아들임
        document.title = `You Clicked ${count} times`;
    });

    return (
        <div>
            <p> 총 {count}번 클릭했습니다. </p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    )
}


function UserStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status){
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        
        return () => {
            //컴포넌트가 unmount 될때 호출
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    if (isOnline === null){
        return '대기 중...';
    }

    return isOnline ? '온라인' : '오프라인' ;
}


function UserStatusWithCounter(props){
    //Hook 2개 사용
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`;
    });

    const [isOnline, setIsOnline] = useEffect(null);
    useEffect(() => {
        // 컴포넌트가 마운트 된 이후,
        // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
        // 의존성 배열에 빈 배열( [] )을 넣으면 마운트와 언마운트시에 단 한번씩만 실행됨
        // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨

        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            //컴포넌트가 마운트 해제되기 전에 실행됨
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

}


function ParentComponent(props) {
    const [count, setCount] = useState(0);

    /*
    //재렌더링 될 때마다 매번 함수가 새로 정의됨.
    const handleClick = (event) => {
        //클릭 이벤트 처리
    };
    */

    // 컴포넌트가 마운트 될 때만 함수가 정의됨
    const handleClick = useCallback((event) => {
        //클릭 이벤트 처리
    }, []);

    return (
        <div>
            <button 
            onClick={()=> {
                setCount(count+1);
            }}>
                {count}
            </button>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
}


function TextInputWithFocusButton(props) {
    const inputElem = useRef(null);

    const onButtonClick = () => {
        // current는 마운트된 input element를 가르킴
        inputElem.current.focus();
    };

    return (
        <>
            <input ref={inputElem} type="text" />
            <button onClick={onButtonClick}>Focus the input</button> 
        </>
    )
}


function MeasureExample(props) {
    const [height, setHeight] = useState(0);
    const measureRef = useCallback(node => {
        if (node !== null){
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    return (
        <>
            <h1 ref={measureRef}>안녕, 리액트</h1>
            <h2>위 헤더의 높이는  {Math.round(height)}px 입니다.</h2>
        </>
    );
}

export default MeasureExample;