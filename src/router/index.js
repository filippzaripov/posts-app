import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home')
    },
    {
        path: '/add',
        name: 'Create',
        component: () => import('../views/Create.vue')
    },
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: () => import('../views/Login')
    // },
    {
        path: '/login',
        name: 'Name',
        component: () => import('../views/Name')
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: () => import('../views/Comments')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
