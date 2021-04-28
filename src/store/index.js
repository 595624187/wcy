import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
Vue.use(Vuex)
const state = {
    files:[
        {
            name:'大家撒法艰苦了.ppt',
            user:'作者',
            time:'2021/04/13',
            num:123,
            url:'https://www.baidu.com'
        },
        {
            name:'asdfasd.ppt',
            user:'作者',
            time:'2021/04/13',
            num:543,
            url:'https://www.baidu.com'
        },
        {
            name:'asdf.ppt',
            user:'作者',
            time:'2021/04/13',
            num:12,
            url:'https://www.baidu.com'
        },
        {
            name:'dddddddddddd.ppt',
            user:'作者',
            time:'2021/04/13',
            num:332,
            url:'https://www.baidu.com'
        },
        {
            name:'2222222222.ppt',
            user:'作者',
            time:'2021/04/13',
            num:21323,
            url:'https://www.baidu.com'
        },
        {
            name:'fdsfddfdffffff.ppt',
            user:'作者',
            time:'2021/04/13',
            num:2322,
            url:'https://www.baidu.com'
        },
        {
            name:'cccccccccccccccc.ppt',
            user:'作者',
            time:'2021/04/13',
            num:124341,
            url:'https://www.baidu.com'
        }

    ],
    currentFile:'',
    movies:[
        {
            title:'第一章 浪子回头',
            mv_src:'../../assets/mp4/浪子回头.mp4'
        },
        {
            title:'第二章 知乎热榜',
            mv_src:'../../assets/mp4/演示.mp4'
        },
        {
            title:'第三章 两只老虎',
            mv_src: '../../assets/mp4/两只老虎.mp4'
        }
    ],
    user:{
        name:'未登录',
        pwd:'',
    },
    userState:'登录',
    progress:{
        num:'55',
        status:'',
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        a:moduleA
    }
})

export default store