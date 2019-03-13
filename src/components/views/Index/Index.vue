<template>
    <el-container>
      <LeftAside/>
      <el-container>
        <el-main>
          <main-content/>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
</template>

<script>
import LeftAside from 'cmp/common/Aside/Aside.vue'
import MainContent from 'cmp/common/MainContent.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    LeftAside,
    MainContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang=less scoped>

</style>
