import { createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'
import Cat from '@/view/Cat.vue';
import Dog from '@/view/Dog.vue';

const routes: RouteRecordRaw[] =[
    {
        path: "/cat",
        component: Cat
    },
    {
        path: "/dog",
        component: Dog
    },
]
const router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? "micro-app4" : "/"),
    routes
})

export default router;