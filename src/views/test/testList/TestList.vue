<template>
  <div class="testList">
    <h2 class="test-title">测评</h2>
    <ul>
      <li>章节</li>
      <li>名称</li>
      <li>题目数量</li>
      <li>状态</li>
    </ul>
    <div class="list-content">
      <ul v-for="list in lists" @click="testClick(list.id,list.chapter+' '+list.name)">
        <li>{{ list.chapter }}</li>
        <li>{{ list.name }}</li>
        <li>{{ list.num }}</li>
        <li>{{ list.state }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
import {getLists} from "../../../network";

export default {
  name: "TestList",
  data(){
    return{
      lists:''
    }
  },
  methods:{
    testClick(id,name){
      this.$router.push({path: '/testMain', query: {id:id,name:name}})
    },
    getLists(){
      getLists().then(res=>{
        this.lists=res.data.data
      })
    }
  },
  created() {
        this.getLists()
  }
}
</script>

<style scoped>
.testList{
  background: white;
  padding-left:20px;

}
.test-title{
  height:80px;
  width:1400px;
  text-align: center;
  font-size: 28px;
  font-family: 微软雅黑;
  line-height: 80px;
}
.testList ul{
  background: rgba(127, 255, 212, 0.61);
  line-height: 50px;
  margin-left:5px;
}
.testList li{
  padding-left:5px;

}

.test-title-ul li{
  padding-left:30px;
}
ul{
  width: 1450px;
  height: 50px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding-left:30px;
}
 li{
  height: 50px;
  width: 33.3%;
   font-size: 23px;
   padding-left:40px;
   font-family: 微软雅黑;
}
 .list-content{
   height:600px;
   overflow-y: scroll;
 }
.list-content ul{
  background: rgba(181, 190, 252, 0.18);
  padding-left:30px;
  margin:4px;
}
 .list-content li{
   padding: 5px;
 }
 .list-content ul:hover{
   background: rgba(75, 147, 224, 0.34);
   color:white;
   cursor: pointer;
 }
</style>