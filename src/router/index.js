import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('@/views/home/home')
const learn = () => import('@/views/learn/learn')
const ppt = () => import('@/views/ppt/ppt')
const talk = () => import('@/views/talk/talk')
const test = () => import('@/views/test/test')
const login = () => import('@/views/user/login/Login')
const talkOut = () => import('@/views/talk/talkComponents/talkOut/TalkOut')
const talkIndex = () => import('@/views/talk/talkComponents/talkOut/TalkIndex')
const user = () => import('@/views/user/user')
const testList = () =>import('@/views/test/testList/TestList')
const testMain = () => import('@/views/test/testComponents/testMain')
const testResult = () => import('@/views/test/testResult/TestResult')
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
        component:talk,
    },
    {
        path:'/test',
        component:test
    },
    {
        path:'/login',
        component:login
    },
    {
        path:'/user/:id',
        component:user,
    },
    {
        path:'/talkOut',
        component:talkOut
    },
    {
        path:'/talkIndex',
        component:talkIndex
    },
    {
        path:'/testList',
        component:testList
    },
    {
        path:'/testMain',
        component:testMain
    },
    {
        path:'/testResult',
        component:testResult
    }
]

const router = new VueRouter({
    routes,
    mode:'history',
})

export default router