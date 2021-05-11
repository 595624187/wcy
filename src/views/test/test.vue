<template>
  <div class="test">
    <test-list></test-list>
  </div>
</template>

<script>
import testMain from "@/views/test/testComponents/testMain";
import TestList from '@/views/test/testList/TestList'
export default {
  name: "test",
  components:{
    testMain,
    TestList
  }
}
</script>

<style scoped>
.test{
  width: 1500px;
  height:800px;
  box-shadow:2px 2px 10px #909090;
  border-radius: 8px;
  margin:30px 0 0 30px;
  background: snow;
}
</style>