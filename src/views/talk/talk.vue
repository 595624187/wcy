<template>
  <TalkBar>
    <h2 slot="talkTitle">标题</h2>
    <button slot="talkBtn">发布主题</button>
  </TalkBar>
</template>

<script>
import TalkBar from "@/components/content/talkBar/TalkBar";
export default {
  name: "talk",
  components:{
    TalkBar
  }
}
</script>

<style scoped>

</style>