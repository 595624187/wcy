<template>
 <div class="learn-main">
   <h1 style="padding-left:50%">视频学习</h1>
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
        url:'http://video.699pic.com/videos/88/83/88/a_TiRgSWMGY7jj1613888388.mp4'
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