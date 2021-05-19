<template>
  <div class="testResult">
    <div v-for="(test,index) in tests" class="testCon">
      <h2>{{index+1}}、（{{getType(test.type)}}）{{test.name}}</h2>
      <h2>A {{test.optionA}}</h2>
      <h2>B {{test.optionB}}</h2>
      <h2>C {{test.optionC}}</h2>
      <h2>D {{test.optionD}}</h2>
      <h2 style="color:blue">你的答案：{{getChoice(test)}}</h2>
      <h2 style="color:red;">正确答案：{{test.answer}}</h2>
      <hr style="width:1000px;">
    </div>
    <div class="testSum">
      <h2>本次练习成绩：</h2>
      <h2>题目个数：<span>{{ getSum(tests) }}</span></h2>
      <h2>正确个数：<span style="color:green">{{getRight(tests)}}</span></h2>
      <h2>正确率：<span style="color:red">{{getRate(tests)}}%</span></h2>
      <h2 style="color:darkmagenta">{{ getMsg(getRate(tests)) }}</h2>
      <button style="margin-left:200px;" @click="back">返回</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestResult",
  data(){
    return{
      tests:'',
    }

  },
  methods:{
    getChoice(test){
      let r = ''
      if(test.stateA){
        r='A'
      }else if(test.stateB){
        r='B'
      }else if(test.stateC){
        r='C'
      }else if(test.stateD){
        r='D'
      }
      return r
    },

    getSum(tests){
      return tests.length


    },
    getRight(tests){
      let num = 0
      for(let test of tests){
        if(this.getChoice(test)===test.answer){
          num++
        }
      }
      return num
    },
    getRate(tests){
      return Math.round(this.getRight(tests)/this.getSum(tests)*100*100)/100
    },
    getType(type){
      if(type==='simple'){
        return '单选'
      }else{
        return '多选'
      }
    },
    back(){
      this.$router.replace('/testList')
    },
    getMsg(data){
      let msg = ''
      if(data<60){
        return '再接再厉！！！'
      }else if(data<100){
        return '做的不错！！！'
      }else{
        return '恭喜你！全部答对!'
      }
    }
  },
  created() {
    this.tests=this.$store.state.tests1
  }
}
</script>

<style scoped>
.testResult{
  width: 1500px;
  height:800px;
  box-shadow:2px 2px 10px #909090;
  border-radius: 8px;
  margin:30px 0 0 30px;
  background: snow;
  overflow-y:scroll;
  padding-left:200px;
}
.testCon{
  width:80%;
  padding:10px 0 10px 20px;

}
.testSum{
  padding-top:20px;
}
</style>