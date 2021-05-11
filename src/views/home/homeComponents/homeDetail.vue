<template>
  <div class="homeDetail">
    <div id="homeLeft">
      <img src="~assets/img/touxiang.png" alt="">
      <h2>{{user.name }}</h2>
    </div>
    <div id="homeRight">
      <div class="h-detail">
        <h2>{{ user.detail }}</h2>
      </div>
      <dProgress :percentage="user.progress"  status="success" :text-inside="true"  :stroke-height="20"/>
      <span>学习进度</span>
    </div>
  </div>
</template>

<script>
import dProgress from "@/components/common/progress/dProgress";
export default {
  name: "homeDetail",
  components:{
    dProgress
  },
  data(){
    return{
      user:''
    }
  },
  created() {
    this.user=this.$store.state.users[0]
  },


}
</script>

<style scoped>
.homeDetail{
  width:888px;
  height: 185px;
  margin-left:50px;
  border-radius:10px;
  background: #d1efd5;
  margin-top:20px;
}
#homeLeft{
  display:inline-block;
  left:10px;
}
#homeLeft img{
  width: 130px;
  height: 130px;
  border-radius: 65px;
  margin:15px 10px 0px 30px;
}
#homeLeft h2{
  margin-left:60px;
}
#homeRight{
  display: inline-block;
  position: relative;
  margin-left:20px;
  top:20px;
}
#homeRight span{
  position: relative;
  top: -28px;
  left: 520px;
  font-weight: bold;
}
.h-detail{
  width:555px;
  height:80px;
  margin-left:15px;
}
</style>