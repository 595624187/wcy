<template>
  <div class="login">
    <div class="input-wrap" id="top-wrap">
      <h2 style="color:black">{{ this.msg }}</h2>
    </div>
    <div class="input-wrap">
      <form action="http://localhost:9999/login" method="post">
        <input type="text" v-model="name" placeholder="用户名">
        <input type="password" v-model="pwd" placeholder="密码">
        <div class="input-wrap inputBtn">
<!--          <button @click="btnLogin">登录</button>-->
          <input type="submit" @click="btnLogin" value="登录">
          <button @click="register">注册</button>
        </div>
      </form>
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
    btnLogin(){
      if(this.name!==''&&this.pwd!==''){
        let users = this.$store.state.users
        for(let user of users){
          if(user.name===this.name){
            if(user.pwd === this.pwd){
              this.$store.state.currentUser=user
              this.$store.state.currentUser.state='退出'
              this.$router.replace('/home')
            }else{
              thie.error='密码错误！'
            }
          }else{
            this.error='该用户不存在!'
          }
        }
      }else{
        this.error='请输入账号和密码!'
      }

    },
    register(){
      let flag1 = false
      for(let user of this.users){
        if(user.name === this.name){
          flag1=true
          break
        }
      }
      if(flag1){
        this.error='用户已存在，请重新输入'
      }else{
        let newUser = {
          id:1,
          name:this.name,
          pwd:this.pwd,
          user_name:'默认用户名',
          state:'未登录',
          sex:'未知',
          age:'未知',
          city:'未知',
          work:'未知',
          detail:'未添加简介,用户可以在主页添加简介',
          progress:20,
        }
        this.$store.state.users.unshift(newUser)
        this.error='注册成功！'
      }
    }
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
}
</style>