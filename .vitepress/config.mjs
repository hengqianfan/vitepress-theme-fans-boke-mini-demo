import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "界 · 衡千帆",
  description: "A VitePress Site",
  base: '/vitepress-theme-fans-boke-mini-demo/',
  themeConfig: {
    logo: '/icon/jie.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '我的宇宙', items: [
          { text: 'Bilibili', link: 'https://space.bilibili.com/3546824455489827' },
          { text: '小黑盒', link: 'https://www.xiaoheihe.cn/bbs/user_profile_share?user_id=51427625&h_src=writer' },


        ]
      },
      { text: '关于', link: '/pages/about' }
    ],
    outline: {
      label: '页面大纲'
    },

    sidebar: [],
    // 开启本地搜索功能
    search: {
      provider: 'local',
      // provider: 'algolia'
      options: {

        translations: {

          button: {
            buttonText: "全站搜索",
            buttonAriaLabel: "搜索文档",
          },

          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },

        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hengqianfan' }
    ]
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ]
  }
})
