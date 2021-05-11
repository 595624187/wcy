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
  font-size: 24px;
  position: relative;
  width:1000px;
  background: rgba(102, 102, 102, 0.64);
  color:white;
  top:52px;
  padding:5px 0 5px 3px;
}
.learn-video video{
  width:1000px;
}

.video-button{
  width: 1000px;
  display: inline-block;
}


</style>