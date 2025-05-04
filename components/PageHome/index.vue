<template>
    <div class="ph-all">
        <div class="ph-nav">
            <div class="ph-nav-item">
                最新
            </div>
            <!-- 获取分类列表，但是只允许 -->
            <!-- <div class="ph-nav-item" v-for="it in boke.categories.slice(0, 3)"> -->
            <div class="ph-nav-item" v-for="it in boke.categories">
                {{ it }}
            </div>

        </div>

        <div class="ph-main">
            <div class="ph-main-postCard" v-for="it in posts">
                <div class="ph-main-postCard-cover">
                    <img :src="it.frontmatter.cover || '/cover/mo.png'" alt="" class="ph-main-postCard-cover-img">
                </div>
                <div class="ph-main-postCard-title">
                    <a :href="withBase(it.url)">
                        {{ it.frontmatter.title }}
                    </a>
                </div>


                <div class="ph-main-postCard-info">
                    <div class="ph-main-postCard-info-time">2025-12-12</div>
                    <div class="ph-main-postCard-info-tags">
                        <div class="ph-main-postCard-info-tag">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { data as posts } from '../../data/posts.data'
import { useBokeStore } from '../../stores/boke'
import { useRouter, withBase } from 'vitepress'
const router = useRouter()


const boke = useBokeStore()
const toPage = (mo) => {
    // 使用绝对路径（需包含 VitePress 的 base 配置，如存在）
    router.go(mo)
}


</script>

<style lang="scss" scoped>
.ph-all {
    width: 100%;
    min-height: 90vh;
    // background-color: wheat;
    display: flex;
    flex-direction: column;


    .ph-nav {
        width: 80%;
        min-height: 50px;
        margin: 10px auto;
        background-color: var(--vp-c-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .ph-nav-item {
            width: 100px;
            height: 30px;
            line-height: 30px;

            text-align: center;
            font-family: '优设标题黑';
            font-size: 20px;
            color: rgb(80, 80, 80);
            color: var(--vp-c-text-1);

            margin: 10px;
        }
    }



    .ph-main {

        // background-color: rebeccapurple;
        width: 80%;
        margin: 0px auto;
        min-height: 10vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;

        .ph-main-postCard {
            width: 320px;
            height: 240px;

            margin: 10px;
            border-radius: 10px;


            box-shadow: 5px 5px 18px #dedede,
                -5px -5px 18px #ffffff;

            .ph-main-postCard-cover {
                width: 320px;
                height: 180px;
                border-radius: 10px;

                .ph-main-postCard-cover-img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px 10px 0 0;
                }


            }


            .ph-main-postCard-title {
                background-color: var(--vp-c-bg);
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-family: '优设标题黑';

                color: var(--vp-c-text-1);
            }

            .ph-main-postCard-info {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0 20px;
                height: 30px;

                .ph-main-postCard-info-time {
                    background-color: #d5d3da;
                    font-size: 10px;
                    padding: 0 10px;
                    border-radius: 5px;
                    height: 20px;
                    line-height: 20px;
                    color: #ffffff;
                }
            }
        }

    }
}
</style>