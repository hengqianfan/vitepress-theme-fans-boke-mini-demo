// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './styles/index.scss'

import PageHome from '../../components/PageHome/index.vue'

import { createPinia } from 'pinia'

// 导入代码组图标样式
import 'virtual:group-icons.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {

    app.component('PageHome', PageHome)
    const pinia = createPinia()
    app.use(pinia)

  }
}
