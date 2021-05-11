<template>
  <div class="upload-wrap anticon" nv-file-drop="" uploader="uploader">
    <input type="file"
           ref="clearFile"
           @change="getFile"
           multiple
           class="file-ele"
           accept=".docx,.doc,.pdf,.jpg,.png"
           nv-file-select uploader="uploader">
    <div class="file-open"><em class="icon icon-upload"></em>&nbsp;upload</div>
  </div>
</template>

<script>
export default {
  name: "UploadFile",
  components: {},
  methods: {
    dateToString(date) {
      let year = date.getFullYear();
      let month = (date.getMonth() + 1).toString();
      let day = (date.getDate()).toString();
      if (month.length == 1) {
        month = "0" + month;
      }
      if (day.length == 1) {
        day = "0" + day;
      }
      let dateTime = year + "-" + month + "-" + day;
      return dateTime
    },
    getFile(event) {
      let files = event.target.files
      console.log(files)
      for (let i=0;i<files.length;i++) {
        this.$store.state.files.push({
          name: files[i].name,
          user: this.$store.state.currentUser.user_name,
          time: this.dateToString(new Date()),
          num: 321,
          url: 'www.abc.com'
        })
      }

    }
  },
  computed:{

  }
}
</script>

<style scoped>

.upload-wrap{
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 3px;
}
.upload-wrap .file-ele{
  position: absolute;
  top:0;
  right:0;
  opacity: 0;
  height: 100%;
  width: 100%;

}

.upload-wrap{
  width:80px;
  height:50px;
  line-height:50px;
  text-align: center;
  color:white;
  background: #66cda9;
  font-weight: bolder;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow:2px 2px 10px #909090;


  z-index: 8;
}
.upload-wrap:hover{
  background: rgba(63, 139, 112, 0.84);
}
.file-ele:hover{
  cursor: pointer;
}
</style>