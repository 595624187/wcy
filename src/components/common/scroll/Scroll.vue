<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
name: "Scroll",
  data(){
  return{
    scroll:null
  }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
    })

    if(this.probeType===2||this.probeType===3){
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
    }
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
  },
  methods:{
  scrollTo(x,y,time=300){
    this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
  },
    refresh(){
      // console.log('----------')
    this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
