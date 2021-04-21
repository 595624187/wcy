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
      var year = date.getFullYear();
      var month = (date.getMonth() + 1).toString();
      var day = (date.getDate()).toString();
      if (month.length == 1) {
        month = "0" + month;
      }
      if (day.length == 1) {
        day = "0" + day;
      }
      var dateTime = year + "-" + month + "-" + day;
      return dateTime
    },
    getFile(event) {
      let files = event.target.files
      console.log(files)
      for (let i=0;i<files.length;i++) {
        this.$store.state.files.push({
          name: files[i].name,
          user: 'new',
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
  border:1px solid #2d78f4;
  border-radius: 3px;
}
.upload-wrap .file-ele{
  position: absolute;
  top:0;
  right:0;
  opacity: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.upload-wrap .file-open{
  width:80px;
  height:50px;
  line-height:50px;
  text-align: center;
  background: darkcyan;
  color:white;
  font-weight: bolder;
}
</style>