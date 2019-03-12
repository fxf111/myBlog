<template>
    <el-aside width="200px">
        <user-profile/>
    </el-aside>
</template>

<script>
    import UserProfile from './UserProfile.vue'
    export default {
        data() {
            return {}
        },
        components: {
            UserProfile
        }
    }
</script>

<style scoped>

</style>