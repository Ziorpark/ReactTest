import React from "react";

/*
const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) => 
    <li>{number}</li>
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root') 
);
*/

function NumberList(props) {
    const { numbers } = props;

    const listItems = numbers.map((number) => 
        <li>{number}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);

const listItems = numbers.map((number) => 
    <li key={number.toString()}>
        {number}
    </li>    
)

const todoItems = todos.map((todo) => {
    <li key={todo.id}>
        {todo.text}
    </li>
});

/*
const todoItems = todos.map((todo, index) => {
    //아이템들의 고유한 ID가 없을 경우에만 사용해야 함
    <li key={index}>
        {todo.text}
    </li>
});
*/