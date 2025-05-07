// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.scss'

import mediumZoom from 'medium-zoom'

// 导入组件
import PageHome from '../../components/PageHome/index.vue'

import cardArticles from '../../components/cardArticles/index.vue'

import cardQR from '../../components/cardQR/index.vue'

import cardVideo from '../../components/cardVideo/index.vue'

import cardComment from '../../components/cardComment/index.vue'



import DocAfter from '../../components/DocAfter/index.vue'





import { createPinia } from 'pinia'

// 导入代码组图标样式
import 'virtual:group-icons.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(DocAfter),
      'doc-after': () => h(cardComment)

    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('PageHome', PageHome)

    app.component('cardQR', cardQR)
    app.component('cardArticles', cardArticles)

    app.component('cardVideo', cardVideo)
    const pinia = createPinia()
    app.use(pinia)

  },
  setup() {
    const route = useRoute()
    const initZoom = () => {

      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    };
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
