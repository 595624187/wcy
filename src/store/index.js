import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
Vue.use(Vuex)
const state = {
    currentFile:'',
    oldfiles:[
        {
            name:'第一章 物理层.ppt',
            user:'管理员',
            time:'2021/04/13',
            num:123,
            url:'https://www.baidu.com'
        },
         {
            name:'第二章 数据链路层.ppt',
            user:'管理员',
            time:'2021/04/13',
            num:123,
            url:'https://www.baidu.com'
        },
         {
            name:'第三章 网络层.ppt',
            user:'管理员',
            time:'2021/04/13',
            num:123,
            url:'https://www.baidu.com'
        },
         {
            name:'第四章 传输层.ppt',
            user:'管理员',
            time:'2021/04/13',
            num:123,
            url:'https://www.baidu.com'
        },
         {
            name:'第五章 应用层.ppt',
            user:'管理员',
            time:'2021/04/13',
            num:123,
            url:'https://www.baidu.com'
        },
    ],
    files:[
        {
            name:'大家撒法艰苦了.ppt',
            user:'作者01',
            time:'2021/04/13',
            num:123,
            url:'https://www.baidu.com'
        },
        {
            name:'asdfasd.ppt',
            user:'作者02',
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
    movies:[
        {
            chapter:'第一章',
            title:'浪子回头',
            mv_src: require("@/assets/mp4/演示.mp4")
        },
        {
            chapter:'第二章',
            title:'知乎热榜',
            mv_src:require("@/assets/mp4/缘分一道桥.mp4")
        },
        {
            chapter:'第三章',
            title:'缘分一道桥',
            mv_src: require("@/assets/mp4/a.mp4")
        },
        {
            chapter:'第四章',
            title:'上课但是',
            mv_src:require("@/assets/mp4/b.mp4")
        },
        {
            chapter:'第五章',
            title:'是的快捷方式开朗大方',
            mv_src:require("@/assets/mp4/c.mp4")
        },
        {
            chapter:'第六章',
            title:'是的快捷方式开朗大方',
            mv_src:require("@/assets/mp4/d.mp4")
        },
        {
            chapter:'第七章',
            title:'是的快捷方式开朗大方',
            mv_src:require("@/assets/mp4/e.mp4")
        }
    ],
    users:[{
        name:'123',
        user_name:'user001',
        pwd:'123',
        state:'未登录',
        sex:'男',
        age:18,
        city:'武汉',
        work:'学生',
        detail:'未添加简介,用户可以在主页添加简介',
        progress:60,
      }],
    currentUser:{
        name:'未知',
        user_name:'未知',
        pwd:'',
        state:'未登录',
        sex:'未知',
        age:'未知',
        city:'未知',
        work:'未知',
        detail:'未添加简介,用户可以在主页添加简介',
        progress:1,
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
        },
        {
            title:'我是主题5',
            content:'我是内容5，上的飞机撒旦立刻反击考虑撒地方即可了撒旦经理反馈吉萨独立开发就是打开垃圾' +
                '啊撒旦看风景拉克丝JFK拉萨的就离开房间撒旦解放拉萨扩大 啊',
            creator:'用户3',
            time:'2021/07/23',
            up:321,
            click:'8.4w',
            id:3,
            down:5,
        },
        {
            title:'我是主题6',
            content:'我是内容6，上的飞机撒旦立刻反击考虑撒地方即可了撒旦经理反馈吉萨独立开发就是打开垃圾' +
                '啊撒旦看风景拉克丝JFK拉萨的就离开房间撒旦解放拉萨扩大 啊',
            creator:'用户3',
            time:'2021/07/23',
            up:321,
            click:'8.4w',
            id:3,
            down:5,
        },

    ],
    currentMsgId:6,
    talkMsg:[
        {
            id:1,
            user:'用户1',
            to:'',
            text:'不错，真不错,ajdfklasdjf的方式就是的发生第撒旦反抗拉萨酱豆腐绿卡' +
                '首都卡拉飞机拉萨扩大解放立刻撒旦解放' +
                '阿斯顿发射点撒旦解放昆仑山搭街坊卡拉吉萨大三方',
            date:'2021/5/2',
            up:23,
            down:2,
        },
        {
            id:2,
            user:'用户2',
            to:'',
            text:'adsaf，d,ajdfklasdjf的方式就是的发生第三方',
            date:'2021/3/12',
            up:123,
            down:12,
        },
        {
            id:3,
            user:'用户3',
            to:'',
            text:'洒洒水，真不错,ajdfklasdjf的方式就是的发生第三方',
            date:'2020/6/21',
            up:43,
            down:3,
        },
        {
            id:4,
            user:'用户4',
            to:'',
            text:'灌灌灌灌，真不错,ajdfklasdjf的方式就是的发生第三方',
            date:'2018/1/5',
            up:55,
            down:1,
        },
        {
            id:5,
            user:'用户5',
            to:'用户3',
            text:'的实力咖啡碱阿斯利康地方',
            date:'2021/1/1',
            up:12,
            down:1,
        }
    ],
    lists:[
        {
            id:1,
            chapter:'第一章',
            name:'撒地方撒旦飞洒地方',
            num:12,
            state:'未完成'
        },
        {
            id:2,
            chapter:'第二章',
            name:'撒地方撒旦飞洒地方',
            num:5,
            state:'未完成'
        },
        {
            id:3,
            chapter:'第三章',
            name:'撒地方撒旦飞洒地方',
            num:8,
            state:'未完成'
        },
        {
            id:4,
            chapter:'第四章',
            name:'撒地方撒旦飞洒地方',
            num:23,
            state:'未完成'
        },
        {
            id:5,
            chapter:'第五章',
            name:'撒地方撒旦飞洒地方',
            num:23,
            state:'未完成'
        },
        {
            id:6,
            chapter:'第六章',
            name:'撒地方撒旦飞洒地方',
            num:23,
            state:'未完成'
        },
        {
            id:7,
            chapter:'第七章',
            name:'撒地方撒旦飞洒地方',
            num:23,
            state:'未完成'
        },
    ],
    tests:[
        {
            id:1,
            chapter:1,
            type:'simple',
            title:'啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山，请选择正确的答案()',
            finished:false,

            optionA:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateA:false,

            optionB:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateB:false,

            optionC:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateC:false,

            optionD:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateD:false,
        },
        {
            id:2,
            chapter:1,
            type:'simple',
            title:'啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山，请选择正确的答案()',
            finished:false,

            optionA:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateA:false,

            optionB:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateB:false,

            optionC:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateC:false,

            optionD:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateD:false,
        },
        {
            id:3,
            chapter:1,
            type:'multiple',
            title:'啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山，请选择正确的答案()',
            finished:false,

            optionA:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateA:false,

            optionB:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateB:false,

            optionC:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateC:false,

            optionD:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateD:false,
        },
        {
            id:4,
            chapter:1,
            type:'multiple',
            title:'啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山，请选择正确的答案()',
            finished:false,

            optionA:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateA:false,

            optionB:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateB:false,

            optionC:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateC:false,

            optionD:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
            stateD:false,
        }
    ],
    tests1:[],
    zhongjie:{
        learn:0,
        ppt:0,
        test:0,
        talk:0,
        rate:78.6
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