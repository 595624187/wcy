<template>
  <div class="ppt-menu">
    <div class="ppt-dir">
      <button>←</button>
      <button>→</button>
      <button>刷新</button>
    </div>
    <div class="ppt-download">
      <input type="file" class="chose-file upload" @click="uploadFile">
      <button >上传</button>
      <button class="download" @click="btnDownload">下载</button>
      <button id="p-more">新建文件夹</button>
      <button>移动</button>
      <button class="delete">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PptMenu",
  methods:{
    uploadFile(even){
      console.log(even);
    },
    btnDownload(){

    }
  }
}
</script>

<style scoped>
.ppt-menu{
  width:1000px;
  height:100px;
  display: flex;
}
.ppt-menu *{
  align-self: center;
}
#p-more{
  width: 100px;
}
.ppt-menu button{
  width:80px;
  height:50px;
  margin: 10px;
  font-size: 18px;
  background: darkcyan;
  color:white;
  font-weight: bolder;
  outline: none;
  border-radius: 6px;
}
.ppt-dir{
  height:70px;
}
.ppt-download{
  margin-left:100px;
  height:70px;
}
.chose-file{
  width:80px;
  height:50px;
  position: relative;
  top: -13px;
  left: 90px;
  z-index: 1;
  opacity: 0;
}
::-webkit-input-placeholder{
  width: 20px;
  height:20px;
}
.upload{
  width:80px;
  height:50px;
  background: darkcyan;
  color:white;
}

</style>