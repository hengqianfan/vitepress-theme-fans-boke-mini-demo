<template>
    <div class="myvideo">


        <div class="" v-if="xType == 'local'">
            <ClientOnly>
                <video :src="withBase(xSrc)" controls class="myiframe"></video>
            </ClientOnly>
        </div>

        <div class="" v-else>
            <ClientOnly>
                <iframe :src="withBase(xSrc + '&autoplay=0')" v-resize="{ log: true }" frameborder="no" scrolling="no"
                    seamless="" allowfullscreen="allowfullscreen" class="myiframe"></iframe>
            </ClientOnly>
        </div>




    </div>
</template>




<script setup>
import { withBase } from 'vitepress';
import { onMounted } from 'vue';


const props = defineProps(['xSrc', 'xType'])

// 0.5625 --> 9:16
// 0.75 --> 3:4 
// 视频屏幕比例
const ratio = 0.5625

function changeVideoIframe() {
    // 直接作用于 <iframe> 会存在问题
    // 所以，只能将改变作用于外层div, 然后内容元素占满它来实现自适应
    const video = document.querySelectorAll('.myvideo');
    const width = document.querySelectorAll('.myvideo')[0].scrollWidth;

    for (let i = 0; i < video.length; i++) {
        video[i].style.height = width * ratio + 'px'
    }
}

onMounted(() => {

    changeVideoIframe()
    window.onresize = function () { changeVideoIframe() }

})

</script>

<style>
.myvideo {
    padding: 10px;
    /* border-left: 2px dashed blue;
    border-right: 2px dashed blue; */
    box-shadow: 5px 5px 18px #dedede,
        -5px -5px 18px #ffffff;
    overflow: hidden;
    /* background-color: blueviolet; */

}

.myiframe {
    width: 100%;
    height: 100%;
    /* padding: 5px; */
}
</style>
