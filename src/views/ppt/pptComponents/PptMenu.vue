<template>
  <div class="ppt-menu">
    <div class="ppt-dir">
      <button @click="pptClass">教学课件</button>
      <button @click="pptTeacher">课堂分享</button>
    </div>
    <div>
      <h2 style="padding-left:700px;font-size:28px;font-family: 微软雅黑">课件下载</h2>
    </div>
    <div class="ppt-download">
      <div class="upload-con"><upload-file></upload-file></div>
      <button class="download" @click="btnDownload">下载</button>
      <button class="delete" @click="delFile">删除</button>
    </div>
  </div>
</template>

<script>
import UploadFile from "@/views/ppt/pptUpload/UploadFile";
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
    },
    pptClass(){
      this.$emit('pptClass')
    },
    pptTeacher(){
      this.$emit('pptTeacher')
    }
  }
}
</script>

<style scoped>
.ppt-menu{
  width:1450px;
  height:70px;
}
.ppt-menu *{
  align-self: center;
}


.ppt-dir{
  height:70px;
  float:left;
}
.ppt-download{
  position: relative;
  top:-30px;
  float:right;
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