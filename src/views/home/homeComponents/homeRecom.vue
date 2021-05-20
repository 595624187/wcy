<template>
  <div class="homeRecom">
      <h2>今日学习日记</h2>
      <hr style="height:2px;background:#000;margin-top:5px;" >
      <div class="riji">
        <ul>
          <li>今天观看了<span>{{zhongjie.learn}}</span>个学习视频</li>
          <li>今天下载了<span>{{zhongjie.ppt}}</span>个课件</li>
          <li>今天共做了<span>{{zhongjie.test}}</span>套练习题</li>
          <li>今天参加了<span>{{zhongjie.talk}}</span>次讨论</li>
        </ul>
      </div>
    <div class="zhongjie">
      <h3>今天你的学习超越了<span>{{getZhongjie(zhongjie)}}%</span>的同学，再接再厉!</h3>
    </div>
  </div>
</template>

<script>
import {getD} from '@/network/index'


export default {
  name: "homeRecom",
  components:{
  },
  data(){
    return{
      zhongjie:'',
      msg:'',
    }
  },
  methods:{
    getD(){
      getD().then(res=>{
        this.msg=res.data.data
      })
    },
    getZhongjie(obj){
      let t=5
      let sum = obj.learn*0.4+obj.ppt*0.2+obj.talk*0.1+obj.test*0.3
      let rate = Math.round(sum/t * 10000) / 100
      if(rate>99){
        rate = 99.99
      }
      return rate
    }
  },
  created() {
    this.getD()
    this.zhongjie=this.$store.state.zhongjie
  }

}
</script>

<style scoped>
.homeRecom{
  width:500px;
  height:500px;
  float:right;
  position:relative;
  right:300px;
  background: rgba(87, 255, 149, 0.09);
  margin:20px 40px 0 160px;
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