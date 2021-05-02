<template>
  <div class="homeCalendar">
    <div class="c-nav">
    <h2>Calendar</h2>
    </div>
    <div class="c-body">
      <p>{{data}}</p>
    </div>
  </div>
</template>

<script>
import {getData} from "@/network/index";

export default {
  name: "homeCalendar",
  data(){
    return{
      data:''
    }
  },

  created(){
    this.getData()
  },
  methods:{
    getData(){
      this.$axios.get('http://123.207.32.32:8000/home/multidata').then(res=>{
        this.data=res
      })
    }
  },
}
</script>

<style scoped>
.homeCalendar{
  width:500px;
  height: 350px;
  border-radius: 10px;
  background:darkseagreen;
  float:left;
  margin:40px 20px 0 40px;
}
</style>