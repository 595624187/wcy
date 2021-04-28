<template>
  <div class="testHead">
    <div class="testTitle">
      <h2>测试题</h2>
    </div>
    <div class="testLeft" >
      <ul>
        <li v-for="test in tests"
            @click="liClick(test.index)"
            :class="[test.index-1===currentTest?'liActive':'',getStatu(test)?'finished':'']"
        >{{test.index}}
        </li>
      </ul>
    </div>
    <div class="testRight">
      <button @click="btnClick1">上一题</button>
      <button @click="btnClick">下一题</button>
      <button style="visibility: hidden">隐藏</button>
      <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "testHead",
  props:{
    tests:{
      type:Array,
      default:[],
    },
    currentTest: {
      type:Number,
      default:0,
    }
  },
  data(){
    return{
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
    }
  },
  computed:{
    getStatu(){
      return function(test){
        for(let i=0;i<test.data.length;i++){
          if(test.data[i].state){
            return true
          }
        }
      }
    }
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
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
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
  width:700px;
  height: 135px;
  float:left;
  border:1px green solid;
  border-radius: 5px;
  margin-left:40px;
  background: #e7e1e1;
}
.testRight{
  width:250px;
  height:120px;
  float:right;
  padding-top:30px;
}
</style>