<template>
  <learn-video>
    <div slot="learn-title">
      第一章  物理层
    </div>
    <div slot="learn-body">
      <video autoplay controls>
        <source
            src="https://vdn.vzuu.com/LD/68335efe-f732-11ea-a7cb-861e228f83f9.mp4?disable_local_cache=1&auth_key=1618286798-0-0-e12ab71649d72b3beea91cd5717b62a4&f=mp4&bu=http-com&expiration=1618286798&v=ali">
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
  data(){
    return{
      videosorce:{
        title:'aaa',
        src:'http://www.askdfj.jasd.cn/j.jpg',
      },

    }
  },
}
</script>

<style scoped>

</style>
