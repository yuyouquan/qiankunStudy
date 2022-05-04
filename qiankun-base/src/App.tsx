import React from 'react';
import logo from './logo.svg';
import {
  Link
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to={"/micro-app1"}>
        micro-app1
      </Link> ｜
      <Link to={"/micro-app2"}>
        micro-app2
      </Link> ｜
      <Link to={"/micro-app3"}>
        micro-app3
      </Link> ｜
      <Link to={"/micro-app4"}>
        micro-app4
      </Link> ｜
      {/* <a href="/micro-app1">micro-app1</a> ｜
      <a href="/micro-app2">micro-app2</a> ｜ 
      <a href="/micro-app3">micro-app3</a> ｜
      <a href="/micro-app4">micro-app4</a> ｜*/}
      <div id='micro-app1'>

      </div>
      <div id='micro-app2'>

      </div>
      <div id='micro-app3'>

      </div>
      <div id='micro-app4'>

      </div>
    </div>
  );
}

export default App;
