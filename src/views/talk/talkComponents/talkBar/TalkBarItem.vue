<template>
  <div class="talkBarItem">
    <ul @click="talkChose(id)">
      <li>{{theme.title}}</li>
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
  text-align: center;
  font-size: 20px;
  margin:5px 0 5px 0;
}

.talkBarItem li{
  width: 20%;
}
</style>