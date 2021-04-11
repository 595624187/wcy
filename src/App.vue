<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <main-nav></main-nav>
    <main-content></main-content>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
import MainNav from "@/components/content/mainNav/MainNav";
import MainContent from "@/components/content/mainContent/MainContent";

import router from '@/router/index'
export default {
  name: 'app',
  components: {
    MainTabBar,
    MainNav,
    MainContent
  },
  router,
}
</script>

<style>
  @import 'assets/css/base.css';
  .content{
    position: relative;
    top:100px;
    left:200px;
  }
</style>
