<template>
  <div class="ppt-content">
    <div class="ppt-head">
      <ul>
        <li id="file-name">文件名</li>
        <li>上传者</li>
        <li>上传时间</li>
        <li>下载量</li>
      </ul>
    </div>
    <div class="ppt-body">
      <ppt-content-item v-for="item in this.$store.state.files"
                        :itemfiles="item"
      ></ppt-content-item>
    </div>
  </div>
</template>

<script>
import PptContentItem from "@/components/content/pptComponents/PptContentItem";
export default {
  name: "PptContent",
  data(){
    return{
    }
  },
  components:{
    PptContentItem
  }
}
</script>

<style scoped>
.ppt-content{
  width:980px;
  height: 780px;
  margin:10px;
  border-radius: 5px;
  border:2px green solid;
}
.ppt-head{
  height: 50px;
  width:100%;
  background: #dfebf9;
  color: rgba(0, 0, 0, 0.93);
  font-weight: bolder;
  padding-top:10px;
}
.ppt-body{
  height:93%;
  overflow-y:scroll;
}
::-webkit-scrollbar{
  display:none;
}
.ppt-head ul>li{
  list-style: none;
  display: inline-flex;
  width: 160px;
  font-size: 20px;
  padding: 5px;
}
.ppt-head ul>li:first-child{
  width: 450px;
}


</style>