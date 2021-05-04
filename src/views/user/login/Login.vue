<template>
  <div class="login">
    <div class="input-wrap" id="top-wrap">
      <h2 style="color:black">欢迎登录</h2>
    </div>
    <div class="input-wrap">
      <input type="text" v-model="name" placeholder="用户名">
      <span></span>
    </div>
    <div class="input-wrap">
      <input type="password" v-model="pwd" placeholder="密码">
      <span></span>
    </div>
    <div class="input-wrap">
      <button @click="btnLogin">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      name:'',
      pwd:'',
    }
  },
  methods:{
    btnLogin(){
      this.$store.state.user.name=this.name
      this.$store.state.user.pwd=this.pwd
      this.$store.state.user.state='退出'
      this.$router.replace('/home')
    }
  }
}
</script>

<style scoped>
.login{
  position: relative;
  left:250px;
  top:50px;
  width:500px;
  height:400px;
  background-image:url("../../../assets/img/login.jpg");
  display:flex;
  flex-direction: column;
  align-items: center;
}
.input-wrap{
  padding:10px;
}
.login input{
  width: 300px;
  height:50px;
  border-radius: 10px;
  outline: none;
  padding-left:20px;
  font-size: 18px;
}
.login button{
  width:300px;
  height:50px;
  border-radius: 10px;
  background: rgb(40, 110, 239);
  color:whitesmoke;
  font-weight: bolder;
  font-size: 18px;

}
#top-wrap{
  padding-top:80px;
}
</style>