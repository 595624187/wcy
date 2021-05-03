<template>
  <div class="user">
    <p>我是用户界面</p>
    <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {

  }

}
</script>

<style scoped>

</style>