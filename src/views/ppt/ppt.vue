<template>
  <div class="ppt">
    <ppt-menu></ppt-menu>
    <ppt-content></ppt-content>
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
  }
}
</script>

<style scoped>

</style>