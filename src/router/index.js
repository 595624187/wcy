import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('@/views/home/home')
const learn = () => import('@/views/learn/learn')
const ppt = () => import('@/views/ppt/ppt')
const talk = () => import('@/views/talk/talk')
const test = () => import('@/views/test/test')

Vue.use(VueRouter)
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/learn',
        component:learn
    },
    {
        path:'/ppt',
        component:ppt
    },
    {
        path:'/talk',
        component:talk
    },
    {
        path:'/test',
        component:test
    },


]

const router = new VueRouter({
    routes,
    mode:'history',
})

export default router