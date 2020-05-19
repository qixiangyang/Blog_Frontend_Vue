import Vue from 'vue'
import Router from 'vue-router'
// 引用页面模板->供路由使用

import User from './layout/UserView'
// import Admin from './layout/AdminView'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: User
        },
        // {
        //     path: '/my_blog/admin',
        //     name: 'admin',
        //     component: Admin
        // }
    ]
})