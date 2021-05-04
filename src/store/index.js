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
        id:88,
        name:'user001',
        pwd:'',
        state:'未登录',
        sex:'男',
        age:18,
        city:'武汉',
        work:'学生',
        detail:'我是你发生了快点放假啊克里斯蒂，' +
            '阿萨的开发吉萨独立开发就拉萨的飞机啊圣诞快乐房价萨科，' +
            '阿斯顿发吉萨大JFK拉萨到家乐福撒扩大富士达范德萨，' +
            '爱的色放就拉省的艰苦拉萨解放的',
        progress:60,
    },

    themes:[
        {
            title:'我是主题1',
            content:'我是内容1，撒旦立刻发撒独立开发就撒开了积分啊圣诞快乐房价雷克萨JFK啦就圣诞快乐房价撒旦警方撒旦' +
                '啊圣诞快乐房价萨拉丁飞机卢卡斯的积分考虑阿斯达克了解快乐圣诞节安抚',
            creator:'用户1',
            time:'2021/02/04',
            up:214,
            click:'2.4w',
            id:0,
            down:12,
        },
        {
            title:'我是主题2',
            content:'我是内容2，大分厘卡圣诞节付款了撒地方即可撒大苏打开了房间撒赖扩大解放看来撒JFK了撒旦' +
                '撒旦看风景拉萨的空间反抗拉萨大家分厘卡',
            creator:'用户111',
            time:'2021/02/04',
            up:342,
            click:'2.1w',
            id:1,
            down:2,
        },
        {
            title:'我是主题3',
            content:'我是内容3，萨克利夫就是狄拉克附件敖德萨看风景深大路口附近凯撒的理解看来是发' +
                '撒旦看风景撒赖打开附件两款撒低级反抗拉萨解放快乐圣诞节案例开始',
            creator:'用户2',
            time:'2021/12/04',
            up:542,
            click:'4.4w',
            id:2,
            down:33,
        },
        {
            title:'我是主题4',
            content:'我是内容4，上的飞机撒旦立刻反击考虑撒地方即可了撒旦经理反馈吉萨独立开发就是打开垃圾' +
                '啊撒旦看风景拉克丝JFK拉萨的就离开房间撒旦解放拉萨扩大 啊',
            creator:'用户3',
            time:'2021/07/23',
            up:321,
            click:'8.4w',
            id:3,
            down:5,
        }
    ]
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