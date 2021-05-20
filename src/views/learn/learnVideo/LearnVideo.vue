<template>
  <div class="learn-video">
      <div class="learn-title"><slot name="learn-title"></slot></div>
      <slot name="learn-body"></slot>
  </div>
</template>

<script>
export default {
  name: "LearnVideo",
  props:{

  },

}
</script>

<style scoped>
.learn-title{
  font-size: 25px;
  position: relative;
  width:1000px;
  background: #339981;
  color:snow;
  padding:5px 0 5px 3px;
  z-index: 2;
  font-family: 微软雅黑;
  font-weight: bolder;
}
.learn-video video{
  width:1000px;
  position: relative;
  top:-69px;
}




</style>