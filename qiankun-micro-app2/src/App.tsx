import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link,Routes,Route } from 'react-router-dom'
import Cat from './pages/Cat'
import Dog from './pages/Dog'

function App() {
  return (
    <div className="App">
      <Link to={"/"}>micro-app2 首页</Link>
      <Link to={"/cat"}>micro-app2 Cat</Link>
      <Link to={"/dog"}>micro-app2 Dog</Link>
      <Routes>
        <Route path='/cat' element={<Cat />}></Route>
        <Route path='/dog' element={<Dog />}></Route>
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>micro-app2</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
