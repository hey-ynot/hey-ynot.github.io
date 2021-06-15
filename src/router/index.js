import Vue from 'vue'
import Router from 'vue-router'
import Art from '@/components/Art'
import Code from '@/components/Code'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/art',
            name: 'Art',
            component: Art
        },
        {
            path: '/code',
            name: 'Code',
            component: Code
        }
    ]
})