<template>
    <div class="da-all">
        <div class="da-cover" v-if="page.frontmatter.cover">
            <img :src="withBase(page.frontmatter.cover)" alt="" class="da-cover-img">
            <div class="da-info">

                <div class="da-title" v-if="page.title"> {{ page.title }}</div>
                <!-- <div class="da-title"> {{ formatDate(page.frontmatter.time) }}</div> -->
            </div>

        </div>
        <div class="da-cover" v-else>
            <img :src="withBase('/cover/mo.png')" alt="" class="da-cover-img">
        </div>


        <!-- {{ page }} -->
    </div>
</template>

<script setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { formatDate } from '../../.vitepress/tools/formatDate'

const { page } = useData()
const bannerImageUrl = computed(() => {
    return '/vitepress-theme-fans-boke-mini-demo' + page.value.frontmatter.cover
})


</script>

<style lang="scss" scoped>
@use './app.scss';

.da-all {
    position: relative;
    box-shadow: 2px 2px 3px #dedede,
        -2px -2px 3px #ffffff;
    margin-bottom: 30px;

    .da-cover {
        height: 200px;
        position: relative;
        border-radius: 10px;
        overflow: hidden;



        .da-cover-img {

            width: 100%;
            height: 100%;

            // 截取中间部分为封面
            object-fit: cover;
            object-position: center;

        }




        .da-info {
            position: absolute;
            bottom: 20px;
            left: 20px;

            .da-title {
                position: relative;

                z-index: 100;

                font-size: 32px;
                color: white;
                font-family: '优设标题黑';

                padding: 10px;
                border-radius: 5px;
                box-shadow: 3px 3px 5px #dedede,
                    -3px -3px 5px #ffffff;



            }

        }
    }



    .da-cover::before {

        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: rgba(17, 24, 39, 0.3);

        // background: rgba(139, 133, 133, 0.4);

        /* 透明度控制 */
        z-index: 10;
        /* 确保遮罩在图片上方 */

    }
}
</style>