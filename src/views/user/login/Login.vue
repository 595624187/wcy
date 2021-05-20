<template>
  <div class="login">
    <div  id="top-wrap">
      <h2 style="color:black">{{ this.msg }}</h2>
    </div>
    <div class="input-wrap">
<!--      <form>-->
        <input type="text" v-model="name" placeholder="用户名">
        <input type="password" v-model="pwd" placeholder="密码">
        <div class="input-wrap inputBtn">
          <button @click="btnLogin">登录</button>
          <button @click="register1">注册</button>
        </div>
<!--      </form>-->
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
      users:{},
      msg:'欢迎登陆',
      error:'',
    }
  },
  methods:{
    register1(){
      this.$router.replace('/register')
    },
    btnLogin(){
      if(this.name===''||this.pwd===''){
        this.$myMsg.notify({
          content:'密码或账号为空！',
          type:'warning',
        })
      }else{
        let users = this.$store.state.users
        for(let user of users){
          if(user.name===this.name){
            if(user.pwd === this.pwd){
              this.$store.state.currentUser=user
              this.$store.state.currentUser.state='退出'
              this.$router.replace('/home')
              this.$myMsg.notify({
                content:'登录成功！',
                type:'success',
              })
            }else{
              this.$myMsg.notify({
                content:'密码错误！',
                type:'error',
              })
            }
          }else{
            this.$myMsg.notify({
              content:'账号不存在',
              type:'warning',
            })
          }
        }
      }

    },

  },
  created(){
    this.users=this.$store.state.users
  }
}
</script>

<style scoped>
.login{
  position: relative;
  left: 500px;
  top: 130px;
  width:500px;
  height:420px;
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
  margin:0 0 10px 100px;
  font-size: 18px;
}
.inputBtn input{
  background: rgb(40, 110, 239);
  color:whitesmoke;
  font-family: 微软雅黑;
  font-size: 20px;
  margin-left:10px;
  border:none;
  font-weight: bolder;
}
.inputBtn input:hover{
  cursor: pointer;
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
.inputBtn{
  padding-left:90px;
}
#top-wrap{
  padding-top:80px;
  padding-bottom: 10px;
}
</style>