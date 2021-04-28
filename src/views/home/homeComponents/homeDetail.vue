<template>
  <div class="homeDetail">
    <div id="homeLeft">
      <img src="~assets/img/touxiang.png" alt="">
      <h2>{{ this.$store.state.user.name }}</h2>
    </div>
    <div id="homeRight">
      <div class="h-detail">
        <h2>用户描述，可JFK撒旦艰苦分类</h2>
      </div>
      <dProgress :percentage="num"  status="success" :text-inside="true"  :stroke-height="20"/>
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
      num:this.$store.state.progress.num,
    }
  },
  created() {

  },
  // mounted() {
  //   if(this.num<50){
  //     this.status="none"
  //   }else if(this.num<75){
  //     this.status="success"
  //   }else{
  //     this.status="failure"
  //   }
  // }

}
</script>

<style scoped>
.homeDetail{
  width:888px;
  height: 185px;
  margin-left:50px;
  border-radius:10px;
  background: pink;
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
  top:-20px;
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