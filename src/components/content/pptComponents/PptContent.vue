<template>
  <div class="ppt-content">
    <div class="ppt-head">
      <ul>
        <li id="file-name">文件名</li>
        <li>上传者</li>
        <li>上传时间</li>
        <li>下载量</li>
        <li>操作</li>
      </ul>
    </div>
    <div class="ppt-body">
      <ppt-content-item v-for="item in files" :itemfiles="item"></ppt-content-item>
    </div>
  </div>
</template>

<script>
import PptContentItem from "@/components/content/pptComponents/PptContentItem";
export default {
  name: "PptContent",
  data(){
    return{
      files:[
      {
        name:'大家撒法艰苦了.ppt',
            user:'作者',
          time:'2021/04/13',
          num:123,
          url:'https://www.baidu.com'
      },
        {
          name:'asdfasd.ppt',
          user:'作者',
          time:'2021/04/13',
          num:543,
          url:'https://www.baidu.com'
        },
        {
          name:'asdf.ppt',
          user:'作者',
          time:'2021/04/13',
          num:12,
          url:'https://www.baidu.com'
        },
        {
          name:'dddddddddddd.ppt',
          user:'作者',
          time:'2021/04/13',
          num:332,
          url:'https://www.baidu.com'
        },
        {
          name:'2222222222.ppt',
          user:'作者',
          time:'2021/04/13',
          num:21323,
          url:'https://www.baidu.com'
        },
        {
          name:'fdsfddfdffffff.ppt',
          user:'作者',
          time:'2021/04/13',
          num:2322,
          url:'https://www.baidu.com'
        },
        {
          name:'cccccccccccccccc.ppt',
          user:'作者',
          time:'2021/04/13',
          num:124341,
          url:'https://www.baidu.com'
        }

      ]
    }
  },
  components:{
    PptContentItem
  }
}
</script>

<style scoped>
.ppt-content{
  width:980px;
  height: 780px;
  margin:10px;
  border-radius: 5px;
  border:2px green solid;
}
.ppt-head{
  height: 50px;
  width:100%;
  background: #dfebf9;
  color: rgba(0, 0, 0, 0.93);
  font-weight: bolder;
  padding-top:10px;
}
.ppt-body{
  height:93%;
  overflow-y:scroll;
}
::-webkit-scrollbar{
  display:none;
}
.ppt-head ul>li{
  list-style: none;
  display: inline-flex;
  width: 160px;
  font-size: 20px;
}
.ppt-head ul>li:first-child{
  width: 320px;
}


</style>