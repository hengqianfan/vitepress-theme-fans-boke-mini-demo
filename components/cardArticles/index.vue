<template>
    <div class="ca-all">
        <img :src="withBase('/cover/mo.png')" alt="" class="ca-cover">

        <a class="ca-title" :href="withBase('/posts/25050702 注册Github账号')">Github账号注册</a>
    </div>
</template>

<script setup>
import { withBase } from 'vitepress';

</script>

<style lang="scss" scoped>
.ca-all {
    width: 320px;
    height: 220px;
    margin: 10px auto;
    // background-color: rebeccapurple;
    border-radius: 15px;

    box-shadow: 5px 5px 18px #dedede,
        -5px -5px 18px #ffffff;
    transition: all 1s;


    .ca-cover {
        width: 320px;
        height: 180px;
        border-radius: 15px 15px 0 0;
        overflow: hidden;
        // 去除 图片放大样式 的 污染
        padding: 0 !important;
        box-shadow: none;

    }

    .ca-title {
        height: 40px;
        line-height: 40px;
        font-family: '优设标题黑';
        text-align: center;
        display: flex;
        justify-content: center;

    }
}

.ca-all:hover {
    transform: scale(0.9);

    .ca-cover {
        width: 320px;


    }

    .ca-title {
        height: 40px;


    }
}
</style>