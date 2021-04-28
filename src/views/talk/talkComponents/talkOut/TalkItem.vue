<template>
  <div class="talkOut">
    <div class="talk-content">
      <h3>主题：</h3>
      <input type="text" id="talk-title" placeholder="请输入主题" value="">
      <h3 id="des">描述：</h3>
      <textarea name="talk-des" id="talk-des" cols="30" rows="10"
                placeholder="请输入描述"></textarea>
    </div>
    <div class="talk-button">
      <slot name="talk-menu"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TalkItem",
  methods:{

  }
}
</script>

<style scoped>
.talkOut{
  width:1000px;
  height:900px;
  padding:100px 230px 0 180px;
}
.talk-content{
  width:100%;
  height:50%;
}
.talk-content h3{
  width:100px;
  display: inline;
}
.talk-content #des{
  position: relative;
  top:-274px;
}

.talk-content #talk-title {
  width:520px;
  height:50px;
  font-size:20px;
  padding:5px;
  margin-bottom: 20px;
  border-radius: 5px;
  outline: none;
}
.talk-content #talk-des{
  width:520px;
  height:300px;
  font-size: 18px;
  line-height: 30px;
  padding:5px;
  border-radius: 5px;
  resize:none;
  outline: none;
}
.talk-button{

}


</style>