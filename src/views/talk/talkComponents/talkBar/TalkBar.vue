<template>
<div class="talkBar">
  <div class="talkTitle">
    <slot name="talkTitle"></slot>
  </div>
  <div class="talkText">
    <div class="talkHead">
      <ul>
        <li id="zhuti">主题</li>
        <li>创建人</li>
        <li>时间</li>
        <li>点赞量</li>
        <li>点击量</li>
      </ul>
    </div>
    <div class="talkBody">
      <talk-bar-item  v-for="theme in themes"  :theme="theme" :id="theme.id"></talk-bar-item>
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
  props:{
    themes:{
      type:Array,
      default:'',
    }
  },
  data(){
    return{

    }
  },

}
</script>

<style scoped>
.talkBar{
  width:1450px;
  height:350px;
  background: rgba(135, 206, 235, 0.27);
  border-radius: 8px;
  margin:35px 0 0 25px;
  font-size:20px;
  font-family: 微软雅黑;
}

.talkHead{
}
.talkHead ul{
  width: 100%;
  display:flex;
  height:40px;
  list-style: none;
  text-align: left;
  font-size: 23px;
  font-weight: bold;
  font-family: 华文中宋;
  background: #339981;
  color:white;
  line-height: 40px;
}
.talkHead li{
  width: 20%;
  text-align: left;
}
.talkHead #zhuti{
  width: 50%;
  padding-left:25px;
}
.talkBody{
  padding-top:5px;
  height:200px;
  overflow-y:scroll;
}
.talkTitle{
  display: flex;
  justify-content: center;
  padding-top:18px;
  padding-bottom: 30px;

}

.talkText{
  height:58%;
}
.talkBtn{
  position: relative;
  left:90%;
  top:-8px;
  width:200px;
}

</style>