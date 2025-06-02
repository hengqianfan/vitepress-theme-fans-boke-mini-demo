<template>
    <div class="ph-all">

        <div class="ph-nav">


            <!-- 获取分类列表，但是只允许 -->
            <!-- <div class="ph-nav-item" v-for="it in boke.categories.slice(0, 3)"> -->
            <div :class="['ph-nav-item', { 'active': boke.nowCategoryIndex == index }]"
                v-for="(it, index) in boke.categories" @click="boke.changeNowCategory(it, index)">
                {{ it }}
            </div>



        </div>

        <div class="ph-main">



            <div class="ph-main-posts">



                <div class="" v-if="boke.showedPosts === `[]`">暂无文章，请添加文章！</div>

                <div class="ph-main-postCard" v-for="it in boke.showedPosts">
                    <div class="ph-main-postCard-cover">
                        <img :src="withBase(it.frontmatter.cover || '/cover/mo.png')" alt=""
                            class="ph-main-postCard-cover-img">
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



            </div>










        </div>



        <div class="ph-siteinfo">


            <div class="ph-siteinfo-theme">
                <img src="https://img.shields.io/badge/主题-4285F4" alt="">

                <div class="ph-siteinfo-theme-name">
                    <a href="https://hengqianfan.github.io/vitepress-theme-fans-instructions/"
                        target="_blank">Boke-mini</a>
                </div>
            </div>


            <div class="ph-siteinfo-powered">
                Powered |
                <div class="">VitePress</div>
            </div>


            <div class="ph-siteinfo-icp">

                {{ bokeMain.ipc }}
            </div>




        </div>

    </div>
</template>

<script setup>
import { data as posts } from '../../data/posts.data'
import { bokeMain } from '../../data/main'

import { useBokeStore } from '../../stores/boke'
import { useRouter, withBase } from 'vitepress'
import { formatDate } from '../../.vitepress/tools/formatDate'
const router = useRouter()

const boke = useBokeStore()
const toPage = (mo) => {
    // 使用绝对路径（需包含 VitePress 的 base 配置，如存在）
    router.go(mo)
}



</script>

<style lang="scss" scoped>
@use './app.scss';


.ph-all {
    // $lineColor: #f5f0f0;
    // background-image: linear-gradient($lineColor 1px, transparent 1px),

    //     linear-gradient(to right, $lineColor 1px, transparent 1px);

    // background-size: 100% 10px,
    //     10px 100%;
    // background-position: 0 0;



    width: 100%;
    min-height: 90vh;
    // background-color: wheat;
    display: flex;
    flex-direction: column;
    padding: 10px;

    .ph-nav {
        // width: 80%;
        min-height: 40px;
        max-width: 100%;
        overflow-x: scroll;
        margin: 10px auto;
        padding: 0 20px;
        background-color: var(--vp-c-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        border-radius: 20px;


        box-shadow: 1px 1px 2px #dedede,
            -1px -1px 2px #f5f0f0;



        .ph-nav-item {
            min-width: 30px;
            height: 25px;
            line-height: 25px;

            text-align: center;
            font-family: '优设标题黑';
            font-size: 18px;
            color: rgb(80, 80, 80);
            color: var(--vp-c-text-1);

            margin: 0 30px;
            transition: all 0.3s;
        }


        .active {

            font-size: 18px;
            // 配色一
            // color: #5465ca;
            // border-bottom: 1px solid #5465ca;

            // 配色二
            color: blueviolet;
            border-bottom: 1px solid blue;


            transition: all 0.3s;

        }
    }


    .ph-main {


        width: 80%;
        margin: 0px auto;
        min-height: 10vh;
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        // 底部网站信息的分割线
        border-bottom: 1px solid rgb(228, 225, 225);



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
                background-color: var(--vp-c-bg);

                box-shadow: 5px 5px 10px #dedede,
                    -5px -5px 10px #ffffff;

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

            .dark .ph-main-postCard {
                width: 320px;
                height: 250px;

                margin: 10px;
                border-radius: 10px;



                box-shadow: none !important;

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

            display: flex;
            margin: 0 auto;
            margin-top: 20px;

            .ph-main-paginate-button {
                width: 60px;
                height: 30px;
                line-height: 30px;
                font-size: 12px;
                margin: 0 15px;
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








    .ph-siteinfo {
        min-width: 40%;
        margin: 0 auto;
        padding: 20px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        // 在网站底部留白
        margin-bottom: 150px;




        .ph-siteinfo-powered {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0 10px;

            div {
                color: #1d4bad;
                font-family: '优设标题黑';
                margin-left: 5px;
            }

            div:hover {

                color: rgb(216, 213, 10);

            }


        }

        .ph-siteinfo-theme {

            display: flex;
            justify-content: space-around;
            align-items: center;
            // font-size: 20px;

            div {
                font-family: '优设标题黑';
                margin-left: 5px;
            }

            div:hover {
                background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                transition: background 0.5s;
                font-weight: 800;
            }




        }

        .ph-siteinfo-icp {
            font-size: 12px;
            color: rgb(112, 106, 106);


        }

        .ph-siteinfo-icp:hover {

            color: rgb(23, 22, 109);

        }


    }
}
</style>