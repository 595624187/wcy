<template>
    <div class="tab-bar-item" @click="itemClick" :class="{active:isActive&&this.path!=''}">
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
  data(){
    return{
  }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
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
.active{
  background: rgba(92, 191, 157, 0.25);
}
</style>