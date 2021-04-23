<template>
  <div class="testMain"  >
    <test-head :tests="tests"
               :currentTest="currentTest"
               @btnClick="btnClick"
               @testChange="testChange"></test-head>
    <test-body :tests="tests" :currentTest="currentTest"></test-body>
  </div>
</template>

<script>
import testHead from "@/components/content/test/testHead";
import testBody from "@/components/content/test/testBody";
export default {
  name: "testMain",
  components:{
    testHead,
    testBody
  },
  data(){
    return{
      tests:[
        {
          index:1,
          type:'simple',
          title:'啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山，请选择正确的答案()',
          data:[
            {
              detail:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
            {
              detail:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
            {
              detail:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
            {
              detail:'1啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
          ],
        },
        {
          index:2,
          type:'simple',
          title:'啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山，请选择正确的答案()',
          data:[
            {
              optionA:'2啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
            {
              optionB:'2啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
            {
              optionC:'2啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
            {
              optionD:'2啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
          ],
        },
        {
          index:3,
          type:'multiple',
          title:'啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山，请选择正确的答案()',
          data:[
            {
              optionA:'3啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
            {
              optionB:'3啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
            {
              optionC:'3啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
            {
              optionD:'3啊螺丝扣搭街坊实打手动阀手动阀手动阀手动阀撒旦实大苏打飒飒的撒旦撒啊实打实昆仑山',
              state:false
            },
          ],
        },

      ],
      currentTest:0,
    }
  },
  methods:{
    btnClick(){
      this.currentTest++
    },
    testChange(index){
      this.currentTest = index-1
    }
  }
}
</script>

<style scoped>
.testMain{
  width: 1000px;
}
</style>