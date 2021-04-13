<template>
  <learn-video>
    <div slot="learn-title">
      第一章  物理层
    </div>
    <div slot="learn-body">
      <video autoplay controls>
        <source
            src="~assets/mp4/演示.mp4">
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
