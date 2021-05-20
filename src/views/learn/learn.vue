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
import {getMovies} from "../../network";

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
      currentMovie:'',
      maxIndex:5,
    }
  },
  methods:{
    mvChoice(data){
      this.index=data
      this.currentMovie=this.movies[this.index]
    },

  },
  created() {
  },
  mounted() {
    getMovies().then(res=>{
      this.movies=res.data.data
      this.maxIndex=this.movies.length

    })
    this.currentMovie=this.movies[this.index]
  }


}
</script>

<style scoped>
.learn{
  width:1500px;
  height:800px;
  display:flex;
  margin:30px 0 0 30px;
  box-shadow:2px 2px 10px #909090;
  border-radius: 8px;
  background: snow;
  padding-left:20px;
}
</style>
