<template>
  <div class="container">
    <button @click="mvBackward">上一集</button>
    <button @click="mvForward">下一集</button>
    <button @click="isActive = !isActive">选集</button>
    <collapse>
      <div v-show="isActive">
        <scroll class="video-choice">
          <ul class="mvUl">
            <li v-for="(movie,index) in movies" @click="liClick(index)"
            :class="{ulActive:index===mvIndex}"
            ><span class="span-left">{{movie.id}}</span>
              <span class="span-right">{{movie.name}}</span></li>
          </ul>
        </scroll>
      </div>
    </collapse>
  </div>
</template>

<script>
import collapse from "@/assets/js/collapse";
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name:'LearnChoose',
  data() {
    return {
      isActive: false
    };
  },
  props:{
    mvIndex:{
      type:Number,
      default:0
    },
    maxIndex:{
      type:Number,
      default:0
    },
    movies:{
      type:Array,
      default:[]
    }
  },
  components: {
    collapse,
    Scroll
  },

  mounted(){
    this.$store.state.zhongjie.learn=this.mvIndex
  },
  methods:{
    mvBackward(){
      if(this.mvIndex>=1){
        this.$emit('child-choice',this.mvIndex-1)
      }
    },
    mvForward(){
      if(this.mvIndex<this.maxIndex-1){
        this.$emit('child-choice',this.mvIndex+1)
      }
    },
    liClick(index){
      this.$emit('li-choice',index)
    }
  }

};

</script>

<style scoped>
.video-choice{
  border:1px solid #ddd;
  padding:10px;
  width:485px;
  height:480px;
  text-align: center;
  overflow-y: scroll;
}

.container{
  width:500px;
  height:700px;
  padding-top:100px;
}
.container button{
  width: 100px;
  height:50px;
  margin-left: 100px;
}
.mvUl{
  background: rgba(181, 190, 252, 0.18);
}
.mvUl li:hover{
  background: rgba(35, 124, 220, 0.49);
  cursor: pointer;
  color: #fff7f7;
}
.ulActive{
  background: rgba(35, 124, 220, 0.49);
  cursor: pointer;
  color: #fff7f7;
}
.mvUl{
  width:460px;
}
.span-left{
  display: inline-block;
  width:30%;
  font-size: 20px;
  font-weight: bolder;
  align-items: center;
  padding-top:5px;
}
.span-right{
  display: inline-block;
  width:70%;
  font-size: 20px;
  font-family: 微软雅黑;
  text-align: left;
  padding-top:5px;
}
</style>