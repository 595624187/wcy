<template>
  <div class="talk-content">
    <div class="talk-add">
        <textarea name="talk" cols="55" rows="5" v-model="notedata"></textarea>
        <button @click="addCom">发布</button>
    </div>
    <div class="talk-content-item" v-for="(talk,index) in talkMsg">
      <talk-content-item :talkMsg="talkMsg[index]"></talk-content-item>
    </div>
  </div>
</template>

<script>
import TalkContentItem from "@/views/talk/talkComponents/talkContent/TalkContentItem";
export default {
  name: "TalkContent",
  components:{
    TalkContentItem
  },
  data(){
    return{
      talkMsg:[
        {
          id:1,
          user:'用户1',
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
          text:'adsaf，d,ajdfklasdjf的方式就是的发生第三方',
          date:'2021/3/12',
          up:123,
          down:12,
        },
        {
          id:3,
          user:'用户3',
          text:'洒洒水，真不错,ajdfklasdjf的方式就是的发生第三方',
          date:'2020/6/21',
          up:43,
          down:3,
        },
        {
          id:4,
          user:'用户4',
          text:'灌灌灌灌，真不错,ajdfklasdjf的方式就是的发生第三方',
          date:'2018/1/5',
          up:55,
          down:1,
        }
      ],
      notedata:null,
    }
  },
  methods:{
    addCom(){
      let com = {}
      com.user='用户000'
      com.text= this.notedata
      com.date = (new Date()).toLocaleDateString()+" "+(new Date()).toLocaleTimeString()
      com.up=0
      com.down=0
      this.talkMsg. unshift(com)
    }
  }
}
</script>

<style scoped>
.talk-content{
  width:600px;
  height:400px;
  border:2px #4ac64a solid;
  border-radius: 5px;
  padding: 10px;
  overflow-y: scroll;
}

.talk-add{
  height:100px;
  padding-bottom: 5px;
}
.talk-add textarea{
  outline: none;
  resize:none;
  height:90px;
  padding-top:5px;
  padding-left:5px;
}
.talk-add button{
  position: relative;
  top:-40px;
  width:60px;
  height:40px;
  font-size:16px;
}
</style>