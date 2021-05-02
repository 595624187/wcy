<template>
  <div class="talkOut">
    <div class="talk-content">
      <h3>主题：</h3>
      <input type="text"
             id="talk-title"
             placeholder="请输入主题"
             :value="themes[currentId].title"
             :readonly="isReadonly">
      <h3 id="des">描述：</h3>
      <textarea name="talk-des"
                id="talk-des"
                cols="30"
                rows="10"
                placeholder="请输入描述"
                :readonly="isReadonly">{{themes[currentId].content}}</textarea>
    </div>
    <div class="talk-button">
      <slot name="talk-menu"></slot>
    </div>
    <div>
      <slot name="talk-content"></slot>
    </div>
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
  border:2px rgba(201, 80, 80, 0.76) solid;
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
  border:2px #67b664 solid;
}
.talk-button{

}


</style>