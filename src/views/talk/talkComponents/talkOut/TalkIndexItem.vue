<template>
  <div class="talkOut">
    <div class="talk-con">
      <h3>主题：</h3>
      <input type="text"
             id="talk-title"
             placeholder="请输入主题"
             :value="themes[currentId].title"
             :readonly="isReadonly">
      <h3 id="des">描述：</h3>
      <textarea
                id="talk-des"
                cols="30"
                rows="10"
                placeholder="请输入描述"
                :readonly="isReadonly">{{themes[currentId].content}}</textarea>
    </div>
    <div class="talk-button">
      <slot name="talk-menu"></slot>
    </div>
    <slot name="talk-content"></slot>
  </div>
</template>

<script>
export default {
  name: "TalkItem",
  data(){
    return{
      title:'',
      content:'',
      isReadonly:false,
      currentId:0,
      themes:'',
    }
  },
  methods:{

  },
  created(){
    this.isReadonly=this.$route.query.isReadonly
    this.currentId=this.$route.query.id
    this.themes=this.$store.state.themes
  }
}
</script>

<style scoped>
.talkOut{
  width: 1700px;
  height:830px;
  display: flex;
}
.talk-con{
  width:40%;
  height:600px;
  padding:50px 0 20px 80px;
}
.talk-con h3{
  width:100px;
  display: inline;
  position: relative;
  top: 35px;
  left: -55px;
  font-family: 微软雅黑;
  font-size: 25px;
}


.talk-con #talk-title {
  width:600px;
  height:50px;
  font-size:20px;
  padding:5px;
  margin-left:10px;
  margin-bottom: 20px;
  border-radius: 5px;
  outline: none;
  border:2px rgba(201, 80, 80, 0.76) solid;
}
.talk-con #talk-des{
  width:600px;
  height:300px;
  font-size: 18px;
  line-height: 30px;
  padding:5px;
  margin-left:10px;
  border-radius: 5px;
  resize:none;
  outline: none;
  border:2px #67b664 solid;
}
.talk-button{
  display:inline-block;
  padding-top:20px;
  height:300px;
  width: 40%;
  position: relative;
  right: 300px;
  top: 485px;
}

</style>