<template>
  <div class="testMain"  >
    <test-head :tests="tests"
               :currentTest="currentTest"
               @btnClick="btnClick"
               @btnClick1="btnClick1"
               @testChange="testChange"
              :title = "title"
               :listId="id"
    ></test-head>
    <test-body :test="tests[currentTest]"></test-body>
  </div>
</template>

<script>
import testHead from "@/views/test/testComponents/testHead";
import testBody from "@/views/test/testComponents/testBody";
export default {
  name: "testMain",
  components:{
    testHead,
    testBody
  },
  data(){
    return{
      tests:'',
      currentTest:0,
      id:0,
      title:'',
    }
  },
  methods:{
    btnClick(){
      if(this.currentTest<this.tests.length-1){
        this.currentTest++
      }else{
        this.currentTest=0
      }
    },
    btnClick1(){
      if(this.currentTest>0){
        this.currentTest--
      }else{
        this.currentTest=this.tests.length-1
      }
    },
    testChange(index){
      this.currentTest = index-1
    }
  },
  created(){
    this.id=parseInt(this.$route.query.id)
    this.tests = this.$store.state.tests[this.id-1]
    this.title = this.$store.state.lists[this.id-1].chapter+ ' ' +this.$store.state.lists[this.id-1].name
  }
}
</script>

<style scoped>
.testMain{
  width: 1500px;
  height:800px;
  background: white;
  margin:30px 0 0 30px;
  box-shadow:2px 2px 10px #909090;
  border-radius: 8px;
}
</style>