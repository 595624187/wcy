<template>
  <div class="user">
    <div class="user-top">
      <img src="~assets/img/touxiang.png" alt="">
      <div class="user-t">
        <p>{{user.user_name}}</p>
        <div>
          <span>描述:</span>
          <textarea name="" id="" cols="30" rows="10" v-model="user.detail"></textarea>
        </div>
      </div>
    </div>
    <div class="user-bottom">
      <h2>用户信息</h2>
      <hr>
      <div class="user-content">
        <h4><span>账号:</span><input type="text" disabled v-model="user.name"></h4>
        <h4><span>名称:</span><input type="text" v-model="user.user_name"></h4>
        <h4><span>性别:</span><input type="text" v-model="user.sex"></h4>
        <h4><span>年龄:</span><input type="text" v-model="user.age"></h4>
        <h4><span>位置:</span><input type="text" v-model="user.city"></h4>
        <h4><span>职业:</span><input type="text" v-model="user.work"></h4>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "user",
  data(){
    return{
      user:{},
    }
  },
  mounted(){
    this.user = this.$store.state.currentUser
  }


}
</script>

<style scoped>
.user{
  width: 1500px;
  height:800px;
  margin:30px 0 0 30px;
  padding:40px 0 0 300px;
  font-size: 18px;
  font-family: 微软雅黑;
  box-shadow:2px 2px 10px #909090;
  border-radius: 8px;
  background: white;
}
.user-top{
  width:900px;
  height:225px;
  border-radius: 10px;
  border:4px rgba(208, 224, 132, 0.85) solid;
  display: flex;
  margin-bottom: 30px;
}
.user-top img{
  width:200px;
  height:200px;
  border-radius: 100px;
}
.user-top p{
  height:50px;
  padding:40px 0 20px 40px ;
  font-size: 20px;
  margin-bottom: 10px;
}
.user-top span{
  position: relative;
  top:-80px;
  height:50px;
  padding:0 20px 0 38px;

}
.user-top textarea{
  padding: 4px;
  width:400px;
  height: 100px;
  resize:none;
  background: none;
  border:none;
}
.user-t{
  height: 150px;
  display: flex;
  flex-direction: column;
  padding-top:5px;
}
.user-bottom{
  width:900px;
  padding: 10px 0 10px 10px;
  height: 60%;
  border-radius: 10px;
  border:4px rgba(208, 224, 132, 0.85) solid;
}
.user-bottom h2{
  width: 95%;
  height:50px;
  border-radius:5px;
  margin-left: 10px;
  padding:5px 50px 0 5px;
  font-family: 华文楷体;
}
.user-content{
  padding-top:30px;
}
.user-content h4{
  padding:15px;
}
.user-content span{
  padding-right:15px;
}
.user-content input{
  border:none;
  background: none;
}
</style>