<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  methods:{

  }
}
</script>


<style scoped>
  #tab-bar{
    width:200px;
    height:1000px;
    background-color:#F5F5F7;
  }
  :first-child{
    background-color: #66cda9;
  }
</style>