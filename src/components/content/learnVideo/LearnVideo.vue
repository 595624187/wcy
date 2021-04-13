<template>
  <div class="learn-video">
    <div class="learn-title"><slot name="learn-title"></slot></div>
    <slot name="learn-body"></slot>
    <div class="video-button"><slot name="video-button"></slot></div>
  </div>
</template>

<script>
export default {
  name: "LearnVideo"
}
</script>

<style scoped>
.learn-title{
  font-size: 24px;
  position: absolute;
  width:1000px;
  background: rgba(102, 102, 102, 0.64);
  color:white;
}
.learn-video video{
  width:1000px;
}

.video-button{
  width: 1000px;
  display: inline-block;
}


</style>