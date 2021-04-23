<template>
  <div class="talkBarItem">
    <ul>
      <li>{{theme.theme}}</li>
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