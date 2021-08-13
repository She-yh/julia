<template>
  <div id="app">
    <div id="container">
      <div id="navbar">
        <router-link to="/introduction" id="homepage">介绍</router-link>
        <router-link to="/about" id="about">关于</router-link>
      </div>
      <router-view></router-view>
      <julia></julia>
      <footer><a href="https://www.sheyuanhang.com">© 2021 SheYH.com</a></footer>
    </div>
  </div>
</template>

<script>
import Julia from "@/components/Julia";
export default {
  name: 'App',
  components: {
    Julia,
  }
}
</script>

<style>
</style>
