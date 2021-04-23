<template>
  <div class="testBody">
    <div class="testContent">
      <form action="value">
        <span>{{tests[currentTest].index}}.(
          {{tests[currentTest].type}}){{tests[currentTest].title}}
        </span>
        <div v-for="(index,test) in tests" @click="testFor(index,test)">
          ttttttttt
        </div>
          <label v-for="(index,test) in tests"
                 for="optionA"
                 :class="{active:tests[currentTest].data[index].state}">
            <input type="checkbox"
                   name="test"
                   id="optionA"
                   @click="checkClick(tests,currentTest,$event)">
                  {{getOption(index)}}
                  {{tests[currentTest].data[index].detail}}
          </label>
<!--        <label for="optionA" :class="{active:tests[currentTest].active}">-->
<!--          <input type="checkbox" name="test" id="optionA" @click="checkClick(tests,currentTest,$event)"> A {{tests[currentTest].data[0].optionA}}-->
<!--        </label>-->
<!--        <label for="optionB" :class="{active:tests[currentTest].active}">-->
<!--          <input type="checkbox" name="test" id="optionB" @click="checkClick(tests,currentTest,$event)"> B {{tests[currentTest].data[1].optionB}}-->
<!--        </label>-->
<!--        <label for="optionC" :class="{active:tests[currentTest].active}">-->
<!--          <input type="checkbox" name="test" id="optionC" @click="checkClick(tests,currentTest,$event)"> C {{tests[currentTest].data[2].optionC}}-->
<!--        </label>-->
<!--        <label for="optionD" :class="{active:tests[currentTest].active}">-->
<!--          <input type="checkbox" name="test" id="optionD" @click="checkClick(tests,currentTest,$event)"> D {{tests[currentTest].data[3].optionD}}-->
<!--        </label>-->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "testBody",
  data(){
    return{
      value:'',
      cTest:'',
    }
  },
  props:{
    tests:{
      type:Array,
      default:'',
    },
    currentTest:{
      type:Number,
      default:0,
    }
  },
  methods:{
    checkClick(tests,currentTest,event){
      tests[currentTest].active = event.target.checked
    },
    getOption(index){
      if(index===0){
        return 'A'
      }else if(index===1){
        return 'B'
      }else if(index===2){
        return 'C'
      }else if(index===3){
        return 'D'
      }
    },
    testFor(index,test){

    },
  },
  computed:{

  }
}
</script>

<style scoped>
.testBody{
  width:1000px;
  height:660px;
  display:flex;
  justify-content: center;
  padding-top:30px;
}
.testContent{
  width:80%;
  font-size: 20px;
}
.testContent form{
  width: 100%;
  height:90%;
  display: flex;
  flex-direction: column;
}
.testContent span{
  height: 30%;
  border: 1px #ff5777 solid;
  padding:10px;
  border-radius: 10px;
}
.testContent label{
  padding:10px;
  margin: 10px 0 10px 0;
  border: 1px goldenrod solid;
  border-radius: 10px;
}
.testContent label:hover{
  cursor: pointer;
  background: rgba(0, 128, 0, 0.73);
  color:white;
}
.active{
  background: rgba(0, 128, 0, 0.73);
  color:white;
}
.testContent input[type="checkbox"]{
}

</style>