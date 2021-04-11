<template>
  <div class="tab-bar-item" @click="itemClick">
    <div><slot name="item-icon"></slot></div>
    <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
  },
  methods:{
    itemClick(){
      console.log(this.path)
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  display:flex;
  width:200px;
  height:100px;
  font-size: 21px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}

</style>