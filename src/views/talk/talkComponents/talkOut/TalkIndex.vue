<template>
  <div class="talk-in">
    <talk-index-item>
      <div slot="talk-menu" id="talk-menu">
        <span @click="upClick">👍{{this.$store.state.themes[currentId].up}}</span>
        <span @click="downClick">👎{{this.$store.state.themes[currentId].down}}</span>
        <button @click="back">返回</button>
        <button @click="addCom">评论</button>
      </div>
      <div class="talk-content" slot="talk-content">
        <talk-content></talk-content>
      </div>
    </talk-index-item>

  </div>
</template>

<script>
import TalkIndexItem from "@/views/talk/talkComponents/talkOut/TalkIndexItem";
import TalkContent from "@/views/talk/talkComponents/talkContent/TalkContent";
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
    TalkContent
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
    },
    addCom(){
      
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
  width: 60px;
  height:35px;
  text-align: center;
  line-height: 35px;
}
#talk-menu span:hover{
  cursor:pointer;
}
</style>