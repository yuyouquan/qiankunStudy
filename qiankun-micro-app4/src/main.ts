import './public-path.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

//@ts-ignore
let instance = null;

//@ts-ignore
function render(props = {}) {
    console.log(props);
    //@ts-ignore
    const { container } = props;
    instance = createApp(App);
    instance.use(router)
    instance.mount(container ? container.querySelector("#app") : "#app");
}

//独立运行时
//@ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}
export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}

//@ts-ignore
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
    //@ts-ignore
    props.onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log(state, prev);
    });
    // props.setGlobalState(state);
    //@ts-ignore
    instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
    //@ts-ignore
    instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
    //@ts-ignore
    instance.unmount();
    //@ts-ignore
    instance._container.innerHTML = '';
    instance = null;
}