/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare global {
    interface Window {
        __POWERED_BY_QIANKUN__ : boolean;
    }
}
export {};
