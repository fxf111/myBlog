<template>
    <el-container>
      <LeftAside/>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
</template>

<script>
import LeftAside from 'cmp/common/Aside/Aside.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    LeftAside
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
