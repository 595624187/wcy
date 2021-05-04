<template>
  <div class="ppt-content-item">
    <ul class="ppt-con" @click="ulClick(itemfiles.name)"
    :class="{activeStyle:itemfiles.name === this.currentFile}">
      <li>{{itemfiles.name}}</li>
      <li>{{this.$store.state.user.name}}</li>
      <li>{{itemfiles.time}}</li>
      <li>{{itemfiles.num}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PptContentItem",
  data(){
    return{

    }
  },
  props: {
    itemfiles:{
      type:Object,
      default:null
    },
    activeColor:{
      type:String,
      default:'rgba(215, 231, 229, 0.54)'
    }
  },
  methods:{
    ulClick(name){
      this.$store.state.currentFile=name
    },

  },
  computed:{
    currentFile(){
      return this.$store.state.currentFile
    }
  }
}
</script>

<style scoped>

.ppt-con li{
  list-style: none;
  display: inline-flex;
  width: 160px;
  font-size: 20px;
  padding: 5px;
  font-weight: bolder;
}
.ppt-content-item ul:hover{
  background: rgba(215, 231, 229, 0.54);
  cursor: pointer;
}

.ppt-con li:first-child{
  width: 450px;
}
.activeStyle{
  background: rgba(215, 231, 229, 0.54);
}
</style>