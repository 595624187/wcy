<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <main-nav-bar></main-nav-bar>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
import MainContent from "@/components/content/mainContent/MainContent";
import MainNavBar from "@/components/content/mainNavBar/MainNavBar";

import router from '@/router/index'
export default {
  name: 'app',
  components: {
    MainTabBar,
    MainNavBar,
    MainContent
  },
  router,
}
</script>

<style>
  @import 'assets/css/base.css';
  .main-content{
    padding-left:200px;
    padding-top:100px;
    background: url("assets/img/bg1.jpg") no-repeat;
    background-size: 100% auto;
    height: 973px;
  }
  #app{
    width:1920px;
    height:955px;
  }

</style>
