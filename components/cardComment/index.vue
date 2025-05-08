<template>
    <div class="waline-wrapper">
        <Waline :serverURL="serverURL" :path="path" />
    </div>
</template>

<script setup>
import { Waline } from '@waline/client/component';
import { computed } from 'vue';

import { useRoute } from 'vitepress';

import '@waline/client/style';


// 替换为你的 Vercel 服务端地址
// const serverURL = 'https://bokeminicomment-a8cnuyxhh-hengqianfans-projects.vercel.app/'

const serverURL = 'comment.hengqianfan.site'



const route = useRoute();
const path = computed(() => route.path);
</script>