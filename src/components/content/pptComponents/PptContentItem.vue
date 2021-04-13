<template>
  <div class="ppt-content-item">
    <ul class="ppt-con">
      <li>{{itemfiles.name}}</li>
      <li>{{itemfiles.user}}</li>
      <li>{{itemfiles.time}}</li>
      <li>{{itemfiles.num}}</li>
      <li>{{itemfiles.num}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PptContentItem",
  props: {
    itemfiles:{
      type:Array,
      default(){
        return{}
      }
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
  padding: 10px;
  font-weight: bolder;
}
.ppt-content-item ul:hover{
  background: rgba(215, 231, 229, 0.54);
}

.ppt-con li:first-child{
  width: 320px;
}
</style>