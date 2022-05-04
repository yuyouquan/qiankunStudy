import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cat',
    name: 'Cat',
    component: () => import(/* webpackChunkName: "Cat" */ '../views/Cat.vue')
  },
  {
    path: '/dog',
    name: 'Dog',
    component: () => import(/* webpackChunkName: "Dog" */ '../views/Dog.vue')
  },
]

export default routes
