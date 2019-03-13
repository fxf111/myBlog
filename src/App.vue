<template>
  <el-container class="wrap">
    <el-header>Header</el-header>
    <router-view/>
  </el-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body {
    height: 100%;
  }
  .wrap {
    height: 100%;
  }
</style>
