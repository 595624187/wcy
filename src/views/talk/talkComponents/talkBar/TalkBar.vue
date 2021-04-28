<template>
<div class="talkBar">
  <div class="talkTitle">
    <slot name="talkTitle"></slot>
  </div>
  <div class="talkText">
    <div class="talkHead">
      <ul>
        <li>主题</li>
        <li>创建人</li>
        <li>时间</li>
        <li>点赞量</li>
        <li>点击量</li>
      </ul>
    </div>
    <div class="talkBody" v-for="theme in themes" >
      <talk-bar-item :theme="theme" :id="theme.id"></talk-bar-item>
    </div>
  </div>
  <div class="talkBtn">
    <slot name="talkBtn"></slot>
  </div>
</div>
</template>

<script>
import TalkBarItem from "@/views/talk/talkComponents/talkBar/TalkBarItem";
export default {
  name: "TalkBar",
  components:{
    TalkBarItem
  },
  data(){
    return{
      themes:[
        {
          theme:'我是主题1',
          creator:'用户1',
          time:'2021/02/04',
          up:'1.56k',
          click:'2.4w',
          id:0,
        },
        {
          theme:'我是主题1',
          creator:'用户111',
          time:'2021/02/04',
          up:'3.32k',
          click:'2.1w',
          id:1,
        },
        {
          theme:'我是主题2',
          creator:'用户2',
          time:'2021/12/04',
          up:'2.56k',
          click:'4.4w',
          id:2,
        },
        {
          theme:'我是主题3',
          creator:'用户3',
          time:'2021/07/23',
          up:'0.56k',
          click:'8.4w',
          id:3,
        }
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.talkBar{
  width:870px;
  height:350px;
  background: #F0E1E1;
  margin:40px 0 0 65px;
}

.talkTitle{
  display: flex;
  justify-content: center;
  padding-top:18px;
  padding-bottom: 30px;
}
.talkHead ul{
  width: 100%;
  display:flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: 华文中宋;
}
.talkHead li{
  width: 20%;
}
.talkBody{
  padding-top:5px;
}
.talkText{
  height:50%;
}
.talkBtn{
  position: relative;
  left:80%;
}

</style>