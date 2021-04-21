<template>
  <div class="ppt-menu">
    <div class="ppt-dir">
      <button>←</button>
      <button>→</button>
      <button>刷新</button>
    </div>
    <div class="ppt-download">
      <div class="upload-con"><upload-file></upload-file></div>
      <button class="download" @click="btnDownload">下载</button>
      <button id="p-more">新建文件夹</button>
      <button>移动</button>
      <button class="delete" @click="delFile">删除</button>
    </div>
  </div>
</template>

<script>
import UploadFile from "@/components/common/UploadFile";
export default {
  name: "PptMenu",
  components:{
    UploadFile
  },
  methods:{
    uploadChange(even){
      console.log(even.target.value);
      console.log(even)
    },
    btnDownload(){
      let file = this.$store.state.files
      for(let i=0;i<file.length;i++){
        if(file[i].name===this.$store.state.currentFile){
          this.$store.state.files[i].num++
        }
      }
    },
    delFile(){
      let file = this.$store.state.files
      for(let i=0;i<file.length;i++){
        if(file[i].name===this.$store.state.currentFile){
          this.$store.state.files.splice(i,1)
        }
      }
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

::-webkit-input-placeholder{
  width: 20px;
  height:20px;
}
.upload-con{
  display: inline-flex;
  width:80px;
  height:50px;
}

</style>