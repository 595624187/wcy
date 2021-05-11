<template>
  <div class="learn">
    <learn-main :movie="currentMovie"></learn-main>
    <learn-choose
        @child-choice="mvChoice"
        :mvIndex="index"
        :maxIndex="maxIndex"
        :movies="movies"
        @li-choice="mvChoice"
     ></learn-choose>
  </div>
</template>

<script>
import LearnMain from "./learnVideo/LearnMain";
import LearnChoose from "./learnVideo/LearnChoose";
export default {
  name: "learn",
  components:{
    LearnMain,
    LearnChoose
  },
  props:{

  },
  data(){
    return{
      movies:[],
      index:0,
      currentMovie:{},
      maxIndex:0,
    }
  },
  methods:{
    mvChoice(data){
      this.index=data
      this.currentMovie=this.movies[this.index]
    }
  },

  mounted() {
    this.movies=this.$store.state.movies
    this.currentMovie=this.movies[this.index]
    this.maxIndex=this.movies.length
  }

}
</script>

<style scoped>
.learn{
  width:1500px;
  display:flex;
  margin:30px 0 0 30px;
  box-shadow:2px 2px 10px #909090;
  border-radius: 8px;
  background: snow;
}
</style>
