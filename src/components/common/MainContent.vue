<template>
    <div class="main-content-container">
        <div class="article-preview-list">
            <article-preview/>
        </div>
        <el-pagination
            class="main-content-pagination"
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    import ArticlePreview from './ArticlePreview/ArticlePreview.vue'
    export default {
        data() {
            return {

            }
        },
        components: {
            ArticlePreview
        }
    }
</script>

<style scoped>
    .article-preview-list {
        margin-bottom: 15px;
    }
    .main-content-pagination {
        text-align: center;
    }
</style>