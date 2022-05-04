import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';
import { initGlobalState, MicroAppStateActions } from 'qiankun';

const state = {
  nickname: "Snoopy Base"
}
// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
setTimeout(() => {
  actions.setGlobalState({ ...state, age:20 });
}, 2000);
actions.offGlobalStateChange();

registerMicroApps([
  {
    name: 'qiankun-micro-app1', // app name registered
    entry: '//localhost:3011',
    container: '#micro-app1',
    activeRule: '/micro-app1',
    props: {
      nickname: "Snoopy1"
    }
  },
  {
    name: 'qiankun-micro-app2',
    entry: '//localhost:3012',
    container: '#micro-app2',
    activeRule: '/micro-app2',
    props: {
      nickname: "Snoopy2"
    }
  },
  {
    name: 'qiankun-micro-app3',
    entry: '//localhost:3013',
    container: '#micro-app3',
    activeRule: '/micro-app3',
    props: {
      nickname: "Snoopy3"
    }
  },
  {
    name: 'qiankun-micro-app4',
    entry: '//localhost:3014',
    container: '#micro-app4',
    activeRule: '/micro-app4',
    props: {
      nickname: "Snoopy4"
    }
  },
]);
start();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
