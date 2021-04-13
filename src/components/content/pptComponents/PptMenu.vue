<template>
  <div class="ppt-menu">
    <div class="ppt-dir">
      <button>←</button>
      <button>→</button>
      <button>刷新</button>
    </div>
    <div class="ppt-download">
      <button>上传</button>
      <button>下载</button>
      <button id="p-more">新建文件夹</button>
      <button>移动</button>
      <button>删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PptMenu"
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
  margin-left:175px;
  height:70px;
}
</style>