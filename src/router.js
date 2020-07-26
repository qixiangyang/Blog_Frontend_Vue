import Vue from 'vue'
import Router from 'vue-router'
// 引用页面模板->供路由使用

import BlogList from './views/components/content'
import Layout from './views/UserLayout'
import About from './views/components/about'
import PyHub from './views/components/pyhub'
// import admin from './views/AdminView'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Layout,
            children:[
                {
                    path: '/',
                    name: 'index',
                    component: BlogList
                },
                {
                    path: '/pyhub',
                    name: 'pyhub',
                    component: PyHub
                },
                {
                    path: '/archives',
                    name: 'pyhub',
                    component: PyHub
                },
                {
                    path: '/about',
                    name: 'About',
                    component: About
                },
            ]
        }

        // {
        //     path: '/my_blog/admin',
        //     name: 'admin',
        //     component: admin
        // }
    ]
})