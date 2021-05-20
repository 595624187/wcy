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
  padding-left:15px;
}
.ppt-con li{
  list-style: none;
  display: inline-flex;
  font-size: 22px;
  padding: 5px;
  width:20%;
}
.ppt-con #zhuti{
  width:40%;
}
.ppt-content-item ul:hover{
  background: rgba(75, 147, 224, 0.34);
  cursor: pointer;
}


.activeStyle{
  background: rgba(169, 222, 215, 0.54);
}
</style>