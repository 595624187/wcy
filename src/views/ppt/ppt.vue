<template>
  <div class="ppt">
    <ppt-menu
      @pptClass = 'childClass'
      @pptTeacher = 'childTeacher'
    ></ppt-menu>
    <ppt-content :files="files"></ppt-content>
  </div>
</template>

<script>
import PptMenu from "@/views/ppt/pptComponents/PptMenu";
import PptContent from "@/views/ppt/pptComponents/PptContent";
export default {
  name: "Ppt",
  components:{
    PptMenu,
    PptContent
  },
  data(){
    return{
      files:'',
    }
  },
  created() {
    this.files=this.$store.state.files
  },
  methods:{
    childClass(){
      this.files=this.$store.state.oldfiles
    },
    childTeacher(){
      this.files=this.$store.state.files
    }
  }
}
</script>

<style scoped>
.ppt{
  width:1500px;
  height:800px;
  padding:15px 0 0 15px;
  margin:30px 0 0 30px;
  box-shadow:2px 2px 10px #909090;
  border-radius: 8px;
  background: snow;

}
</style>