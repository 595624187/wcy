<template>
  <div class="talk-out">
    <talk-item>
      <div slot="talk-menu">
        <ul>
          <li><button @click="liBack">返回</button></li>
          <li><button>保存</button></li>
          <li><button>发布</button></li>
        </ul>
      </div>
    </talk-item>
  </div>
</template>

<script>
import TalkItem from "@/views/talk/talkComponents/talkOut/TalkItem";
export default {
  name: "TalkOut",
  components:{
    TalkItem
  },
  methods:{
    liBack(){
      this.$router.replace('/talk')
    }
  }
}
</script>

<style scoped>
.talk-out ul{
  list-style: none;
  display: flex;
}
.talk-out li{
  flex:1;
  text-align: center;
}
</style>