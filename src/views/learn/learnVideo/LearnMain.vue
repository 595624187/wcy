<template>
 <div class="learn-main">
   <learn-video>
     <div slot="learn-title" >
       {{movie.chapter}} {{movie.title}}
     </div>
     <div slot="learn-body">
       <video
           id="video"
           controls
           preload="auto"
           crossorigin="anonymous"
           autoplay
           :src="movie.mv_src"
       >
       </video>
     </div>
   </learn-video>
 </div>
</template>

<script>
import LearnVideo from "./LearnVideo";

export default {
  name: "LearnMain",
  components:{
    LearnVideo,
  },
  data(){
    return{
    }
  },
  props:{
    movie:{
      type:Object,
      default:'',
    }
  },
  created(){

  }

  }

</script>

<style scoped>
#video{
  position: relative;
  top: -17px;
  height:700px;
}
</style>