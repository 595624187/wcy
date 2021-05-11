<template>
  <div class="homeRecom">
      <h2>今日学习日记</h2>
      <div class="riji">
        <ul>
          <li>今天观看了<span>{{zhongjie.learn}}</span>个学习视频</li>
          <li>今天下载了<span>{{zhongjie.ppt}}</span>个课件</li>
          <li>今天共做了<span>{{zhongjie.test}}</span>套练习题</li>
          <li>今天参加了<span>{{zhongjie.talk}}</span>次讨论</li>
        </ul>
      </div>
    <div class="zhongjie">
      <h3>今天你的学习超越了<span>{{zhongjie.rate}}%</span>的同学，再接再厉!</h3>
    </div>
  </div>
</template>

<script>
import * as foo from '@/network/index'
export default {
  name: "homeRecom",
  components:{
  },
  data(){
    return{
      zhongjie:'',
    }
  },
  methods:{

  },
  created() {
    this.zhongjie=this.$store.state.zhongjie
  }

}
</script>

<style scoped>
.homeRecom{
  width:380px;
  height:500px;
  float:right;
  background: rgba(87, 255, 149, 0.09);
  margin:20px 40px 0 0;
  border-radius: 10px;
  padding:100px 0 30px 20px;
}
.riji{
  padding-top: 20px;
}
.riji ul{
  list-style: none;
  font-family: 微软雅黑;
  font-size: 20px;
  font-weight: bold;
}

.riji li{

}
.riji span{
  color:red;
}
.zhongjie{
  padding-top:50px;
  font-size: 18px;
}
.zhongjie span{
  color: rgba(45, 179, 44, 0.55)
}
</style>