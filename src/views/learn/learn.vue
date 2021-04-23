<template>
  <learn-video>
    <div slot="learn-title">
      {{movies[0].title}}
    </div>
    <div slot="learn-body">
      <video
      id="myVideo"
      class="video-js vjs-default-skin vjs-big-play-centered"
      controls

      preload="auto"
      ref="videoDemo"
      >
        <source src
                type="video/mp4">
      </video>
    </div>
    <div slot="video-button">
      <collapse></collapse>
    </div>
  </learn-video>
</template>

<script>
import LearnVideo from "@/components/content/learnVideo/LearnVideo";
import Collapse from "@/components/common/Collapse";
export default {
  name: "learn",
  components:{
    LearnVideo,
    Collapse
  },
  props:{

  },
  data(){
    return{
      videosorce:{
        title:'aaa',
        src:'',
      },
      movies:this.$store.state.movies,
      t_src:require('../../assets/mp4/缘分一道桥.mp4'),
    }
  },
  methods:{

  },
  mounted(){
    this.$refs.videoDemo.src=this.t_src
  },



  computed:{

  }
}
</script>

<style scoped>

</style>
