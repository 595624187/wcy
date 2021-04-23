<template>
  <div class="home">
    <home-detail></home-detail>
    <home-calendar></home-calendar>
    <home-weather></home-weather>
    <home-rec></home-rec>
  </div>
</template>

<script>
import homeDetail from "@/components/content/home/homeDetail";
import homeCalendar from "@/components/content/home/homeCalendar";
import homeWeather from "@/components/content/home/homeWeather";
import homeRec from "@/components/content/home/homeRec";
export default {
  name: "home",
  components:{
    homeDetail,
    homeCalendar,
    homeWeather,
    homeRec,
  },
}
</script>

<style scoped>
.home{
  width:1000px;
  height:900px;
  display:inline-block;
}
</style>