<template>
  <div class="testHead">
    <div class="testTitle">
      <h2><span>{{name}}</span> </h2>
    </div>
    <div class="testLeft" >
      <ul>

        <li v-for="(test,index) in tests"
            @click="liClick(index+1)"
            :class="[test.id-1===currentTest?'liActive':'',getStatu(test)?'finished':'']"
        >
        {{index+1}}
        </li>
      </ul>
    </div>
    <div class="testRight">
      <button @click="btnClick1">上一题</button>
      <button @click="btnClick">下一题</button>
      <button @click="backClick">返回</button>
      <button @click="testSub">提交</button>
      <div class="msg">
        <span style="color:red;font-family: 微软雅黑;">{{ this.msg }}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "testHead",
  props:{
    tests:{
      type:Array,
      default:'',
    },
    currentTest: {
      type:Number,
      default:0,
    },
    title:{
      type:String,
      default:'',
    },
    listId:{
      type:Number,
      default:'',
    },
    name:{
      type:String,
      default:'',
    }
  },
  data(){
    return{
      msg:''
    }
  },
  methods:{
    btnClick(){
      this.$emit('btnClick')
    },
    btnClick1(){
      this.$emit('btnClick1')
    },
    liClick(index){
      this.$emit('testChange',index)
    },
    backClick(){
      this.$router.replace('/test')
    },
    getStatu(test){
      return test.stateA||test.stateB||test.stateC||test.stateD
    },
    testSub(){
      let flag = true
      let index = ''
      for(let test of this.tests){
        if(this.getStatu(test)){
          flag=true
        }else{
          flag=false
          index = this.tests.indexOf(test)+1
          break
        }
      }
      if(flag){
        for(let temp of this.$store.state.lists){
          if(temp.id===this.listId){
            temp.state='完成'
            this.$router.push({path:'/testResult'})
            this.$store.state.tests1=this.tests
            this.$myMsg.notify({
              content:'提交成功！',
              type:'success',
            })
          }
        }
      }else{
        this.$myMsg.notify({
          content:'第'+index+'题未填写,请完成后再提交！',
          type:'warning',
        })
      }
    }
  },
  computed:{
  }
}
</script>

<style scoped>
.testHead{
  width:100%;
  height:240px;
  display:inline-block;
}

.testHead li{
  display: inline-block;
  width:50px;
  height:50px;
  border-radius: 25px;
  background: white;
  color:deepskyblue;
  font-size: 25px;
  text-align: center;
  line-height: 50px;
  font-weight: bolder;
  margin:8px;
}
.testHead li:hover{
  cursor: pointer;
  background: rgba(167,161,161,0.45);
  color: white;
}
.testHead .liActive{
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.testHead .finished{
  background: rgba(0, 128, 0, 0.73);
  color:white;
}
.testTitle{
  display: flex;
  justify-content: center;
  margin:30px 0 30px 0 ;
}
.testLeft{
  width:1000px;
  height: 135px;
  float:left;
  box-shadow:2px 2px 10px #909090;
  border-radius: 5px;
  margin-left:100px;
  background: #c9eaea;
}
.testRight{
  width:250px;
  height:120px;
  float:right;
  position: relative;
  right:80px;
}
.testTitle h2{
  font-family: 微软雅黑;
}
</style>