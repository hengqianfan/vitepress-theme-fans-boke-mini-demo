<template>
    <div class="ph-all">
        <div class="ph-nav">
            <div class="ph-nav-item" @click="boke.changeNowCategory('最新')">
                最新
            </div>
            <!-- 获取分类列表，但是只允许 -->
            <!-- <div class="ph-nav-item" v-for="it in boke.categories.slice(0, 3)"> -->
            <div class="ph-nav-item" v-for="it in boke.categories" @click="boke.changeNowCategory(it)">
                {{ it }}
            </div>



        </div>

        <div class="ph-main">

            <div class="ph-main-posts">



                <div class="" v-if="boke.showedPosts === `[]`">暂无文章，请添加文章！</div>

                <div class="ph-main-postCard" v-for="it in boke.showedPosts">
                    <div class="ph-main-postCard-cover">
                        <img :src="it.frontmatter.cover || '/cover/mo.png'" alt="" class="ph-main-postCard-cover-img">
                    </div>
                    <div class="ph-main-postCard-title">
                        <a :href="withBase(it.url)">
                            {{ it.frontmatter.title }}
                        </a>
                    </div>


                    <div class="ph-main-postCard-info">
                        <!-- <div class="ph-main-postCard-info-time">2025-12-12</div> -->
                        <div class="ph-main-postCard-info-time">{{ formatDate(it.frontmatter.time) }}</div>

                        <div class="ph-main-postCard-info-tags" v-if="it.frontmatter.tags">
                            <div class="ph-main-postCard-info-tag" v-for="tag in it.frontmatter.tags.slice(0, 3)">
                                {{ tag }}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="ph-main-paginate">

                <div class="ph-main-paginate-button" @click="boke.changeCurrentPage(boke.currentPage - 1)">上一页</div>

                <div class="ph-main-paginate-data">{{ boke.currentPage }} &nbsp / &nbsp {{+ boke.pagesTotal }}</div>

                <div class="ph-main-paginate-button" @click="boke.changeCurrentPage(boke.currentPage + 1)">下一页</div>



                <!-- <div class="ph-main-paginate-item" v-for="it in boke.pagesTotal" @click="boke.changeCurrentPage(it)"> {{
                    it }} </div> -->
                <!-- {{ boke.pagesTotal }} -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { data as posts } from '../../data/posts.data'
import { useBokeStore } from '../../stores/boke'
import { useRouter, withBase } from 'vitepress'
import { formatDate } from '../../.vitepress/tools/formatDate'
const router = useRouter()


const boke = useBokeStore()
const toPage = (mo) => {
    // 使用绝对路径（需包含 VitePress 的 base 配置，如存在）
    router.go(mo)
}



// renderDataList(currentData);

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
        flex-direction: column;

        .ph-main-posts {

            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-start;

            .ph-main-postCard {
                width: 320px;
                height: 250px;

                margin: 10px;
                border-radius: 10px;


                box-shadow: 5px 5px 18px #dedede,
                    -5px -5px 18px #ffffff;

                .ph-main-postCard-cover {
                    width: 320px;
                    height: 180px;
                    border-radius: 10px 10px 0 0;
                    ;
                    overflow: hidden;
                    transition: all 0.6s;

                    .ph-main-postCard-cover-img {
                        width: 100%;
                        height: 100%;
                        border-radius: 10px 10px 0 0;
                        transition: all 0.6s;
                    }

                }

                .ph-main-postCard-cover:hover {

                    transition: all 0.6s;


                    .ph-main-postCard-cover-img {
                        transform: scale(1.3);

                        transition: all 0.6s;
                    }

                }




                .ph-main-postCard-title {
                    background-color: var(--vp-c-bg);
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    font-family: '优设标题黑';

                    color: var(--vp-c-text-1);


                }

                .ph-main-postCard-title:hover {
                    background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    transition: background 0.5s;
                    font-weight: 800;



                }

                .ph-main-postCard-info {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 0 5px;
                    height: 30px;

                    .ph-main-postCard-info-time {
                        // background-color: #d5d3da;
                        font-size: 10px;
                        padding: 0 10px;
                        border-radius: 5px;
                        height: 20px;
                        line-height: 20px;
                        color: #828e98;

                    }

                    .ph-main-postCard-info-tags {
                        display: flex;

                        .ph-main-postCard-info-tag {
                            margin: 0 5px;
                            min-width: 30px;
                            height: 20px;
                            line-height: 20px;
                            border-radius: 5px;
                            color: white;
                            text-align: center;
                            font-size: 10px;
                            padding: 0 5px;
                            background-color: #a0a0dd;
                            background-color: #b1b1dd;


                        }
                    }
                }
            }
        }

        .ph-main-paginate {
            // background-color: rebeccapurple;
            display: flex;
            margin: 0 auto;
            margin-top: 20px;

            .ph-main-paginate-button {
                width: 80px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                margin: 0 20px;
                border-radius: 5px;
                text-align: center;
                box-shadow: 2px 2px 8px #dedede,
                    -2px -2px 8px #ffffff;


            }


            .ph-main-paginate-item {
                background-color: #d5d3da;
                margin: 0 20px;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                border-radius: 5px;
                color: white;
                font-size: 12px;
            }
        }

    }
}
</style>