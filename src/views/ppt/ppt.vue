<template>
  <div class="ppt">
    <ppt-menu></ppt-menu>
    <ppt-content></ppt-content>
  </div>
</template>

<script>
import PptMenu from "@/components/content/pptComponents/PptMenu";
import PptContent from "@/components/content/pptComponents/PptContent";
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