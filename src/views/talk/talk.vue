<template>
  <div class="talk">
    <div class="talk-hot">
      <TalkBar>
        <h2 slot="talkTitle">热门主题</h2>
        <button slot="talkBtn" @click="talkBtn">发布主题</button>
      </TalkBar>
    </div>
    <div class="talk-rec">
      <TalkBar>
        <h2 slot="talkTitle">推荐主题</h2>
        <button slot="talkBtn">换一批</button>
      </TalkBar>
    </div>
  </div>
</template>

<script>
import TalkBar from "@/views/talk/talkComponents/talkBar/TalkBar";
import TalkOut from "@/views/talk/talkComponents/talkOut/TalkOut";
export default {
  name: "talk",
  components:{
    TalkBar,
    TalkOut
  },
  methods:{
    talkBtn(){
      this.$router.push('/talkOut')
    }

  }
}
</script>

<style scoped>

</style>