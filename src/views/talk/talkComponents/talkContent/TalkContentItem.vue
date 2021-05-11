<template>
  <div class="talk-content-item">
     <div class="talk-up">
       <span class="user">{{talkMsg.user}}</span>
       <span id="to" :class="{hide:!talkMsg.to}"><span style="padding-right:30px;">回复:</span> {{talkMsg.to}}</span>
       <span class="date"> {{talkMsg.date}}</span>
       <span @click="addReply" @keyup.enter="addReply" class="replay">回复</span>
       <span class="right" @click="talkMsg.down++">👎{{talkMsg.down}}</span>
       <span class="right" @click="talkMsg.up++">👍{{talkMsg.up}}</span>
     </div>
     <div class="talk-middle">
       <p>{{talkMsg.text}}</p>
     </div>

  </div>
</template>

<script>
export default {
  name: "TalkContentItem",
  props:{
    talkMsg:{
      type:Object,
      default:'',
    }
  },
  data(){
    return{
    }
  },
  methods:{
    addReply(){
      this.$emit('addReply',this.talkMsg.id)
    }
  },
  created() {

  },

}
</script>

<style scoped>
.talk-content-item{
  width:100%;
  padding:5px 5px 10px 5px;
  border:2px wheat solid;
  border-radius: 5px;
  margin-bottom: 3px;
  font-family: 微软雅黑;
  color:black;
}
.talk-content-item *{
  padding-top:3px;
  padding-bottom: 3px;
}
.talk-up{
  height:20px;
  color:blue;
  font-size: 15px;
  width:700px;
}
.talk-up .right{
  width:50px;
  color:black;
  float:right;
}

.talk-up .right:hover{
  color:blue;
  cursor: pointer;
}


.talk-up .user{
  display: inline-block;
  width:15%;
}
.talk-up #to{
  display: inline-block;
  width:25%;
  color:red;
}
.talk-up .date{
  display: inline-block;
  width:25%;
}

.talk-up .replay{
  text-decoration: underline;
  cursor: pointer;
  width:20%;
}
.hide{
  visibility: hidden;
}
</style>