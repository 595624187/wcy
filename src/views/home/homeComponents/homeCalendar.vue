<template>
  <div class="homeCalendar">
    <div class="c-nav">
    <span style="font-size: 25px;">Calendar</span>
      <button @click="$refs.calendar1.setToday()">今天</button>
    </div>
    <div class="c-body">
      <calendar
          ref="calendar1"
          :events="calendar1.events"
          :lunar="calendar1.lunar"
          :value="calendar1.value"
          :begin="calendar1.begin"
          :end="calendar1.end"
          :weeks="calendar1.weeks"
          :months="calendar1.months"
          @select="calendar1.select"
          @selectMonth="calendar1.selectMonth"
          @selectYear="calendar1.selectYear">
      </calendar>
    </div>
  </div>
</template>

<script>
import calendar from "@/components/common/Calender/calendar.vue";
export default {
  name: "homeCalendar",
  components:{
    calendar
  },
  data(){
    return{
      calendar1:{
        value:[(new Date()).getFullYear(),(new Date()).getMonth()+1,(new Date()).getDate()], //默认日期
        // lunar:true, //显示农历
        weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        events:{
          '2017-7-7':'',
          '2017-7-20':'',
          '2017-7-21':'',
          '2017-7-22':'',
        },
        select(value){
          // console.log(value.toString());
        },
        selectMonth(month,year){
          // console.log(year,month)
        },
        selectYear(year){
          // console.log(year)
        },
        timestamp:Date.now()
      },
    }
  },
  methods:{

  },
}
</script>

<style scoped>
.homeCalendar{
  width:500px;
  height: 350px;
  border-radius: 10px;
  float:left;
  margin:40px 20px 0 40px;
}
</style>