<template>
    <div class="topic-container">
        <h2 class="aside-title">专题</h2>
        <ul class="topic-list">
            <li class="topic-name left-aside-item" v-for="(topic, index) in topicList" :key="index">
                {{topic.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                topicList: [
                    {name: 'a', topic_id: 0, article_total: 20},
                    {name: 'b', topic_id: 0, article_total: 20},
                ]
            }
        }
    }
</script>

<style scoped>
    .topic-list {
        overflow: hidden;
    }
    .topic-name {
        float: left;
        margin-right: 10px;
    }
</style>