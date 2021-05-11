<template>
  <div class="ppt-content">
    <div class="ppt-head">
      <ul>
        <li id="file-name">文件名</li>
        <li>上传者</li>
        <li>上传时间</li>
        <li id="last">下载量</li>
      </ul>
    </div>
    <div class="ppt-body">
      <ppt-content-item v-for="item in files"
                        :itemfiles="item"
      ></ppt-content-item>
    </div>
  </div>
</template>

<script>
import PptContentItem from "@/views/ppt/pptComponents/PptContentItem";
export default {
  name: "PptContent",
  data(){
    return{
    }
  },
  props:{
    files:{
      type:Array,
      default:'',
    }
  },
  components:{
    PptContentItem
  }
}
</script>

<style scoped>
.ppt-content{
  width:1450px;
  height: 680px;
  margin:10px;
  border-radius: 5px;
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
.ppt-head li{
  font-size: 20px;
  padding: 5px;
  width: 20%;
  display:inline-block;
}

.ppt-head ul{
  list-style: none;
}
.ppt-head #file-name{
  width:40%;
}
#last{
  position: relative;
  top:-35px;
  left:1140px;
}


</style>