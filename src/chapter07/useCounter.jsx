import React, { useState } from "react";

//초기 카운트 값을 파라미터로 받아 count라는 이름의 state를 생성하여 값을 제공
//count 증가 및 감소를 편리하게 할 수 있음
function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1 );
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}


export default useCounter;