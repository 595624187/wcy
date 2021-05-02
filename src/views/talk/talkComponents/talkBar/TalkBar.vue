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
      themes:this.$store.state.themes
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