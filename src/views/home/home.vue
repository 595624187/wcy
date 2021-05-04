<template>
  <div class="home">
    <home-detail></home-detail>
    <home-calendar></home-calendar>
    <home-weather></home-weather>
  </div>
</template>

<script>
import homeDetail from "@/views/home/homeComponents/homeDetail";
import homeCalendar from "@/views/home/homeComponents/homeCalendar";
import homeWeather from "@/views/home/homeComponents/homeWeather";
export default {
  name: "home",
  components:{
    homeDetail,
    homeCalendar,
    homeWeather,
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