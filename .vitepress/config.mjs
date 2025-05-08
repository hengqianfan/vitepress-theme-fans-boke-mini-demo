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
          { text: '<i class="iconfont icon-bilibili"></i> Bilibili', link: 'https://space.bilibili.com/3546824455489827' },
          { text: '<i class="iconfont icon-github"></i> Github', link: 'https://github.com/hengqianfan' },
          { text: '<i class="iconfont icon-youtube"></i> Youtube', link: 'https://github.com/hengqianfan' },

          { text: '<i class="iconfont icon-heihe"></i> Xiaoheihe', link: 'https://www.xiaoheihe.cn/bbs/user_profile_share?user_id=51427625&h_src=writer' },



        ]
      },
      { text: '关于', link: '/pages/about' }
    ],
    outline: {

      label: '页面大纲',
      level: [2, 6]

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
