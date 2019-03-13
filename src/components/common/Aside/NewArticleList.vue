<template>
    <div class="new-article-list-container">
        <h2 class="aside-title">最新文章</h2>
        <ul class="new-article-list">
            <li class="new-article-item left-aside-item" v-for="(article, index) in newArticleList" :key="index"> {{article}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newArticleList: [
                    'aaaaaaaaa',
                    'bbbb',
                    'asdfsadfasdfasdfasdfasdfsdafsdafsdfasdfsadfasd'
                ]
            }
        }
    }
</script>

<style lang=less scoped>
    .new-article-item {
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>