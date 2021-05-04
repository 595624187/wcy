<template>
  <div class="user">
    <div class="user-top">
      <img src="~assets/img/touxiang.png" alt="">
      <div class="user-t">
        <p>{{user.name}}</p>
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
        <h4><span>用户:</span><input type="text" v-model="user.name"></h4>
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
    this.user = this.$store.state.user
  }


}
</script>

<style scoped>
.user{
  width: 700px;
  height:900px;
  margin:20px 0 0 150px;
  border-radius: 20px;
}
.user-top{
  width:700px;
  height:225px;
  border-radius: 10px;
  border:4px rgba(208, 224, 132, 0.85) solid;
  margin-bottom: 1px;
  display: flex;
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
  width:350px;
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