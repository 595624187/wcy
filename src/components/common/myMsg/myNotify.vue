
<template>
  <transition name="slide-fade">
    <div class="my-notify" v-if="notifyFlag">
      <div class="notify success" v-if="type=='success'">
        <div class="tip">
          <span>成功</span>
        </div>
        <div class="content"> {{content}}</div>
      </div>
      <div class="notify error" v-else-if="type=='error'">
        <div class="tip">
          <span>错误</span>
        </div>
        <div class="content">{{content}}</div>
      </div>
      <div class="notify warning" v-else-if="type=='warning'">
        <div class="tip">
          <span>警告</span>
        </div>
        <div class="content">{{content}}</div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
.notify-wrap{

  background-color: #1AFA29;
}
.my-notify{
  margin: 10px;
  width: 350px;
}
.notify{
  position: relative;
  right: 10px;
  padding-left: 10px;
  width: 320px;
  height: 70px;
  border-radius: 4px;
  background-color: rgb(249, 255, 224);
  box-shadow: -5px 5px 12px 0 rgba(204, 204, 204, .8);
  animation: show cubic-bezier(.18,.89,.32,1.28) .4s;
  font-family: 微软雅黑;
}
.success{
  border-left: 10px solid #1AFA29;
}
.error{
  border-left: 10px solid #D81E06;
}
.warning{
  border-left: 10px solid #F4EA2A;
}
.notify .tip{
  height: 30px;
  margin-bottom: 5px;
  line-height: 30px;
}
.notify .tip span{
  line-height: 30px;
  font-size: 17px;
  font-weight: 600;
}
.notify .content{
  width: 320px;
  height: 30px;
  font-size: 15px;
}
@keyframes show{
  0%{
    right: -350px;
  }
  100%{
    right: 10px;
  }
}
</style>
