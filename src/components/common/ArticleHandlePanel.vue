<template>
    <div class="article-preview-handle-panel">
        <!-- <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button> -->
        <span>{{article.author}}发表于{{article.create_time}}，最后更新{{article.update_time}}</span>
        <button class="edit btn">编辑</button>
        <button class="delete btn">删除</button>
        <span>评论({{article.comment_num}})</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    article_id: 0,
                    author: 'fxf111',
                    comment_num: 20,
                    create_time: '2019-11-11 11:11:11',
                    update_time: '2019-11-11 11:11:11',
                }
            }
        }
    }
</script>

<style lang=less scoped>

</style>