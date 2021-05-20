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
  background: rgba(135, 206, 235, 0.27);
}
.ppt-head{
  height: 40px;
  width:100%;
  background: #339981;
  color:snow;
  font-weight: bold;
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
  width: 20%;
  display:inline-block;
  padding-left:20px;
}

.ppt-head ul{
  list-style: none;
  line-height: 15px;
}
.ppt-head #file-name{
  width:40%;

}
#last{
  position: relative;
  top:-15px;
  left:1140px;
}


</style>