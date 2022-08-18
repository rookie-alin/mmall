import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router';

const routes:Array<RouteRecordRaw>=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        name:'login',  //登录
        path:'/login',
        component:()=> import('@/views/login/login.vue')
    },
    {
        name:'register',  //注册
        path:'/register',
        component:()=> import('@/views/regist/regist.vue')
    },
    {
        name:'home',  //首页
        path:'/home',
        component:()=> import('@/views/home/home.vue'),
    },
]

export default createRouter({
    history:createWebHashHistory(),
    routes
})
