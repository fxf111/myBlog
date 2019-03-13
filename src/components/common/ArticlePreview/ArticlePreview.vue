<template>
    <div class="article-preview-container">
        <h3 class="article-title">{{article.title}}</h3>
        <p class="article-preview-content">{{article.content}}</p>
        <article-handle-panel/>
    </div>
</template>

<script>
    import ArticleHandlePanel from '../ArticleHandlePanel.vue'
    export default {
        data() {
            return {
                article: {
                    article_id: 0, 
                    author: 'fxf111',
                    title: '文章标题',
                    content: '文章内容',
                    create_time: '2019-01-01 13:00:00',
                    update_time: '2019-01-01 14:00:00',
                    comment_num: 20,
                }
            }
        },
        components: {
            ArticleHandlePanel,
        }
    }
</script>

<style lang=less scoped>
    .article-preview-content {
        padding: 10px 0;
        max-height:80px;
        overflow: hidden;
    }
</style>