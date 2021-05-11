<template>
  <div class="home">
    <home-detail></home-detail>
    <home-calendar></home-calendar>
    <home-recom></home-recom>
  </div>
</template>

<script>
import homeDetail from "@/views/home/homeComponents/homeDetail";
import homeCalendar from "@/views/home/homeComponents/homeCalendar";
import homeRecom from "@/views/home/homeComponents/homeRecom";
export default {
  name: "home",
  components:{
    homeDetail,
    homeCalendar,
    homeRecom,
  },
  methods:{

  }
}
</script>

<style scoped>
.home{
  width:1000px;
  height:750px;
  display:inline-block;
  margin:30px 0 0 200px;
  box-shadow:2px 2px 10px #909090;
  border-radius: 8px;
  background: snow;
}
</style>