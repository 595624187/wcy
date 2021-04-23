<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <main-nav-bar></main-nav-bar>
    <main-content></main-content>
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
    position: relative;
    top:100px;
    left:200px;
    z-index: 9;
  }
</style>
