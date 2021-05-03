<template>
  <div class="talk-content-item">
     <div class="talk-up">
       <span>{{talkMsg.user}}</span>
       <span> {{talkMsg.date}}</span>
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
  methods:{

  }
}
</script>

<style scoped>
.talk-content-item{
  width:100%;
  padding:5px 5px 10px 5px;
  border:2px wheat solid;
  border-radius: 5px;
}
.talk-content-item *{
  padding-top:3px;
  padding-bottom: 3px;
}
.talk-up{
  height:20px;
  color:blue;
  font-size: 15px;
}
.talk-up .right{
  color:black;
  float:right;
}
.talk-up span:nth-child(2){
  padding-left: 50px;
}
.talk-middle{

}


</style>