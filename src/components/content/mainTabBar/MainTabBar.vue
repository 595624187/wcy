<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="">
        <div slot="item-icon">LOGO</div>
      </tab-bar-item>
      <tab-bar-item path="/home">
        <div slot="item-icon">1 </div>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/learn">
        <div slot="item-icon">2 </div>
        <div slot="item-text">视频</div>
      </tab-bar-item>
      <tab-bar-item path="/ppt">
        <div slot="item-icon">3 </div>
        <div slot="item-text">课件</div>
      </tab-bar-item>
      <tab-bar-item path="/talk">
        <div slot="item-icon">4 </div>
        <div slot="item-text">讨论</div>
      </tab-bar-item>
      <tab-bar-item path="/test">
        <div slot="item-icon">5 </div>
        <div slot="item-text">测评</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/menu/TabBar";
import TabBarItem from "@/components/common/menu/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem,
  }
}
</script>

<style scoped>
  .main-tab-bar{
    height:973px;
    position: absolute;
    left:0;
    top:0;
  }
</style>