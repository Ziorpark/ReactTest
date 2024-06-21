import { useState } from "react";

//클래스 컴포넌트
class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isToggleOn : true};

        //callback에서 'this'를 사용하기 위해서는 바인딩을 필수적으로 해줘야 합니다.
        this.handleClick = this.handleClick.bind(this);
    }

    //이벤트 핸들러 함수 정의
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐' }
            </button>
        );
    }
}

class MyButton extends React.Component {
    handleClick = () => {
        console.log('this is : ', this);
    }

    render() {
        return (
            /*
            <button onClick={this.handleClick}> 
                클릭
            </button>
            */

            //이 콜백 함수가 props로 넘어가게 되면 추가적으로 랜더링 사용
            <button onClick={ () => this.handleClick()} >
                클릭
            </button>
        );
    }
}

function Toggle2(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
     
    //방법1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    //방법2. arroww function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}

function MyButton2(props){ //매개변수 순서는 상관없음
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };

    return (
        <button onClick={(event) => handleDelete(1, event)}>
            삭제하기
        </button>
    );

}
