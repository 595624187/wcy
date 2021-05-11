<template>
  <div class="ppt-content-item">
    <ul class="ppt-con" @click="ulClick(itemfiles.name)"
    :class="{activeStyle:itemfiles.name === this.currentFile}">
      <li id="zhuti">{{itemfiles.name}}</li>
      <li>{{itemfiles.user}}</li>
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
.ppt-con{
}
.ppt-con li{
  list-style: none;
  display: inline-flex;
  font-size: 20px;
  padding: 5px;
  font-weight: bolder;
  width:20%;
}
.ppt-con #zhuti{
  width:40%;
}
.ppt-content-item ul:hover{
  background: rgba(169, 222, 215, 0.54);
  cursor: pointer;
}


.activeStyle{
  background: rgba(169, 222, 215, 0.54);
}
</style>