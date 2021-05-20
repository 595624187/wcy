<template>
  <div class="testList">
    <h2 class="test-title">测评模块</h2>
    <div class="list-content">
      <div class="testUl">
        <ul>
          <li>章节</li>
          <li>名称</li>
          <li>题目数量</li>
          <li>状态</li>
        </ul>
      </div>
     <div class="testCon">
       <ul v-for="list in lists" @click="testClick(list.id,list.chapter+' '+list.name)">
         <li>{{ list.chapter }}</li>
         <li>{{ list.name }}</li>
         <li>{{ list.num }}</li>
         <li>{{ list.state }}</li>
       </ul>
     </div>
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
.testUl{
  background: #339981;
  color:snow;
  height: 40px;
  line-height: 40px;
  font-size:20px;
}

.test-title-ul li{
  padding-left:30px;
}
ul{
  height: 40px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding-left:30px;

}
 li{
   height: 50px;
   width: 33.3%;
   font-size: 23px;
}
 .testCon{
   height:640px;
   overflow-y: scroll;
   background: rgba(135, 206, 235, 0.27);
 }
.testCon ul{
  padding-left:30px;
  line-height: 25px;
  height: 30px;

}
 .testCon li{
   padding: 5px;
 }
 .testCon ul:hover{
   background: rgba(75, 147, 224, 0.34);
   cursor: pointer;
 }
</style>