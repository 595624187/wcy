<template>
<div class="register">
  <div  class="top-wrap">
    <h2 style="color:black">{{ this.msg }}</h2>
  </div>
  <div class="input-wrap">
    <input type="text" v-model="name" placeholder="用户名">
    <input type="password" v-model="pwd" placeholder="密码">
    <input type="text" v-model="email" placeholder="邮箱">
    <div class="input-wrap inputBtn">
      <button @click="register">注册</button>
      <button @click="back">返回</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return{
      name:'',
      pwd:'',
      email:'',
      msg:'注册页面',
    }
  },
  methods:{
    back(){
      this.$router.replace('/login')
    },
    register(){
      if(this.name===''||this.pwd===''||this.email===''){
        this.$myMsg.notify({
          content:'账号或密码为空！',
          type:'warning',
        })
      }else{
          let flag1 = false
          for(let user of this.$store.state.users){
            if(user.name === this.name){
              flag1=true
              break
            }
          }
          if(flag1){
            this.$myMsg.notify({
              content:'用户已存在，请重新输入',
              type:'error',
            })
          }else{
            if(this.name===this.pwd){
              this.$myMsg.notify({
                content:'账号不能与密码相同!',
                type:'warning',
              })
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
              this.$myMsg.notify({
                content:'注册成功！',
                type:'success',
              })
            }
          }
      }
    }
  }
}
</script>

<style scoped>
.register{
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
.register input{
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
.register button{
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
.top-wrap{
  padding-top:30px;
}
</style>