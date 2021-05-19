<template>
  <div class="talk-out">
    <div class="talk-content">
      <h3>主题：</h3>
      <input type="text"
             id="talk-title"
             placeholder="请输入主题"
             v-model="title"
             >
      <h3 id="des">描述：</h3>
      <textarea
                id="talk-des"
                cols="30"
                rows="10"
                placeholder="请输入描述"
                v-model="text"
                ></textarea>
    </div>
      <div slot="talk-menu" class="talk-menu">
        <ul>
          <li><button @click="liBack">返回</button></li>
          <li><button @click="talkUp">发布</button></li>
        </ul>
      </div>

  </div>
</template>

<script>
export default {
  name: "TalkOut",
  components:{
  },
  data(){
    return{
      title:null,
      text:null,
    }
  },
  created() {

  },
  methods:{
    getDate(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      h=h < 10 ? ('0' + h) : h;
      var minute = date.getMinutes();
      minute = minute < 10 ? ('0' + minute) : minute;
      var second=date.getSeconds();
      second=second < 10 ? ('0' + second) : second;
      return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
    },
    liBack(){
      this.$router.replace('/talk')
    },
    talkUp(){
      if(this.title!==null&&this.text!==null){
        let theme = {
          title:this.title,
          content:this.text,
          creator:'用户000',
          time:this.getDate(new Date()),
          up:0,
          down:0,
          click:0,
          id:4
        }
        this.$store.state.themes.unshift(theme)
        this.$router.replace('/talk')
        this.$store.state.zhongjie.talk+=3
        this.$myMsg.notify({
          content:'发布成功！',
          type:'success',
        })
      }else{
        this.$myMsg.notify({
          content:'标题或内容为空！',
          type:'error',
        })
      }

    }
  }
}
</script>

<style scoped>
.talk-out{
  width:1500px;
  height:820px;
  background: white;
  box-shadow:2px 2px 10px #909090;
  border-radius: 8px;
  margin:30px 0 0 30px;
  padding:100px 0 0 300px;
}
.talk-out ul{
  list-style: none;
  display: flex;
}
.talk-out li{
  flex:1;
  text-align: center;
}

.talk-content{
  width:600px;
  height:500px;

}
.talk-content h3{
  width:100px;
  display: inline;
}


.talk-content #talk-title {
  width:530px;
  height:50px;
  font-size:20px;
  padding:5px;
  margin-bottom: 20px;
  border-radius: 5px;
  outline: none;
  border:2px rgba(201, 80, 80, 0.76) solid;
  font-family: 微软雅黑;
}
.talk-content #talk-des{
  width:530px;
  height:380px;
  font-size: 18px;
  line-height: 30px;
  padding:5px;
  border-radius: 5px;
  resize:none;
  outline: none;
  border:2px #67b664 solid;
  font-family: 微软雅黑;
}
.talk-content #des{
  position: relative;
  top:-350px;
}
.talk-menu{
  display: flex;
  float: right;
  width:900px;
}
</style>