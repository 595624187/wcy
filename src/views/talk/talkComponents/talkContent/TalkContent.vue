<template>
  <div class="talk-com">
    <div class="talk-add" :class="{hide:!this.isHidden}">
        <textarea v-model="notedata"></textarea>
        <button @click="addCom" >发布</button>
    </div>
    <div class="talk-context">
      <div class="talk-content-item" v-for="(talk,index) in talkMsg">
          <talk-content-item :talkMsg="talkMsg[index]"
                             @addRecom="addCom"
                             @addReply="addRep"

          ></talk-content-item>
      </div>
    </div>
    <div class="talk-replay" :class="{hide:!this.isHidden1}">
      <textarea cols="55" rows="5" v-model="replaydata"></textarea>
      <button @click="subRep">回复</button>
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
      talkMsg:'',
      notedata:null,
      replaydata:null,
      id:'',
      isHidden1:'',
    }
  },
  created(){
    this.talkMsg=this.$store.state.talkMsg
  },
  props:{
    isHidden:{
      type:Boolean,
      default:''
    },

  },
  methods: {
    getDate(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      var minute = date.getMinutes();
      minute = minute < 10 ? ('0' + minute) : minute;
      var second = date.getSeconds();
      second = second < 10 ? ('0' + second) : second;
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    },
    addCom() {
      if (this.notedata) {
        let com = {}
        com.id = this.$store.state.currentMsgId++
        com.user = this.$store.state.currentUser.user_name
        com.text = this.notedata
        com.date = this.getDate(new Date())
        com.up = 0
        com.down = 0
        this.talkMsg.unshift(com)
        this.notedata = ''
      }

    },
    addRep(id) {
      if (this.isHidden1) {
        this.id = ''
        this.isHidden1 = false;
      } else {
        this.id = id
        this.isHidden1 = true;
      }
    },
    subRep() {
      if (this.replaydata) {
        let msg = ''
        for (let temp of this.$store.state.talkMsg) {
          if (temp.id === this.id) {
            msg = temp
          }
        }
        let index = this.$store.state.talkMsg.indexOf(msg)
        let com = {}
        com.id = this.$store.state.currentMsgId++
        com.user = this.$store.state.currentUser.user_name
        com.text = this.replaydata
        com.date = this.getDate(new Date())
        com.to = msg.user
        com.up = 0
        com.down = 0
        this.talkMsg.splice(index + 1, 0, com)
        this.isHidden1 = false
        this.replaydata = ''
        this.isHidden = false
      }
    }
  }
}
</script>

<style scoped>
.talk-com{
  width: 744px;
  height:600px;
  border:2px #4ac64a solid;
  border-radius: 5px;
  padding: 10px;
  position: relative;
  top: 74px;
  right: 280px;
  background: white;
}
.talk-context{
  overflow-y: scroll;
  height:450px;

}
.talk-add{
  height:65px;
  padding-bottom: 5px;
}
.talk-add textarea{
  outline: none;
  resize:none;
  height:60px;
  width:630px;
  padding-top:5px;
  padding-left:5px;
  font-family: 微软雅黑;
}
.talk-add button{
  position: relative;
  top:-20px;
  width:60px;
  height:40px;
  font-size:16px;
}
.hide{
  visibility: hidden;
}
.talk-replay{
  height: 65px;
}
.talk-replay textarea{
  width:630px;
  height:64px;
}
.talk-replay button{
  position: relative;
  top:-18px;
  width:60px;
  height:40px;
}
</style>