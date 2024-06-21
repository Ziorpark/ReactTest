import React from "react";

function Welcom(props) {
    return <h1>안녕, {props.name}</h1>;
}

const element = <Welcom name="인제" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);

