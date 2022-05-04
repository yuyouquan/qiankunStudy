import './public-path.js'  //需要加在第一行才有效用
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//@ts-ignore
export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

//应用每次进入都会调用 mount方法，通常我们在这里触发应用的渲染方法
//@ts-ignore
export async function mount(props) {
  //@ts-ignore
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
    // setTimeout(() => {
    //   props.setGlobalState({ ...state, age:22 });
    // }, 2000);
  });
  // props.setGlobalState(state);
  console.log('props mircoapp1', props);
  ReactDOM.render(
    <BrowserRouter
      //@ts-ignore
      basename={ window.__POWERED_BY_QIANKUN__ ? "/micro-app1" : "/" }>
      <App />
    </BrowserRouter>,
    props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root")
  )
}

//应用每次进入都会调用 unmount方法，通常我们在这里卸载应用的渲染方法
//@ts-ignore
export async function unmount(props) {
  console.log('[react16] props from main framework', props);
  ReactDOM.unmountComponentAtNode(
    props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root")
  )
}

//可选生命周期钩子，仅使用 loadMicoApp 方式加载微应用时生效
//@ts-ignore
export async function update(props) {
    console.log("update props",props)
}

//@ts-ignore
if(!window.__POWERED_BY_QIANKUN__) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,document.getElementById('root'))
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
