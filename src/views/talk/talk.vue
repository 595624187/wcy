<template>
  <div class="talk">
    <div class="talk-hot">
      <TalkBar :themes="hotThemes">
        <h2 slot="talkTitle">热门主题</h2>
        <button slot="talkBtn" @click="talkBtn">发布主题</button>
      </TalkBar>
    </div>
    <div class="talk-rec">
      <TalkBar :themes="recThemes">
        <h2 slot="talkTitle">推荐主题</h2>
        <button slot="talkBtn" @click="changeNum">换一批</button>
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
  data(){
    return{
      hotThemes:'',
      recThemes:'',
    }
  },
  methods:{
    talkBtn(){
      this.$router.push('/talkOut')
    },
    getRandom(){
      let a = parseInt(Math.random()*10)%6
      let nums = new Array(4)
      nums[0]=a
      let i = 0;
      while(i<4){
       let  flag = true
       let b = parseInt(Math.random()*10)%6
        for(let t of nums){
          if (t === b){
            flag=false
          }
        }
        if(flag){
          nums[++i]=b
        }
        }
        return nums
      },
    changeNum(){
      this.recThemes=new Array(4)
      let arr = this.getRandom()
      let i=0
      for(let a of arr){
        this.recThemes[i++]=this.$store.state.themes[a]

      }
      this.$myMsg.notify({
        content:'切换成功！',
        type:'success',
      })
    },
    getNum(){
      this.recThemes=new Array(4)
      let arr = this.getRandom()
      let i=0
      for(let a of arr){
        this.recThemes[i++]=this.$store.state.themes[a]
      }
    }

  },
  created() {
    this.hotThemes=this.$store.state.themes
    this.getNum()
  }
}
</script>

<style scoped>
.talk{
  width:1500px;
  height:800px;
  margin:30px 0 0 30px;
  padding-top:7px;
  box-shadow:2px 2px 10px #909090;
  border-radius: 8px;
  background: snow;
}

</style>