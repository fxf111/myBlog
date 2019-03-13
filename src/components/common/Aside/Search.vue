<template>
    <div class="search-container">
        <h2 class="aside-title">
            搜索
        </h2>
        <input class="search-ipt" type="text" v-model="searchTxt">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchTxt: ''
            }
        }
    }
</script>

<style scoped>
    .search-ipt {
        margin: 0 10px;
    }
</style>