<template>
  <div class="talk-in">
    <talk-item>
      <div slot="talk-menu" id="talk-menu">
        <span><img src="" alt="">👍</span>
        <span><a href=""></a>👎</span>
      </div>
    </talk-item>
  </div>
</template>

<script>
import TalkItem from "@/views/talk/talkComponents/talkOut/TalkItem";
export default {
  name: "TalkIndex",
  components:{
    TalkItem
  },

}
</script>

<style scoped>

</style>