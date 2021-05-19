<template>
 <div class="learn-main">
   <learn-video>
     <div slot="learn-title"  >
       {{movie.id}}、 {{movie.name}}
     </div>
     <div slot="learn-body">
       <video
           id="video"
           ref="video"
           controls
           autoplay
           :src=movie.url
       >
         视频加载失败
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
  methods:{

  },
  props:{
    movie:{
      type:Object,
      default:{
        id:1,
        name:'test',
        url:'https://vdn.vzuu.com/HD/22c69f92-8ae6-11ea-8251-927918750bb0.mp4?disable_local_cache=1&auth_key=1621244408-0-0-4cb030a49fcc33742b439695dd05029e&f=mp4&bu=http-com&expiration=1621244408&v=ali'
      },
    }
  },


  }

</script>

<style scoped>
#video{
  height:700px;
}
</style>