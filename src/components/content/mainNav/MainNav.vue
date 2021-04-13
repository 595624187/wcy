<template>
  <div class="main-nav">
    <div><slot name="user-img"></slot></div>
    <div><slot name="user-state"></slot></div>
  </div>
</template>

<script>
export default {
  name: "MainNav"
}
</script>

<style scoped>
.main-nav{
  width: 1000px;
  height:100px;
  background-color: rgba(96, 149, 191, 0.64);
  position: absolute;
  top:0;
  left:200px;
}
</style>