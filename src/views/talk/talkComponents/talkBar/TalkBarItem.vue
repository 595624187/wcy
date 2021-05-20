<template>
  <div class="talkBarItem">
    <ul @click="talkChose(id)">
      <li id="zhuti">{{theme.title}}</li>
      <li>{{theme.creator}}</li>
      <li>{{theme.time}}</li>
      <li>{{theme.up}}</li>
      <li>{{theme.click}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TalkBarItem",
  props:{
    theme:{
      type:Object,
      default:'',
    },
    id:{
      type:Number,
      default:'',
    }
  },
  methods:{
    talkChose(id){
      this.$router.push({path:'/talkIndex',query:{id:id,isReadonly:true}})
    }
  }
}
</script>

<style scoped>
.talkBarItem{
}
.talkBarItem ul{
  width: 100%;
  display:flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  padding: 4px;
  font-size: 22px;
}
.talkBarItem li{
  width: 20%;
}
.talkBarItem #zhuti{
  width: 50%;
  padding-left:25px;
}
.talkBarItem li{
  width: 20%;
}
.talkBarItem ul:hover{
  background: rgba(75, 147, 224, 0.34);
  cursor:pointer;
}
</style>