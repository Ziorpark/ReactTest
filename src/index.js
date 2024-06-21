import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//import Library from './chapter03/Library';
//import Clock from './chapter04/Clock';
//import CommentList from './chapter05/comment-list';
//import NotificationList from './chapter06/NotificationList';
//import Accommodate from './chapter07/Accommodate';
import ConfirmButton from './chapter08/confirmbutton';
import LandingPage from './chapter09/landingpage';
import AttendanceBook from './chapter10/attendancebook';
import SignUp from './chapter11/signup';
import Calculator from './chapter12/Calculator';
import DBTest from './pract/01';
import ProfileCard from './chapter13/profilecard';
import ChartExample from './pract/Graph240611';
import DarkOrLight from './chapter14/darkorlight';
import Blocks from './chapter15/blocks';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
/*
setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);
*/

function Welcom(props) {
  return <h1>안녕, {props.name}</h1>;
}

/*
const element = <Welcom name="인제" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
*/

function App(props) {
  return (
    <div>
      <Welcom name="Mike" />
      <Welcom name="Steve" />
      <Welcom name="Jane" />
    </div>
  )
}

/*
ReactDOM.render(   
    <App />,
    document.getElementById('root')
);
*/

ReactDOM.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
