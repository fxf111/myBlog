<template>
    <el-aside width="200px">
        <user-profile/>
        <topic/>
        <new-article-list/>
        <search/>
    </el-aside>
</template>

<script>
    import UserProfile from './UserProfile.vue'
    import NewArticleList from './NewArticleList.vue'
    import Topic from './Topic.vue'
    import Search from './Search.vue'
    export default {
        data() {
            return {}
        },
        components: {
            UserProfile,
            NewArticleList,
            Topic,
            Search
        }
    }
</script>

<style scoped>

</style>