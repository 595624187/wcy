<template>
  <div class="talk-in">
    <talk-index-item>
      <div slot="talk-menu" id="talk-menu">
        <span @click="upClick">👍{{this.$store.state.themes[currentId].up}}</span>
        <span @click="downClick">👎{{this.$store.state.themes[currentId].down}}</span>
        <button @click="back">返回</button>
        <button>评论</button>
      </div>
      <div class="talk-content" slot="talk-content">
        <talk-content-item></talk-content-item>
      </div>
    </talk-index-item>

  </div>
</template>

<script>
import TalkIndexItem from "@/views/talk/talkComponents/talkOut/TalkIndexItem";
import TalkContentItem from "@/views/talk/talkComponents/talkOut/TalkContentItem";
export default {
  name: "TalkIndex",
  data(){
    return{
      currentId:0
    }
  },
  props:{
    id:{
      type:Number,
      default:0
    }
  },
  components:{
    TalkIndexItem,
    TalkContentItem
  },
  methods:{
    back(){
      this.$router.replace('/talk')
    },
    upClick(){
      this.$store.state.themes[this.currentId].up++
    },
    downClick(){
      this.$store.state.themes[this.currentId].down++
    }
  },
  created() {
    this.currentId=this.$route.query.id
  }


}
</script>

<style scoped>
.talk-in{
  height:800px;
}
#talk-menu{
  display:flex;
  padding-left:20px;
  justify-content: flex-end;
}
#talk-menu span{
  display: flex;
  padding:20px 20px 0 20px;
}
</style>