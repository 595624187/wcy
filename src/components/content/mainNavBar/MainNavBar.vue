<template>
  <main-nav>
    <div slot="user-img" class="user-img">
      <img src="~assets/img/touxiang.png" alt="">
    </div>
    <div slot="user-name" class="user-name">
      <span>{{this.$store.state.user.name}}</span>
    </div>
    <div slot="user-state" class="user-state">
      <span @click="login">{{this.$store.state.userState}}</span>
    </div>
  </main-nav>
</template>

<script>
import MainNav from "@/components/common/mainNav/MainNav";
import Login from "@/components/common/login/Login";
export default {
  name: "MainNavBar",
  components:{
    MainNav,
    Login
  },
  data(){
    return{
    }
  },
  methods:{
    login(){
      if(this.$store.state.userState=='登录'){
        this.$router.replace('/login')
      }else{
        this.$store.state.user.name='未登录'
        this.$store.state.user.pwd=''
        this.$store.state.userState='登录'
      }
    }
  },

}
</script>

<style scoped>
.user-img{
  position: relative;
  left:70%;
  top:10px;
}
.user-img img{
  width:80px;
  height:80px;
  border-radius: 40px;
}
.user-name{
  position: relative;
  left:80%;
  top:-58px;
  font-family: 微软雅黑;
  font-size: 20px;
  font-weight: bold;
  height: 25px;
}
.user-state{
  position: relative;
  left:80%;
  top:-48px;
  text-decoration: underline;
  font-family: 华文中宋;
  height: 25px;
}
.user-state span:hover{
  cursor:pointer;
  color:blue;
}
</style>