<template>
    <div class="user-profile-container">
        <!-- 用户头像 -->
        <img class="user-avat"  alt="">
        <!-- 用户信息 START-->
        <div class="user-info-container">
            <!-- 用户名 -->
            <h1 class="username">fxf111</h1>
            <ul class="user-info">
                <li class="user-info-item">
                    <span>
                        文章:
                    </span>
                    <a href="javascript:;">10</a>
                </li>
                <li class="user-info-item">
                    <span>
                        专题:
                    </span>
                    <a href="javascript:;">10</a>
                </li>
            </ul>
        </div>
        <!-- 用户信息 END-->
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style scoped lang=less >
    .user-profile-container {
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
    }
    .user-avat {
        width: 80px;
        height: 80px;
        background:#f00;
        border-radius: 50%;
    }
    .user-info {
        overflow: hidden;
        >.user-info-item {
            display: inline-block;
            margin: 0 5px;
        }
    }
</style>