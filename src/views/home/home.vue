<template>
  <div class="home">
    <home-detail></home-detail>
    <home-calendar></home-calendar>
    <home-weather></home-weather>
    <home-rec></home-rec>
  </div>
</template>

<script>
import homeDetail from "@/views/home/homeComponents/homeDetail";
import homeCalendar from "@/views/home/homeComponents/homeCalendar";
import homeWeather from "@/views/home/homeComponents/homeWeather";
import homeRec from "@/views/home/homeComponents/homeRec";
export default {
  name: "home",
  components:{
    homeDetail,
    homeCalendar,
    homeWeather,
    homeRec,
  },
  methods:{

  }
}
</script>

<style scoped>
.home{
  width:1000px;
  height:900px;
  display:inline-block;
}
</style>